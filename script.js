var constellations = {
	'Discidia': {
		stars: [[9, 25], [6, 18], [13, 16], [15, 9], [22, 8], [27, 2]],
		connections: [[0, 1], [1, 2], [0, 2], [2, 3], [2, 4], [3, 4], [4, 5]],
		color: '#E01903',
		type: 'Major'
	},
	'Armara': {
		stars: [[26, 26], [24, 15], [16, 22], [20, 5], [15, 4], [8, 12], [5, 18]],
		connections: [[0, 1], [1, 2], [0, 2], [1, 3], [3, 4], [4, 5], [2, 5], [5, 6]],
		color: '#B7BBB8',
		type: 'Major'
	},
	'Vicio': {
		stars: [[13, 11], [26, 10], [23, 4], [4, 6], [5, 20], [12, 25]],
		connections: [[0, 1], [1, 2], [0, 2], [0, 3], [3, 4], [4, 5], [5, 0]],
		color: '#00BDAD',
		type: 'Major'
	},
	'Aevitas': {
		stars: [[13, 4], [15, 18], [10, 27], [27, 24], [24, 19], [25, 10], [3, 6]],
		connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 6]],
		color: '#29F615',
		type: 'Major'
	},
	'Evorsio': {
		stars: [[27, 17], [19, 23], [25, 27], [22, 12], [13, 3], [16, 11], [6, 5]],
		connections: [[0, 1], [0, 2], [0, 3], [3, 4], [3, 5], [5, 6]],
		color: '#A00100',
		type: 'Major'
	},
	'Lucerna': {
		stars: [[19, 4], [25, 14], [22, 22], [15, 25], [8, 23], [4, 12]],
		connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
		color: '#FFE709',
		type: 'Weak'
	},
	'Mineralis': {
		stars: [[17, 2], [19, 10], [13, 7], [15, 15], [22, 19], [11, 25], [18, 28]],
		connections: [[0, 1], [0, 2], [3, 1], [3, 2], [3, 4], [3, 5], [6, 4], [6, 5]],
		color: '#CB7D0A',
		type: 'Weak'
	},
	'Horologium': {
		stars: [[28, 6], [22, 10], [16, 6], [10, 4], [6, 8], [3, 27]],
		connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
		color: '#7D16B4',
		type: 'Weak',
		sky: ['eclipse']
	},
	'Octans': {
		stars: [[25, 25], [17, 5], [11, 10], [4, 6]],
		connections: [[0, 1], [0, 2], [1, 2], [2, 3]],
		color: '#706EFF',
		type: 'Weak'
	},
	'Bootes': {
		stars: [[9, 22], [3, 14], [22, 27], [16, 5], [26, 3], [24, 11]],
		connections: [[0, 1], [0, 2], [0, 3], [0, 5], [3, 4], [4, 5]],
		color: '#D41CD6',
		type: 'Weak'
	},
	'Fornax': {
		stars: [[18, 29], [28, 18], [21, 13], [16, 18], [19, 6], [13, 2], [9, 21], [2, 17]],
		connections: [[0, 1], [1, 2], [2, 3], [3, 0], [2, 4], [4, 5], [3, 6], [6, 7]],
		color: '#FF4E1B',
		type: 'Weak'
	},
	'Pelotrio': {
		stars: [[17, 24], [27, 25], [22, 8], [14, 14], [8, 29], [3, 8], [9, 10]],
		connections: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [4, 5], [5, 6], [6, 3]],
		color: '#EC006B',
		type: 'Weak',
		sky: ['moon-new', 'moon-full']
	},
	'Gelu': {
		stars: [[21, 28], [27, 13], [29, 4], [12, 14], [3, 12], [9, 21]],
		connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]],
		color: '#758BA8',
		type: 'Minor'
	},
	'Ulteria': {
		stars: [[4, 28], [7, 22], [9, 14], [21, 15], [15, 8], [24, 3]],
		connections: [[0, 1], [1, 2], [2, 3], [2, 4], [3, 4], [4, 5]],
		color: '#347463',
		type: 'Minor'
	},
	'Alcara': {
		stars: [[24, 27], [17, 16], [12, 9], [23, 9], [21, 2], [10, 21], [3, 20]],
		connections: [[0, 1], [1, 2], [1, 3], [3, 4], [4, 2], [1, 5], [5, 6], [6, 2]],
		color: '#802952',
		type: 'Minor'
	},
	'Vorux': {
		stars: [[7, 29], [15, 12], [23, 7], [28, 14], [3, 6]],
		connections: [[0, 1], [1, 2], [2, 3], [1, 4]],
		color: '#A8881E',
		type: 'Minor'
	},
};

const gridSize = 15;
const cellSize = 15;
const width = gridSize * cellSize;
const height = width;
for (let key in constellations) {
	const constellation = constellations[key];
	constellation.stars = constellation.stars.map((star) =>
		star.map((v) => Math.floor(v / 2))
	);

	const $card = $('<div>', {
		class: 'card'
	}).appendTo('body');
	if (constellation.sky && constellation.sky.length) {
		const $sky = $('<div>', { class: 'sky' }).appendTo($card);
		constellation.sky.forEach((cls) =>
			$('<div>', { class: cls }).appendTo($sky)
		);
	}
	const $title = $('<h2>', { class: 'title' }).text(key).appendTo($card);
	const $canvas = $('<canvas>').attr({
		width: width + 1,
		height: height + 1
	}).appendTo($card);
	const ctx = $canvas[0].getContext('2d');
	ctx.translate(0.5, 0.5);

	ctx.fillStyle = 'gold';
	ctx.fillRect(
		cellSize * (gridSize >> 1),
		cellSize * (gridSize >> 1),
		cellSize,
		cellSize
	);
	ctx.strokeRect(0, 0, width, height);
	ctx.beginPath();
	for (let i = 1; i < gridSize; i++) {
		let offset = i * cellSize;
		ctx.moveTo(0, offset);
		ctx.lineTo(width, offset);
		ctx.moveTo(offset, 0);
		ctx.lineTo(offset, height);
	}
	ctx.moveTo(0, 0);
	ctx.closePath();
	ctx.stroke();

	ctx.lineWidth = 2;
	//ctx.lineStyle = constellation.color;
	//ctx.fillStyle = constellation.color;
	ctx.fillStyle = 'black';
	ctx.beginPath();
	constellation.connections.forEach((connection) => {
		const p = constellation.stars[connection[0]];
		const q = constellation.stars[connection[1]];
		const x0 = p[0] * cellSize + cellSize / 2;
		const y0 = p[1] * cellSize + cellSize / 2;
		const x1 = q[0] * cellSize + cellSize / 2;
		const y1 = q[1] * cellSize + cellSize / 2;
		ctx.moveTo(x0, y0);
		ctx.lineTo(x1, y1);
	});
	ctx.moveTo(0, 0);
	ctx.closePath();
	ctx.stroke();

	constellation.stars.forEach((coord) => {
		const x0 = coord[0] * cellSize + cellSize / 4;
		const y0 = coord[1] * cellSize + cellSize / 4;
		const x1 = x0 + cellSize / 2;
		const y1 = y0 + cellSize / 2;
		ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
	});
}