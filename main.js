#! /usr/bin/env node
import inquirer from "inquirer";
let todoos = [];
let condition = true;
while (condition) {
    let AddTask = await inquirer.prompt([
        {
            name: 'todo',
            message: "what do you want to add in your too do list?",
            type: 'input',
        },
        {
            name: 'AddMore',
            message: "do you want to add more?",
            type: 'confirm',
            default: 'false',
        },
    ]);
    todoos.push(AddTask.todo);
    condition = AddTask.AddMore;
    console.log(todoos);
}
;
console.log("here is your to do list");
