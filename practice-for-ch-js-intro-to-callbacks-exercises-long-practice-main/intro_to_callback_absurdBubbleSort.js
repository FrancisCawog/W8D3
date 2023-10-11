const { rawListeners } = require("process");
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell you whether el1 > el2; pass true back to the
    // callback if true; else false.
    reader.question(`Is ${el1} greater than ${el2}?: (y/n) `, (answer) => {
        if (answer === "y") {
            callback(true);
        } else {
            callback(false);
        };
        // reader.close();
    });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
    if (i == arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    } else {
        askIfGreaterThan(arr[i], arr[i + 1], swap)
        function swap(conditional) {
            if (conditional) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            };
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
        };
    };
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    madeAnySwaps = true;
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        if (madeAnySwaps) {
            madeAnySwaps = false;
            innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr);
        };
    }
    outerBubbleSortLoop(true)
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});

// function outerBubbleSortLoop(madeAnySwaps) {
//     // Begin an inner loop if you made any swaps. Otherwise, call
//     // `sortCompletionCallback`.
//     while (madeAnySwaps) {
//         madeAnySwaps = false;
//         innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop)
//     }
// }

// innerBubbleSortLoop([1,2,3], 0, false, outerBubbleSortLoop)