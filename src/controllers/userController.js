import userModel from '../models/userModel';

const User = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  createUser(req, res) {
    if (!req.body.firstName && !req.body.lastName && !req.body.otherName && !req.body.email && !req.body.phoneNumber && !req.body.userName) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const user = UserModel.create(req.body);
    return res.status(201).send(user);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} users array
   */
  getAllUser(req, res) {
    const users = UserModel.findAll();
    return res.status(200).send(users);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object
   */
  getOneUser(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({'message': 'please sign-up to have access'});
    }
    return res.status(200).send(user);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated user
   */
  updateUser(req, res) {
    const user = userModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({'message': 'please sign-up'});
    }
    const updateUser = UserModel.update(req.params.id, req.body)
    return res.status(200).send(updateUser);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return status code 204 
   */
  deleteUser(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({'message': 'user not found'});
    }
    const user = UserModel.delete(req.params.id);
    return res.status(204).send(user);
  }
}

export default User;
