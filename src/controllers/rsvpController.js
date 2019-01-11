import rsvpModel from '../models/rsvpModel';

const Rsvp = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} rsvp object 
   */
  createRsvp(req, res) {
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
  getAllRsvp(req, res) {
    const Rsvps = rsvpModel.findAll();
    return res.status(200).send(Rsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} rsvp object
   */
  getOneRsvp(req, res) {
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
  updateRsvp(req, res) {
    const updateRsvp = rsvpModel.findOne(req.params.id);
    if (!rsvp) {
      return res.status(404).send({'message': 'meetup not found'});
    }
    const updateRsvp = rsvpModel.update(req.params.id, req.body)
    return res.status(200).send(updateRsvp);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return status code 204 
   */
  deleteRsvp(req, res) {
    const deleteRsvp = rsvpModel.findOne(req.params.id);
    if (!rsvp) {
      return res.status(404).send({'message': 'rsvp not found'});
    }
    const deleteRsvp = rsvpModel.delete(req.params.id);
    return res.status(204).send(deleteRsvp);
  }
}

export default Rsvp;
