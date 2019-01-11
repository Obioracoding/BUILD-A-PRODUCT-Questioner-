//Reference: Code base for controllers and models received from tutorials from Olawale Aladeusi on codementor

import moment from 'moment';
import uuid from 'uuid';

class Meetup {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.meetups = [];
  }
  /**
   * 
   * @returns {object} meetup object
   */
  createMeetup(data) {
    const newMeetup = {
      "id" : uuid.v4(),
      "createdOn" : new Date(),
      "createdBy" : uuid.v4(),
      "location" : data.location || '',
      "topic" : data.topic || '',
      "happeningOn" : moment.now(),
      "Tags" : data.Tags || '',
    };
    this.meetups.push(newMeetup);
    return newMeetup
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} meetup object
   */
  findOneMeetup(id) {
    return this.meetups.find(meetup => meetup.id === id);
  }
  /**
   * @returns {object} returns all meetups
   */
  findAllMeetup() {
    return this.meetups;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  updateMeetup(id, data) {
    const meetup = this.findOne(id);
    const index = this.meetups.indexOf(meetup);
    this.meetups[index].createdOn = data['createdOn'] || meetup.createdOn;
    this.meetups[index].location = data['location'] || meetup.location;
    this.meetups[index].createdBy = data['createdBy'] || meetup.createdBy;
    this.meetups[index].topic = data['topic'] || meetup.topic;
    this.meetups[index].happeningOn = data['happeningOn'] || meetup.happeningOn;
    this.meetups[index].Tags = data['Tags'] || meetup.Tags;
    return this.meetups[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  deleteMeetup(id) {
    const meetup = this.findOne(id);
    const index = this.meetups.indexOf(meetup);
    this.meetups.splice(index, 1);
    return {};
  }
}
export default new Meetup();