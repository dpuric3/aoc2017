const input = `2	8	8	5	4	2	3	1	5	5	1	2	15	13	5	14`;

var num = input.split('\t').map(x => parseInt(x, 10));
var redistribute = true;

var steps = [];
var arr;

while (redistribute) {
	steps.push(num.slice());

	var max = Math.max(...num);
	var indexOfMax = num.indexOf(max);
	var distribution = Math.round(max / num.length);
	var numberOfDistributiones = 0;
	var rest = max % distribution;

	var index = indexOfMax;
	for (var i = 0; i <= max; i = i + distribution ) {

		if (index != indexOfMax) {
			if (index == num.length) {
				index = 0;
				i = i - distribution;
				continue;
			}
			num[index] = num[index] + distribution;
			numberOfDistributiones++;
			index++;
		} else {
			index++;
		}
	}

	
	if (rest == 0) {
		var newValue = max - ((distribution * numberOfDistributiones) + rest);
		num[indexOfMax] = newValue;	
	} else {
		num[indexOfMax] = rest;
	}

	console.log('redistributed array is ' + num );

	// check if were looping
	for (var k = 0; k < steps.length; k++) {
		if (arraysEqual(steps[k], num)) {
			arr = num;
			redistribute = false;
		}
	}

	console.log('steps taken ', steps.length);

}

steps.push(num.slice());

var first = 0;
var last = 0;
var loops = 0;

var found = false;

for (var k = 0; k < steps.length; k++) {
	first++;
	if (arraysEqual(steps[k], arr)) {
		console.log('first: ', first);
		found = true;
	}
	if (found) {
		break;
	}
}

for (var k = 0; k < steps.length; k++) {
	last++;
	if (arraysEqual(steps[k], arr)) {
		console.log('last: ', last);
	}
}

console.log('steps: ', last - first);



function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}