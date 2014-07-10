'use strict'

exports = module.exports = {};
exports.problem1 = function() {
	var result = 0;
	for (var i=1; i < 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			result += i;
		}
	}
	return result;
};
exports.problem2 = function() {
	var result = 0;
	var last_value = 0;
	var para_value = 1;
	while (last_value < 4000000) {
		var new_value = last_value + para_value;
		last_value = para_value;
		para_value = new_value;
		if (new_value %2 === 0) {
			result += new_value;
		}
	}

	return result;
};
exports.problem3 = function() {
	var result = 0;
	var number = 600851475143;
	var factor = 2;
	while (factor * factor < number) {
		while (number % factor === 0) {
			number = number / factor;
		}
		factor++;
	}

	result = number;
	return result;
};
exports.problem4 = function() {
	var result = 0;
	for (var i = 100; i < 1000; i++) {
		for (var j = 100; j < 1000; j++) {
			var value = (i * j).toString();
			if (value.length % 2 === 0) {
				var first = value.substring(0, value.length / 2);
				var second = value.substring(value.length / 2);
				second = second.split("").reverse().join("");
				if (first === second) {
					if (Number(value) > result) {
						result = Number(value);
					}
				}

			}
		}
	}
	return result;
};
exports.problem5 = function() {
	var result = 0;
	var passed = false;

	//while (passed === false) {
		for (var i=0; i <= 20; i++) {
			//console.log(result + " % " + i);
			if (result % i !== 0) {
				result = result + 20;
				i = 0;
			}
		}

	//}

	return result;
};
