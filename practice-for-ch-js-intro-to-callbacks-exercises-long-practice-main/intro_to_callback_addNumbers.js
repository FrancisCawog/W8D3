const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question("Please enter a number to be added to the sum: ", (num) => {
            num = parseInt(num)
            sum = parseInt(sum)
            sum += num;
            completionCallback(sum);
            addNumbers(sum, numsLeft - 1, completionCallback);  
        });
    } else {
        rl.close();
    };
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// What is wrong with the following code?

rl.question('What do you think of JavaScript? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('What do you really think of JavaScript? ', (answer2) => {
        console.log(`You said: ${answer2}. Thank you for your honesty.`);
        rl.close();
    });
});