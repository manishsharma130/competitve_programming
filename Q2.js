const mat2 = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];

const printZPattern = (arr = [], r, c) => {
	if (r > 0 && c > 0 && c === r) {
		let iterator = c - 1;
		for (let i = 0; i < r; i++) {
			let pat = "";
			for (let j = 0; j < c; j++) {
				pat += ` ${i > 0 && i < c - 1 && j !== iterator ? " " : arr[i][j]}`;
			}
			iterator--;
			console.log(pat);
		}
	}
};

printZPattern(mat2, 2, 2);
