import RsvpModel from '../models/Rsvp';

const Rsvp = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} rsvp object 
   */
  create(req, res) {
    if (!req.body.response) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const rsvp = RsvpModel.create(req.body);
    return res.status(201).send(rsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} rsvps array
   */
  getAll(req, res) {
    const rsvps = RsvpModel.findAll();
    return res.status(200).send(rsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} rsvp object
   */
  getOne(req, res) {
    const rsvp = RsvpModel.findOne(req.params.id);
    if (!rsvp) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    return res.status(200).send(rsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated rsvp
   */
  update(req, res) {
    const rsvp = RsvpModel.findOne(req.params.id);
    if (!rsvp) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    const updatedRsvp = MeetupModel.update(req.params.id, req.body)
    return res.status(200).send(updatedRsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const rsvp = RsvpModel.findOne(req.params.id);
    if (!rsvp) {
      return res.status(404).send({'message': 'rsvp not found'});
    }
    const ref = MeetupModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Rsvp;
