const input = `0	2	7	0`;

var num = input.split('\t').map(x => parseInt(x, 10));

console.log(num);


var redistribute = true;

var steps = []

var first = 0;
var last = 0;

var loops = 0;

var arr;


while (redistribute) {

	steps.push(num.slice());
	console.log(steps);

	

	var max = Math.max(...num);
	var indexOfMax = num.indexOf(max);
	var distribution = Math.round(max / num.length);
	var numberOfDistributiones = 0;
	var rest = max % distribution;

	// console.log('max value ',max);
	// console.log('index of max value ',indexOfMax);
	// console.log('distribute to each block ',distribution);

	// var iterations = Math.round(max / distribution);

	// console.log(iterations);
	var index = indexOfMax;
	for (var i = 0; i <= max; i = i + distribution ) {
		// console.log('checking index: ', index);

		if (index != indexOfMax) {
			if (index == num.length) {
				// console.log('end of array resetting');
				index = 0;
				i = i - distribution;
				continue;
			}
			// console.log(num[index] + 'is incremented by ' + distribution);
			num[index] = num[index] + distribution;
			numberOfDistributiones++;
			index++;
		} else {
			// console.log('index == indexOfMax skipping')
			index++;
		}
	}

	
	if (rest == 0) {
		var newValue = max - ((distribution * numberOfDistributiones) + rest);
		// console.log(max + ' - (' + distribution + ' *' + numberOfDistributiones + ' )' + ' + ' + rest + ' = ' + newValue);
		num[indexOfMax] = newValue;	
	} else {
		num[indexOfMax] = rest;
	}
	


	// test++;

	// console.log('redistributed array is ' + num );

		// check if were looping
	for (var k = 0; k < steps.length; k++) {
		// console.log('comparing arrays ' + steps[k] + ' and ' + num);
		loops++;
		if (arraysEqual(steps[k], num)) {
			arr = num;
			// steps.push(num.slice());
			// console.log('loop found in: ', loops);
			redistribute = false;			
			// console.log('array found');
		}
	}

	// console.log(steps);



	// console.log('steps taken ', steps.length);

	// if(test === 3 ) {
	// 	redistribute = false;	
	// }

}

steps.push(num.slice());

var first = 0;
var last = 0;
var loops = 0;

var found = false;

for (var k = 0; k < steps.length; k++) {
	first++;
	if (arraysEqual(steps[k], arr)) {
		console.log('loop found in: ', first);
		found = true;
		// console.log('array found');
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