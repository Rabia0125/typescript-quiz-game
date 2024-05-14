#! /usr/bin/env node
// The app will show the students multiple choice questions and promt the user to reply. 
// In the end it will show the students the result of the quiz.
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.italic.bold(`\n   *** WELCOME TO THE TYPESCRIPT QUIZ SYSTEM ***   \n`));
console.log(chalk.yellow.italic("- You are required to maximum 9 points for the win"));
let points = 0;
// question 1
let quest_1 = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: "Typescript is a super set off?",
        choices: ["C++", "Python", "Html", "Javascript"]
    }
]);
if (quest_1.q1 == "Javascript") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// question 2
let quest_2 = await inquirer.prompt([
    {
        name: "q2",
        type: "list",
        message: "What is TypeScript primarily used for?",
        choices: ["Memory Management", "Dynamic Typing", "Static Typing", "Asynchronous operations"]
    }
]);
if (quest_2.q2 == "Static Typing") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// question 3
let quest_3 = await inquirer.prompt([
    {
        name: "q3",
        type: "list",
        message: " Which of the following is NOT a valid TypeScript data type?",
        choices: ["void", "any", "dynamic", "tuple"]
    }
]);
if (quest_3.q3 == "dynamic") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// question 4
let quest_4 = await inquirer.prompt([
    {
        name: "q4",
        type: "list",
        message: "Which of the following will transpile a TypeScript file (example.ts) to JavaScript?",
        choices: ["typescript example.ts", "ts-compile example.ts", "tsc example.ts", "ts example.ts"]
    }
]);
if (quest_4.q4 == "tsc example.ts") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// question 5
let quest_5 = await inquirer.prompt([
    {
        name: "q5",
        type: "list",
        message: "How do you specify that a function does not return anything in TypeScript?",
        choices: ["function myFunc(): undefined", "function myFunc(): void", "function myFunc(): null", "function myFunc(): None"]
    }
]);
if (quest_5.q5 == "function myFunc(): void") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// question 6
let quest_6 = await inquirer.prompt([
    {
        name: "q6",
        type: "list",
        message: "How do you declare a variable that can be either a string or null in TypeScript?",
        choices: ["let variable: string || null;", "let variable: string | null;", "let variable: string & null;", "let variable: string && null;"]
    }
]);
if (quest_6.q6 == "let variable: string | null;") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// question 7
let quest_7 = await inquirer.prompt([
    {
        name: "q7",
        type: "list",
        message: "Which of the following TypeScript types can the unknown type be assigned to without type assertion?",
        choices: ["string", "any", "number", "void"]
    }
]);
if (quest_7.q7 == "any") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// question 8
let quest_8 = await inquirer.prompt([
    {
        name: "q8",
        type: "list",
        message: "Which command would you use to install TypeScript globally using npm?",
        choices: ["npm install typescript", "npm global install typescript", "npm install -g typescript", "npm typescript install global"]
    }
]);
if (quest_8.q8 == "npm install -g typescript") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// question 9
let quest_9 = await inquirer.prompt([
    {
        name: "q9",
        type: "list",
        message: "In TypeScript, what does an enum allow you to do?",
        choices: ["Store a list of numeric values.", "Store a set of named constants, numeric or string.", "Define a new data type.", "Assign multiple types to a variable."]
    }
]);
if (quest_9.q9 == "Store a set of named constants, numeric or string.") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// question 10
let quest_10 = await inquirer.prompt([
    {
        name: "q10",
        type: "list",
        message: "How do you define an array of strings in TypeScript?",
        choices: ["Array<string>", "string[]", "Both A and B", "List<string>"]
    }
]);
if (quest_10.q10 == "Both A and B") {
    console.log(chalk.green.italic("CORRECT"));
    points += 1;
}
else {
    console.log(chalk.red.italic("INCORRECT"));
}
// output condition
if (points >= 8) {
    console.log(chalk.blue.italic(`Your Points : ${points}`));
    console.log(chalk.italic.green(`"Congratulation", You are win`));
}
else {
    console.log(chalk.blue.italic(`Your Points : ${points}`));
    console.log(chalk.red.italic("You are lose, try next time"));
}
