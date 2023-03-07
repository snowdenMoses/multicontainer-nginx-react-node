const ToDoController = require('../controllers/todo_controller');

const routes = app => {
  // @route    GET to-do
  // @desc     Get all to do item
  // @access   Private
  app.get('/v1/to-do', ToDoController.get);
  // @route    GET to-do
  // @desc     Get single o do item
  // @access   Private
  app.get('/v1/to-do/:id', ToDoController.getById);
  // @route    POST to-do
  // @desc     Create to do item
  // @access   Private
  app.post('/v1/to-do', ToDoController.create);
};

module.exports = routes;
