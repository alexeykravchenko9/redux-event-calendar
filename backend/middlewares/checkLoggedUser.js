
export default (req, res) => (req.session.userID) ? res.send({ sessionUserID: req.session.userID }) : res.send({});