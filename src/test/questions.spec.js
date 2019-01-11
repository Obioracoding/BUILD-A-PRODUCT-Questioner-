// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import uuid from 'uuid';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Question", () => {
    describe("GET /", () => {
        // Test to get all questions
        it("should get all questions", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        // Test to get single question
        it("should get a single question", (done) => {
             const id = uuid.v4();
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

        // Test to get single question
        it("should not get a single question", (done) => {
             const id = uuid.v4();
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });

         // Test to create questions
        it("should create question", (done) => {
            chai.request(app)
                .post('/')
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
                 });
        });

        // Test to create questions
        it("should not create questions", (done) => {
            chai.request(app)
                .post('/')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                 });
        });

        // Test to update questions
        it("should update questions", (done) => {
            const id = uuid.v4();
            chai.request(app)
                .put(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 });
        });

        // Test to update questions
        it("should not update questions", (done) => {
            const id = uuid.v4();
            chai.request(app)
                .put(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                 });
        });

        // Test to delete questions
        it("should delete questions", (done) => {
            const id = uuid.v4();
            chai.request(app)
                .delete(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(204);
                    res.body.should.be.a('object');
                    done();
                 });
        });

        // Test to delete questions
        it("should not delete questions", (done) => {
            const id = uuid.v4();
            chai.request(app)
                .delete(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                 });
        });

        
    });
});