/**
 * Normal Reversing the program of string
 * Input:- Manish Sharma
 * Output:- amrahS hsinaM
 * We can solve this question in two ways
 * 1. Using predefined APIs
 * 2. Using the normal for loop
 */

// Way-1

const reverseString = (str = "") => str.split("").reverse().join("");
console.log(reverseString("Manish Sharma"));

// Way-2
// This is tradination way
function reverseStringViaLoop(str = "") {
	let rst = "";
	for (let i = str.length - 1; i >= 0; i--) rst += str[i];
	return rst;
}
console.log(reverseStringViaLoop("Manish Sharma"));
