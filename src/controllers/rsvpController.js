import rsvpModel from '../models/rsvpModel';

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
    const Rsvp = rsvpModel.create(req.body);
    return res.status(201).send(Rsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} rsvps array
   */
  getAll(req, res) {
    const Rsvps = rsvpModel.findAll();
    return res.status(200).send(Rsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} rsvp object
   */
  getOne(req, res) {
    const Rsvp = rsvpModel.findOne(req.params.id);
    if (!rsvp) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    return res.status(200).send(Rsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated rsvp
   */
  update(req, res) {
    const updatedRsvp = rsvpModel.findOne(req.params.id);
    if (!rsvp) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    const updatedRsvp = rsvpModel.update(req.params.id, req.body)
    return res.status(200).send(updatedRsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const deleteRsvp = rsvpModel.findOne(req.params.id);
    if (!rsvp) {
      return res.status(404).send({'message': 'rsvp not found'});
    }
    const deleteRsvp = rsvpModel.delete(req.params.id);
    return res.status(204).send(deleteRsvp);
  }
}

export default Rsvp;
