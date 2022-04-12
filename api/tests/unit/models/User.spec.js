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
            let userData = { id: 1, username: 'Test' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [userData] });
            const result = await User.find(1);
            expect(result).toBeInstanceOf(User)
        })
    });

    describe('create', () => {
        test('it resolves with user on successful database query', async () => {
            let userData = { username: 'Test User', password_digest: 'password123' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...userData, id: 1 }] });
            jest.spyOn(Habit, 'findOrCreateByName')
                .mockResolvedValueOnce(new Habit({id: 1, name: 'Test Habit'}));
            const result = await User.create(userData);
            expect(result).toHaveProperty('id')
        })
    });
})