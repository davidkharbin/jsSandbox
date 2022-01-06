/**
 * A compliance crawler utility is used to search out for compliance issues in the file system of any computer starting from the root directory.
 * A logger logs every time a move operation is performed by the utility. The operations that the utility can perform are given below:
 *
 * “../”: move to the parent folder of the current folder
 * “./”: remain in the same folder
 * “x/”: move to the child folder named x
 * 
 * 
 * The crawler now has to go back to the root directory as part of a reset operation. 
 * 
 * Find the minimum steps required to go back to the root directory from the current 
 * folder (the folder reached after all the moves have been performed).
 * 
 * The logged sequence of operations performed by the utility after entering the root directory is provided.
 * 
 * NOTE: The crawler never tries to go to the parent of the root directory.
 * 
 * 
 * Example
 * 
 * loggedMoves = ['x/', '../', 'y/', 'z/']
 * 
 * The crawler moves one folder down to folder x, then moves back up to the root directory. 
 * Then, the crawler moves down two folders to folder z. 
 * Two moves are required to get back to the root directory: one move to folder y and another move to the root.
 * 
 *  
 * 
 * Function Description
 * 
 * minimumSteps has the following parameter(s):
 *     loggedMoves[]: a string array, the moves of the compliance crawler that are logged
 * 
 *  
 * 
 * Returns
 *     int: the minimum number of moves
 * 
 * Constraints
 *     1 ≤ n ≤ 105
 *     1 ≤ size of loggedMovesi ≤ 102
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'minimumSteps' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY loggedMoves as parameter.
 */

function minimumSteps(loggedMoves) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const loggedMovesCount = parseInt(readLine().trim(), 10);

    let loggedMoves = [];

    for (let i = 0; i < loggedMovesCount; i++) {
        const loggedMovesItem = readLine();
        loggedMoves.push(loggedMovesItem);
    }

    const result = minimumSteps(loggedMoves);

    ws.write(result + '\n');

    ws.end();
}