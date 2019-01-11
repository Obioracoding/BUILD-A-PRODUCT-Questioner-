import questionModel from '../models/questionModel';

const Question = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} question object 
   */
  createQuestion(req, res) {
    if (!req.body.title) {
      return res.status(400)
        .send({
          'message': 'All fields are required'
        })
    }
    const question = questionModel.create(req.body);
    return res.status(201).send(question);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} questions array
   */
  getAllQuestion(req, res) {
    const questions = questionModel.findAll();
    return res.status(200).send(questions);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} question object
   */
  getOneQuestion(req, res) {
    const question = questionModel.findOne(req.params.id);
    if (!question) {
      return res.status(404)
        .send({
          'message': 'question not found'
        });
    }
    return res.status(200).send(question);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated question
   */
  updateQuestion(req, res) {
    const question = questionModel.findOne(req.params.id);
    if (!question) {
      return res.status(404).send({'message': 'question not found'});
    }
    const updateQuestion = questionModel.update(req.params.id, req.body)
    return res.status(200).send(updateQuestion);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return status code 204 
   */
  deleteQuestion(req, res) {
    const question = questionModel.findOne(req.params.id);
    if (!question) {
      return res.status(404)
        .send({
          'message': 'question not found'
        });
    }
    const question = questionModel.delete(req.params.id);
    return res.status(204).send(question);
  },

  upvoteQuestion(req, res) {
    const question = questionModel.findOne(req.params.id);
    question.votes = question.votes++;
    return res.status(200)
      .send({
        status: 200,
        data: [question]
      });
  }
}

export default Question;
