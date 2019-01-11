import meetupModel from '../models/meetupModel';

const Meetup = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} meetup object 
   */
  create(req, res) {
    if (!req.body.topic && !req.body.location && !req.body.Tags) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const meetup = meetupModel.create(req.body);
    return res.status(201).send(meetup);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} meetups array
   */
  getAll(req, res) {
    const meetups = meetupModel.findAll();
    return res.status(200).send(meetups);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} meetup object
   */
  getOne(req, res) {
    const meetup = meetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    return res.status(200).send(meetup);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated meetup
   */
  update(req, res) {
    const meetup = meetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    const updatedMeetup = meetupModel.update(req.params.id, req.body)
    return res.status(200).send(updatedMeetup);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const meetup = meetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    const ref = meetupModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Meetup;
