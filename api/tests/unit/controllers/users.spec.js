const usersController = require('../../../controllers/users')
const User = require('../../../models/User')

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({send: mockSend, json:mockJson, end: jest.fn() }))
const mockRes = {status: mockStatus}

describe('users controller', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns users with a status code of 200', async () => {
            jest.spyOn(User, 'all', 'get')
                .mockResolvedValue(['user1', 'user2']);
            await usersController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['user1', 'user2'])
        })
    });

    describe('show', () => {
        test('it returns a user with a status code of 200', async () => {
            let testUser = {
                id: 1, username: 'Test Username',
                password_digest: 'testing'
            }
            jest.spyOn(User, 'find')
                .mockResolvedValue(new User(testUser));

            const mockReq = {params: {id:1} }
            await usersController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new User(testUser));
        })
    });

})