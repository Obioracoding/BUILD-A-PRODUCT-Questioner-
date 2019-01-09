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
  create(data) {
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
  findOne(id) {
    return this.rsvps.find(rsvp => rsvp.id === id);
  }
  /**
   * @returns {object} returns all rsvps
   */
  findAll() {
    return this.rsvps;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const rsvp = this.findOne(id);
    const index = this.rsvps.indexOf(Rsvp);
    this.rsvps[index].response = data['response'] || rsvp.response;
    //this.meetups[index].location = data['location'] || meetup.location;
    //this.meetups[index].createdBy = data['createdBy'] || meetup.createdBy;
    //this.meetups[index].topic = data['topic'] || meetup.topic;
    //this.meetups[index].happeningOn = data['happeningOn'] || meetup.happeningOn;
    //this.meetups[index].Tags = data['Tags'] || meetup.Tags;
    return this.rsvps[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const rsvp = this.findOne(id);
    const index = this.rsvps.indexOf(rsvp);
    this.rsvps.splice(index, 1);
    return {};
  }
}
export default new Rsvp();