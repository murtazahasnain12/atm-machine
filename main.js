#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin :",
        type: "number"
    }
]);
//  12345   ===  1234 - False
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount :",
                type: "number"
            }
        ]);
        // =, -=, +=
        myBalance -= amountAns.amount;
        console.log("Your Remaining Balance is : " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your Balance is : " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Number !!!");
}
