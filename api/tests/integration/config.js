const { Pool } = require('pg');
const fs = require('fs');

const request = require('supertest');
const apiServer = require('../../server');

// import reset query
const testSeed = fs.readFileSync(__dirname + '/test_seeds.sql').toString();

// enable resetting of db between tests
const resetTestDb = () => {
    return new Promise (async (res, rej) => {
        try {
            const db = new Pool();
            await db.query(testSeed)
            res('Test DB reset')
        } catch (err) {
            rej('Could not reset TestDB')
        }
    })
}

// make these things available to test suites
global.request = request 
global.app = apiServer
global.resetTestDb = resetTestDb
global.port = process.env.PORT || 5000;