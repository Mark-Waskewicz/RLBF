let clientController = {};

clientController.unsubscribe = (req, res, next) => {
  next()
};
clientController.subscribe = (req, res, next) => {
  next()
};
clientController.publish = (req, res, next) => {
  next()
};

module.exports = clientController;