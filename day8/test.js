const input = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

function createRegister(input) {
	var inputArr = input.split('\n');
	var register = {};
	for (var i = 0; i < inputArr.length;i++) {
		var reg = inputArr[i].split(/\s+/);
		if(!register[reg]) {
			register[reg[0]] = 0;
		}
	}
	return register;
}

function calculateRegister(input, register) {
	var inputArr = input.split('\n');
	for (var i = 0; i < inputArr.length;i++) {
		var reg = inputArr[i].split(/\s+/);
		var modifier = parseInt(reg[2], 10);
		// console.log('modifier: ', modifier);
		var condition = reg[4];
		var operator = reg[5];
		var checkCondition = reg[6];

		var result;
		switch(operator) {
		    case '>':
        		result = (register[condition] > checkCondition);
        	break;
    		case '<':
        		result = (register[condition] < checkCondition);
        	break;
        	case '>=':
        		result = (register[condition] >= checkCondition);
        	break;
        	case '<=':
        		result = (register[condition] <= checkCondition);
        	break;
        	case '!=':
        		result = (register[condition] != checkCondition);
        	break;
    		default:
        		//error
		}

		if(result) {
			if (reg[1] == 'inc') {
				register[reg[0]] = register[reg[0]] + modifier;
			} else {
				register[reg[0]] = register[reg[0]] - modifier;
			}

		}
		
	}
	return register;
}

function findMax(registerObj) {
	var max = 0;
	for (var key in registerObj) {
		if (registerObj[key] > max) {
			max = registerObj[key];
		}
	}
	return max;
}

// function ifCondition()

var register = createRegister(input);
var calculatedRegister = calculateRegister(input, register);
var max = findMax(calculatedRegister);

console.log(register);
console.log(calculatedRegister);
console.log(max);
