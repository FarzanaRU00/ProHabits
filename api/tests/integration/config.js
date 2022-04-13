const request = require('supertest');
const fs = require("fs");
const {Pool} = require('pg')
const app = require('../../server')

const testSeed = fs.readFileSync(__dirname + '/test_seeds.sql').toString();

const resetTestDb = () => {
    return new Promise (async (resolve, reject) => {
        try {
            const db = new Pool();
            await db.query(testSeed)
            resolve('Test database reset')
        } catch (error) {
            reject(`Test database could not be reset: ${err} in ${err.file}`)
        };
    });
}

global.request = request;
global.app = app;
global.resetTestDb = resetTestDb;
global.port = process.env.PORT || 5000;
