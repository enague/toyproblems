/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/

var generateParenthesis = function(n, opened = 0, curr = '', arr = []) {
    if(n === 0 && opened === 0) {
        arr.push(curr)
    } else {
        if(n) {
            //add an opening parens
            generateParenthesis(n - 1, opened + 1, curr + '(', arr)
        }
        
        if(opened) {
            //add a closing parens
            generateParenthesis(n, opened - 1, curr + ')', arr)
        }
    }
    
    return arr;
};