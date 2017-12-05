const maze2 = `0
3
0
1
-3`;

// const num = [...maze2];

var num = maze2.split('\n').map(x => parseInt(x, 10));

console.log(num);

function part1(arrayNum) {
	var steps = 0;

	var i = 0;

	for (i; i < num.length; i) {
		console.log('current index is ', i);
		var currentNum = num[i];
		console.log('current number is ' + currentNum + ' at index ' + i);
		// console.log('checking index ', i);
		var incrementedNum = currentNum + 1;
		num[i] = incrementedNum;
		// console.log('incrementing current index ', incrementedNum);
		var newIndex = i + currentNum;
		console.log('new index is ' + i + ' + ' + parseInt(currentNum, 10) + ' = ' + newIndex);
		i = newIndex;
		console.log('jumping to index ', i);
		steps++;
	}

	console.log('steps taken ' ,steps);
}


function part2(arrayNum) {
	var steps = 0;

	var i = 0;

	for (i; i < num.length; i) {
		console.log('current index is ', i);
		var currentNum = num[i];
		console.log('current number is ' + currentNum + ' at index ' + i);
		// console.log('checking index ', i);
		var incrementedNum;
		if (currentNum >= 3) {
			incrementedNum = currentNum - 1;
		} else {
			incrementedNum = currentNum + 1;
		}
		num[i] = incrementedNum;
		// console.log('incrementing current index ', incrementedNum);
		var newIndex = i + currentNum;
		console.log('new index is ' + i + ' + ' + parseInt(currentNum, 10) + ' = ' + newIndex);
		i = newIndex;
		console.log('jumping to index ', i);
		steps++;
	}

	console.log('steps taken ' ,steps);
}


// part1(num);
// part2(num);


function part2timed(arrayNum) {
	var steps = 0;
	var i = 0;
	for (; i < num.length;) {
		if (num[i] >= 3) {
			num[i] = num[i] - 1;
		} else {
			num[i] = num[i] + 1;
		}
		i = i + num[i];
		steps++;
	}

	console.log('steps taken ' ,steps);
}

// var t0 = performance.now();
console.time('part2timed');
part2timed(num);
console.timeEnd('part2timed');