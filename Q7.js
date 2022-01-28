/**
 * This is another string reverse question
 * Input:- Manish Sharma
 * Output:- hsinaM amrahS
 * Let see in two way to to do it
 */

// This is first way
// This way is using predefined API
const reverseString = (str = "") =>
	str
		.split(" ")
		.map((item) => item.split("").reverse().join(""))
		.join(" ");
console.log("*****First Way*****");
console.log(reverseString("Manish Sharma"));

// This is second way
// In this way we are using the simple for loop

const reverseStringViaLoop = (str = "") => {
	let rst = "";
	let tempStr = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			rst += `${tempStr} `;
			tempStr = "";
		} else tempStr = `${str[i]}${tempStr}`;
	}
	if (tempStr) {
		rst += `${tempStr}`;
		// Freeing the memory
		tempStr = "";
	}
	return rst;
};
console.log("*****Second Way*****");
console.log(reverseStringViaLoop("Manish Sharma"));
