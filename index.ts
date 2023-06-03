#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet"

//welcome
console.log(figlet.textSync("Word Counter"));

const answer : {
    sentence:string,
} = await inquirer.prompt([

    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the words"
    }
]);

const words =  answer.sentence.trim().split(" ");
// trim sentence ka agay or peechy ka spaces ko remove/ignore krne ka liya
// split me btay ga ka kis sa split krna chahty h like comma or space or ye aik array ki form me output deta h

console.log (`Your sentence word count is: ${words.length}`);

