/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true
import sockMerchant from './sockMerchant';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testNumber = 9;
  const testArray = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  const result = sockMerchant(testNumber, testArray);
  console.log('Result: ', result);
}

main();
