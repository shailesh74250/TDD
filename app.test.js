const request = require("supertest");
const app = require('./app');

describe("Todo-App-API-Test", () => {
    it('get /todos array of todos object', () => {
        return request(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        name: expect.any(String),
                        completed: expect.any(Boolean),
                    }),
                )
            })
    });

    it('GET /todos/id -> specific tody by ID', () => {
        return request(app)
            .get('/todo/id')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        name: expect.any(String),
                        completed: expect.any(Boolean),
                    }),
                )
            })
    });

    it('GET /todos/id --> 404 if not found', () => {
        return request(app)
            .get('/todo/3434')
            .expect('Content-Type', /json/)
            .expect(404)
            .then((response) => {

            })
    });


    it('POST /todos --> create todo ', () => {
        return request(app)
            .post('/todo/')
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
                
            })
    } );

    it('GET /todos --> validates request body', () => {});
}); 