//'use strict'

var expect = require("chai").expect;
var euler = require("../euler.js");

describe("euler", function(){
	describe('#problem1()', function(){
		it("should find the sum of all the multiples of 3 or 5 below 1000", function(){
			var result = euler.problem1();
			expect(result).to.equal(233168);
		});
	});
	describe('#problem2()', function(){
		it('should, by considering the terms in the Fibonacci sequence whose values do not exceed four million, ' +
		'find the sum of the even-valued terms', function(){
			var result = euler.problem2();
			expect(result).to.equal(4613732);
		})
	});
	describe('#problem3()', function(){
		it('should find the largest prime factor of the number 600851475143', function(){
			var result = euler.problem3();
			expect(result).to.equal(6857);
		})
	});
	describe('#problem4()', function(){
		it('should find the largest palindrome made from the product of two 3-digit numbers', function(){
			var result = euler.problem4();
			expect(result).to.equal(906609);
		})
	});
	describe('#problem5()', function(){
		it('should find the smallest positive number that is evenly divisible by all of the numbers from 1 to 20', function(){
			var result = euler.problem5();
			expect(result).to.equal(232792560);
		})
	});
});
