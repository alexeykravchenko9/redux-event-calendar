export default (req, res, next) => {

    return (req.session.userID) ? next(): res.sendStatus(403);

}