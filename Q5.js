/**
 * Input  : "abc de"
 * Output : edc ba
 *
 * Input : "intern at geeks"
 * Output : skeegt an retni
 */
function maintainTheReverse(str = "") {
	let rst = "";
	let isSpace = false;
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === " ") isSpace = true;
		else {
			rst += str[i];
			if (isSpace) rst += " ";
			isSpace = false;
		}
	}
	return rst;
}

// const str = "abc de";
const str = "intern at geeks";

console.log(maintainTheReverse(str));
