/**
 * Generate all numbers up to N in Lexicographical Order
 * Input: N = 15
 * Output:
 * 1 10 11 12 13 14 15 2 3 4 5 6 7 8 9
 */

function lexNumbers(n) {
	let s = [];
	for (let i = 1; i <= n; i++) s.push(i.toString());
	s.sort();
	let ans = [];
	for (let i = 0; i < n; i++) ans.push(parseInt(s[i]));
	return ans;
}
let n = 20;
console.log(lexNumbers(n));
