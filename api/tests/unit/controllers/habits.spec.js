const habitsController = require('../../../controllers/habits');
const Habit = require('../../../models/Habit');
const Habits = require('../../../models/Habit');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({send: mockSend, json:mockJson}))
const mockRes = {status: mockStatus}

// Mocking is needed in unit testing so we can isolate the external dependencies. We are focusing on testing the actual code rather than the external dependencies behaviour.

describe('habits controller', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks ());

    describe('index', () => {
        test('it returns habits with a status code of 200', async () => {
            jest.spyOn(Habit, 'all', 'get')
                .mockResolvedValue(['habit1', 'habit2'])
            await habitsController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['habit1', 'habit2']);
        })
    });

    describe('show', () => {
        test('it returns a habit and the user with a status code of 200', async () => {
            jest.spyOn(Habit, 'find')
                .mockResolvedValue(new Habit({id:1, name: 'Test Habit', frequency: 3, currStreak: 3, streakEnd:, user_id:, }))
            jest.spyOn(Habit.prototype, 'habits', 'get')
                .mockResolvedValue(['habit1, habit2']);

            const mockReq = {params: {id:1} }
            await habitsController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200)
            expect(mockJson).toHaveBeenCalledWith({
                id: 1,
                name 'Test Habit',
                habits: ['habit1', 'habit2']
                // frequency: 3, 
                // currStreak: 3, 
                // streakEnd:, 
                // user_id:
            })
        })
    })

    describe('create', () => {
        test('it returns a new habit was a status code of 201', async () => {
            let testHabit = {
                id: 2,
                name: 'Testing Second',
                // frequency: 3, 
                // currStreak: 3, 
                // streakEnd:, 
                // user_id:
            }
            jest.spyOn(Habit, 'create')
                .mockResolvedValue(new Habit(testHabit))

            const mockReq = {body: testHabit}
            await habitsController.create(mockReq, mockRes)
            expect(mockStatus).toHaveBeenCalledWith(201)
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });


})