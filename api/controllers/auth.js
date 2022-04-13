require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');


async function register (req, res) {
    try {
        // console.log(req.body.username)
        // console.log(req.body.password)
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password, salt)
        console.log('working')
        await User.create({...req.body, password: hashed})
        console.log('working 2')
        res.status(201).json({username :result.username, id : result.id})
    } catch (err) {
        res.status(500).json({err});
    }
}


async function login (req, res) {
    console.log('hi')
    try {
        const user = await User.findByUsername(req.body.username)
        console.log('hi')
        if(!user){ 
            throw new Error('No user with this username') 
        };
        console.log(username)
        const authed = bcrypt.compare(req.body.password, user.passwordDigest, user.email)
        if (!!authed){
            const payload = { 
                username: user.username, 
                id: user.id ,
                email: user.email
            };
            console.log(bye)
            const sendToken = (err, token) => {
                if(err)
                {throw new Error('Error in token generation') }
                res.status(200).json({
                    success: true,
                    token: `Bearer ${token}`
                });
            }
            jwt.sign(payload, process.env.SECRET, { expiresIn: 60 }, sendToken);
        } else {
            throw new Error('User could not be authenticated')  
        }
    } catch (err) {
        res.status(401).json({ err:'can not log in' });
    }
}

module.exports = { register, login };
