import meetupModel from '../models/meetupModel';

const Meetup = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} meetup object 
   */
  createMeetup(req, res) {
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
  getAllMeetup(req, res) {
    const meetups = meetupModel.findAll();
    return res.status(200).send(meetups);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} meetup object
   */
  getOneMeetup(req, res) {
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
  updateMeetup(req, res) {
    const meetup = meetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    const updateMeetup = meetupModel.update(req.params.id, req.body)
    return res.status(200).send(updateMeetup);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  deleteMeetup(req, res) {
    const meetup = meetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    const ref = meetupModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Meetup;
