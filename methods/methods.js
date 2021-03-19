const fs = require("fs");
const colors = require('colors/safe');

// Inicializar el array
let Homeworks = [];

const saveData = () => {
  let data = JSON.stringify(Homeworks);

  fs.writeFile("db/data.json", data, (e) => {
    if (e) throw new Error("Issue to save the data");
  });
};

const loadDB = () => {
  try {
    Homeworks = require("../db/data.json");
  } catch (error) {
    Homeworks = [];
  }

  return Homeworks;
};

const createHomework = (description) => {
  let homework = {
    description,
    complete: false,
  };

  loadDB();

  let i = Homeworks.findIndex((element) => element.description === description);

  if (i >= 0) {
    return colors.red(`${description} all ready exist`);
  } else {
    Homeworks.push(homework);
    saveData();
    return colors.green(`${homework.description} created succesfull`);
  }
};

const updateHomework = (description, complete = true) => {
  loadDB();

  let i = Homeworks.findIndex(homework => homework.description === description);

  // Cuando devuelva -1 es porque no encontró index
  if (i >= 0) {
    Homeworks[i].complete = complete;
    saveData();
    return `${description} Updated = ${complete}`;
  } else {
    return `${description} don't exist`;
  }
};

const getHomeworks = () => {
  loadDB();

  return Homeworks;
};

const deleteHomework = (description) => {
  loadDB();

  let newList = Homeworks.filter(homework => homework.description !== description);

  // If the arrays have the same elements count, dont exist the homework
  if (newList.length === Homeworks.length) {
    return `${description} don't exist`;
  } else {
    Homeworks = newList;
    saveData();
    return `${description} deleted`;
  }
};

module.exports = {
  createHomework,
  updateHomework,
  getHomeworks,
  deleteHomework,
};
