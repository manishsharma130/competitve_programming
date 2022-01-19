/**
 * Lexicographically smallest string possible by inserting given character
 * Input: S = “acd”, C = ‘b’
 * Output: “abcd”
 * Explanation: The possible strings formed by placing the character C in string at different indices are [“bacd”, “abcd”, “acbd”, “acdb”]
 * The lexicographically smallest string obtained is “abcd”.
 */

function insertSmallestCharacter(s = "", c = "") {
	// Traverse the string
	for (let i = 0; i < s.length; i++) {
		if (s[i] > c) {
			let temp = s;
			s = s.substring(0, i);
			s += c;
			s += temp.substring(i, temp.length);
			return s;
		}
	}
	s += c;
	return s;
}
console.log(insertSmallestCharacter("acb", "b"));
