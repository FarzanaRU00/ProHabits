/**
 * @jest-environment jsdom
 */

const Habit = require('../../../models/Habit')
const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbconfig/init');

describe('Habit', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with habits on successful db query', async => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ row: [{}, {}, {}]});
            const all = await Habit.all;
            expect(all).toHaveLength(3)
        })
    });

    describe('habits', () => {
        test('it resolves with formatted habits on succesful db query', async => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({
                    rows: [{id: 1, name: 'habit1', measurement:, frequency:}, {id: 2, name: 'habit2', measurement:, frequency:}]
                });
            let testHabit = new Habit({id: 1, name: 'habit1', measurement:, frequency:})
            const habits = await testHabit.users;
            expect(users).toHaveLength(?)
            expect(users[0]).toHaveProperty('path', '')

        })
    })

})