const mat2d = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];
// 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10

const spiralPrints = (arr = []) => {
	let r = 0;
	let c = 0;
	let r_l = arr.length - 1;
	let c_l = arr[0].length - 1;
	const rst = [];
	// 0, 1, 2, 3
	let direction = 0;
	while (r <= r_l && c <= c_l) {
		if (direction === 0) {
			for (let i = c; i <= c_l; i++) {
				rst.push(arr[r][i]);
			}
			direction = 1;
		} else if (direction === 1) {
			for (let i = r + 1; i <= r_l; i++) {
				rst.push(arr[i][c_l]);
			}
			direction = 2;
		} else if (direction === 2) {
			for (let i = c_l - 1; i >= c; i--) {
				rst.push(arr[r_l][i]);
			}
			direction = 3;
		} else if (direction === 3) {
			for (let i = r_l - 1; i >= r + 1; i--) {
				rst.push(arr[i][c]);
			}
			direction = 0;
			r++;
			c++;
			r_l--;
			c_l--;
		}
	}
	console.log(rst);
};

spiralPrints(mat2d);
