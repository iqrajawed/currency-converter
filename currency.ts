#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from'chalk'
const currency:any ={
    USD :1,
    EUR : 0.9,
    GBP : 0.79,
    INR : 83.26,
    PKR : 278.50 
}
let userAnswer =await inquirer.prompt([
    {
    name : 'from' ,
    type : 'list',
    choices : ['USD', 'EUR','GBP','INR','PKR'], 
    message :chalk.italic.yellow ('Enter to currency')
},
{
    name : 'to' ,
    type : 'list',
    choices : ['USD', 'EUR','GBP','INR','PKR'],
    message :chalk.italic.yellow ( 'Enter to currency')
},{
        name : 'amount' ,
       type: 'number',
      message : chalk.italic.yellow ('Enter your currency')

}]
)
let fromAmount = currency[userAnswer.from]
// console.log(fromAmount);

let toAmount = currency[userAnswer.to]
// console.log(toAmount);

let amount = userAnswer.amount;
// console.log(amount);

let baseAmount = amount / fromAmount;
// console.log(baseAmount);

let convertedAmount = baseAmount * toAmount;
console.log(chalk.italic.bold.red(`Rs.${convertedAmount}`));

