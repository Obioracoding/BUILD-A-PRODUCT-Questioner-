// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import uuid from 'uuid';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Meetup", () => {
    describe("GET /", () => {
        // Test to get all meetups
        it("should get all meetups", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        // Test to get single meetup
        it("should get a single meetup", (done) => {
             const id = 3;
             chai.request(app)
                 .get('/api/v1/meetups/:id')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

        // Test to get single meetup
        it("should not get a single meetup", (done) => {
             const id = uuid.v4();
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });

         // Test to create meetups
        it("should create meetup", (done) => {
            chai.request(app)
                .post('/')
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
                 });
        });

        // Test to create meetups
        it("should not create meetups", (done) => {
            chai.request(app)
                .post('/')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                 });
        });

        // Test to update meetups
        it("should update meetups", (done) => {
            const id = uuid.v4();
            chai.request(app)
                .put(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 });
        });

        // Test to update meetups
        it("should not update meetups", (done) => {
            const id = uuid.v4();
            chai.request(app)
                .put(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                 });
        });

        // Test to delete meetups
        it("should delete meetups", (done) => {
            const id = uuid.v4();
            chai.request(app)
                .delete(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(204);
                    res.body.should.be.a('object');
                    done();
                 });
        });

        // Test to delete meetups
        it("should not delete meetups", (done) => {
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