/**
 * Question:-1
 * KMP (Knuth morrris Pratt) Algorthm
 * Basic Naive Approach
 */
const findPattern = (txt = "", pat = "") => {
	let isFound = true;
	let foundCount = 0;
	for (let i = 0; i < txt.length - pat.length + 1; i++) {
		isFound = true;
		for (let j = 0; j < pat.length; j++) {
			if (txt[i + j] !== pat[j]) {
				isFound = false;
				break;
			}
		}
		if (isFound) foundCount++;
	}
	return foundCount;
};

const txt = "we come with simple process to provide simple things";
const pattern = "simple";

const rst = findPattern(txt, pattern);

if (rst > 0) {
	console.log("Number of match found ", rst);
} else {
	console.log("Not Found");
}
