// const ToDo = require('../models/ToDo');

const create = async (req, res, next) => {
  const toDoProps = req.body;
  try {
    // const toDo = await ToDo.create(toDoProps);
    res.status(201).send("Clean the Room");
  } catch (e) {
    next();
  }
};

const get = async (req, res, next) => {
  try {
    // const toDo = await ToDo.find();
    res.status(200).send("Clean the Room");
  } catch (e) {
    next();
  }
};

const getById = async (req, res, next) => {
  // const toDoId = req.params.id;
  try {
    // const toDo = await ToDo.findById({ _id: toDoId });
    res.status(200).send("Clean the Room");
  } catch (e) {
    next();
  }
};

const ToDoController = {
  create,
  get,
  getById
};

module.exports = ToDoController;