/**
 * There are many cars parked in a parking lot. 
 * The parking lot is a straight line with a parking spot for every meter. 
 * There are n cars currently parked and a roofer wants to cover them with a roof. 
 * 
 * The requirement is that at least k cars currently in the lot are covered by the roof.
 * Determine the minimum length of the roof to cover k cars.
 * 
 * Example
 * 
 * n = 4
 * 
 * cars = [6, 2, 12, 7]
 * 
 * k = 3
 * 
 * Two roofs that cover three cars are possible: one covering spots 2 through 7 with a length of 6,
 * and another covering slots 6 through 12 with a length of 7. The shortest roof that meets the requirement is of length 6.
 * 
 * Function Description 
 * 
 * Complete the function carParkingRoof in the editor below.
 * 
 * carParkingRoof has the following parameter(s):
 * 
 *     int cars[n]: the parking spots where cars are parked
 * 
 *     int k: the number of cars that have to be covered by the roof
 * 
 * Returns:
 * 
 *     int: the minimum length of a roof that covers k cars where they are parked currently
 * 
 * Constraints:
 * 
 * 1 ≤ n ≤ 105
 * 1 ≤ k ≤ n
 * 1 ≤ cars[i] ≤ 1014
 * All spots taken by cars are unique
 *  
 * 
 * Input Format Format for Custom Testing
 * Input from stdin will be processed as follows and passed to the function.
 * 
 * In the first line, there is a single integer, n, the size of cars[].
 * 
 * Then, n line follows. In the ith of them, there is a single integer cars[i].
 * 
 * In the last line, there is a single integer k.
*/
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

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
 * Complete the 'carParkingRoof' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER_ARRAY cars
 *  2. INTEGER k
*/

function carParkingRoof(cars, k) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const carsCount = parseInt(readLine().trim(), 10);

    let cars = [];

    for (let i = 0; i < carsCount; i++) {
        const carsItem = parseInt(readLine().trim(), 10);
        cars.push(carsItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = carParkingRoof(cars, k);

    ws.write(result + '\n');

    ws.end();
}
