var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your favorite color?",
      name: "username"
    },
    {
        type: "input",
        message: "What is your favorite food?",
        name: "food"
    }]);

