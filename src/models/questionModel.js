//Reference: Code base for controllers and models received from tutorials from Olawale Aladeusi on codementor
import moment from 'moment';
import uuid from 'uuid';

class Question {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.questions = [];
  }
  /**
   * 
   * @returns {object} question object
   */
  createQuestion(data) {
    const newQuestion = {
      "id" : uuid.v4(),
      "createdOn" : new Date(),
      "createdBy" : uuid.v4(),
      "meetup" : uuid.v4(),
      "title" : data.title || '',
      "votes" : 0
    };
    this.questions.push(newQuestion);
    return newQuestion
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} question object
   */
  findOneQuestion(id) {
    return this.questions.find(question => question.id === id);
  }
  /**
   * @returns {object} returns all questions
   */
  findAllQuestion() {
    return this.questions;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  updateQuestion(id, data) {
    const question = this.findOne(id);
    const index = this.questions.indexOf(question);
    this.questions[index].createdOn = data['createdOn'] || question.createdOn;
    this.questions[index].createdBy = data['createdBy'] || question.createdBy;
    this.questions[index].meetup = data['meetup'] || question.meetup;
    this.questions[index].title = data['title'] || question.title;
    this.questions[index].body = data['body'] || question.body;
    this.questions[index].votes = data['votes'] || question.votes;
    return this.questions[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  deleteQuestion(id) {
    const question = this.findOne(id);
    const index = this.questions.indexOf(question);
    this.questions.splice(index, 1);
    return {};
  }
}
export default new Question();