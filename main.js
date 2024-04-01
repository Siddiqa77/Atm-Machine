#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";
let myBalance = 50000; // Dollar
let myPin = 5321;
let pinAnswer = await inquirer.prompt([
    {
        name: "Cardholdername",
        message: "Welcome Siddiqa Badar",
        type: "string",
    },
    {
        name: "pin",
        message: "enter your pin number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!! Login Successfully");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount to withdraw",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance! You can not withdraw more than your balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`Your remaining balance is:  ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your Account balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: " select your fast cash amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000", "20000", "30000", "40000"],
            },
        ]);
        if (fastCashAnswer.amount > myBalance) {
            console.log("Insufficient balance!");
        }
        else {
            myBalance -= fastCashAnswer.amount;
            console.log("withdraw successfully");
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code,Try agin");
}
