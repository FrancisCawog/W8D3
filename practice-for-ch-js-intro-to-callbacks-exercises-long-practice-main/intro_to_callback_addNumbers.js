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

