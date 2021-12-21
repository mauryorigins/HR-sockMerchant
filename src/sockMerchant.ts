/* eslint-disable no-plusplus */
export default function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  let pairs = n * 0;
  ar.sort();
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}
