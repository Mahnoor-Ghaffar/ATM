#! /usr/bin/env node

import inquirer from "inquirer"

let accountBalance = 20000; 
 let myPin = 9999;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please Enter Your Pin",
        type: "number"            
    }
]);

if (pinAnswer.pin == myPin) {
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw Cash", "Check Balance", "Fast Cash",]
        }
    ]);
    
    if (operationAns.operation === "Withdraw Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to withdraw",
                type:  "number"
            }
        ]);
        if (amountAns.amount <= accountBalance){
            accountBalance -= amountAns.amount;
              console.log(` withdraw successful \n Your remaining account balance is: ${accountBalance}`);
         }
        else {
            console.log(`Insufficient balance your current balance is ${accountBalance}`)
        }
    }
     else if (operationAns.operation === "Check Balance"){
        console.log(`Your account balance is: ${accountBalance}`);
    } 
    else if (operationAns.operation === "Fast Cash") {
        let checkBalance = await inquirer.prompt([
            {
                name: "cash",
                message: "Please select the amount you want to withdraw",
                type: "list",
                choices: [1000,5000,10000,50000],
            },
        ]);
        if (checkBalance.cash <= accountBalance){
            accountBalance -= checkBalance.cash;
              console.log(` withdraw successful \n Your remaining account balance is: ${accountBalance}`);
         }
        else {
            console.log(`Insufficient balance your current balance is ${accountBalance}`)
        }
    } 
} else {
    console.log("INVALID PIN \nPlease Enter Valid Pin Code");
}
