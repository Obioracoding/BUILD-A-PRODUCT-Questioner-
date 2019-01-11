import moment from 'moment';
import uuid from 'uuid';

class Rsvp {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.rsvps = [];
  }
  /**
   * 
   * @returns {object} rsvp object
   */
  createRsvp(data) {
    const newRsvp = {
      "id" : uuid.v4(),
      "meetup_id" : uuid.v4(),
      "user_id" : uuid.v4(),
      "response" : data.response || '',
    };
    this.rsvps.push(newRsvp);
    return newRsvp
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} rsvp object
   */
  findOneRsvp(id) {
    return this.rsvps.find(rsvp => rsvp.id === id);
  }
  /**
   * @returns {object} returns all rsvps
   */
  findAllRsvp() {
    return this.rsvps;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  updateRsvp(id, data) {
    const rsvp = this.findOne(id);
    const index = this.rsvps.indexOf(Rsvp);
    this.rsvps[index].response = data['response'] || rsvp.response;
    return this.rsvps[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  deleteRsvp(id) {
    const rsvp = this.findOne(id);
    const index = this.rsvps.indexOf(rsvp);
    this.rsvps.splice(index, 1);
    return {};
  }
}
export default new Rsvp();