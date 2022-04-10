/*
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

/*
Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.


Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

var maxProfit = function (prices) {
  // [7,1,5,3,6,4]
  // given param number[] prices i.e. [1,2,3,4]
  // use sliding window solution with pointers left and right
  // declare left at 0 and right at 1
  // check if right is less than left;
  // if right is less than left, then move left pointer to right position; this will slide the window and now left is start of window
  // if right is greater than left, set profit to whichever is greater - current profit or new profit
  // return profit

  // sliding window solution

  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[r] < prices[l]) l = r;
    else maxProfit = Math.max(maxProfit, prices[r] - prices[l]);

    r++;
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4]; // 5
// const prices = [1, 2, 3, 4, 5];      // 4
// const prices = [7, 6, 4, 3, 1];      // 0
console.log(maxProfit(prices));
