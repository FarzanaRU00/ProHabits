/**
 * @jest-environment jsdom
 */

const User = require('../../../models/User');
const Habit = require('../../../models/Habit');

jest.mock('../../../models/Habit')

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbconfig/init')

describe('User', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with habits on successful db query', async() => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await User.all;
            expect(all).toHaveLength(3)
        })
    });

    describe('find', () => {
        test('it resolves with user on successful database query', async() => {
            let userData = { username: 'Test', email: 'testing@gmail.com', password_digest: 'testingpassword'}
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [userData] });
            const result = await User.findByUsername(1);
            expect(result).toBeInstanceOf(User)
        })
    });

    describe('create', () => {
        test('it resolves with user on successful database query', async () => {
            let userData = { username: 'Test', email: 'testing@gmail.com', password_digest: 'testingpassword' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...userData, id: 1 }] });
            jest.spyOn(Habit, 'create')
                .mockResolvedValueOnce(new Habit({user_id: 1, name: 'Test Habit 1', measurement: 'ml', frequency: 5}));
            const result = await User.create(userData);
            expect(result).toHaveProperty('id')
        })
    });
})
