/**
 * KMP Algorithm
 * 1. Knuth-Morris-Pratt is the first linear time algorithm for string match
 * 2. Prevents the re-examination of previously matched characters.
 *
 * LPS (Longest prefix that is also a suffix) Array
 * P :- [onions]
 * LPS :-[0,0,0,1,2,0]
 *
 * Time complexity
 * Overall:->
 * O(n+m)
 * where n >> m;
 * O(m) extra space for lps array;
 */

function computeLPSArray(pat, lps = []) {
	let len = 0;
	let i = 1;
	lps[0] = 0;
	while (i < pat.length) {
		if (pat[i] === pat[len]) {
			lps[i] = len + 1;
			len += 1;
			i++;
		} else if (len !== 0) {
			len = lps[len - 1];
		} else {
			lps[i] = 0;
			i++;
		}
	}
}
// const strPattern = "aabaaas";

// const lps = new Array(strPattern.length).fill(0);

// console.log(lps);
// computeLPSArray(strPattern, lps);
// console.log(lps);

function KMPSearch(pat = "", txt = "") {
	const lps = new Array(pat.length).fill(0);
	computeLPSArray(pat, lps);
	let i = 0,
		j = 0;
	while (i < txt.length) {
		if (txt[i] === pat[j]) {
			i++;
			j++;
		} else if (j !== 0) {
			j = lps[j - 1];
		} else {
			i++;
		}
		if (j === pat.length) {
			console.log("Found Index:- ", i - j);
			j = lps[j - 1];
		}
	}
}

KMPSearch("aoiktuaoig", "aoikaoiktuaoiktuaoig");
