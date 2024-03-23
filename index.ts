#! /usr/bin/env node
import inquirer from "inquirer";

const randomnumber=Math.floor(Math.random() * 6 + 1);
const answer=await inquirer.prompt([
    {
        name:"userguessednumber",
        type:"number",
        message:"guess a random number between 1-6 in your mind and type here",
    }
])
if (answer.userguessednumber === randomnumber){
console.log("congrats you win! you guessed right number");
}else {
    console.log("you lost! you guessed wrong number");
}