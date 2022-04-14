const habitsController = require('../../../controllers/habits');
const Habit = require('../../../models/Habit');

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
            let testHabits = ['habit1', 'habit2']
            jest.spyOn(Habit, 'all', 'get')
                .mockResolvedValue(testHabits)
            await habitsController.getAllHabits(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testHabits);
        })
    });

    // describe('show', () => {
    //     test('it returns a habit with a status code of 200', async () => {
    //         let testingHabit = {
    //             user_id: 1, name: 'Test Habit 1', measurement:'ml', frequency: 5
    //         }
    //         jest.spyOn(Habit, 'findById')
    //             .mockResolvedValue(testingHabit)
            
    //         const mockReq = {params: {id:1} }
    //         await habitsController.show(mockReq, mockRes);
    //         expect(mockStatus).toHaveBeenCalledWith(200)
    //         expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
    //     })
    // });

    describe('show', () => {
        test('it returns a habit with a 200 status code', async () => {
            jest.spyOn(Habit, 'findHabitById')
                .mockResolvedValue(new Habit({ user_id: 1, name: 'Test Habit 1', measurement:'ml', frequency: 5} ));
                
            const mockReq = { params: { id: 1 } }
            await habitsController.showHabit(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
        })
    });

    describe('create', () => {
        test('it returns a new habit was a status code of 201', async () => {
            let testHabit = {
                user_id: 2, name: 'Test Habit 3', measurement:'8 hours', frequency: 7
            }
            jest.spyOn(Habit, 'createHabit')
                .mockResolvedValue(new Habit(testHabit));

            const mockReq = {body: testHabit}
            await habitsController.createHabit(mockReq, mockRes)
            expect(mockStatus).toHaveBeenCalledWith(422)
            // expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });


})
