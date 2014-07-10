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
	describe('#problem6()', function(){
		it('should find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum', function(){
			var result = euler.problem6();
			expect(result).to.equal(25164150);
		})
	});
	describe('#problem7()', function(){
		it('should find the 10,001st prime number', function(){
			var result = euler.problem7();
			expect(result).to.equal(104743);
		})
	});
	describe('#problem8()', function(){
		it('should find the product of the thirteen adjacent digits in the 1000-digit number that have the greatest product', function(){
			var result = euler.problem8();
			expect(result).to.equal(40824);
		})
	});
	describe('#problem9()', function(){
		it('should find the product of a * b * c for the Pythagorean triplet for which a + b + c = 1000', function(){
			var result = euler.problem9();
			expect(result).to.equal(31875000);
		})
	});
	describe('#problem10()', function(){
		it('should find the sum of all the primes below two million', function(){
			var result = euler.problem10();
			expect(result).to.equal(142913828922);
		})
	});
	describe('#problem11()', function(){
		it('should find the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) ' + 
		'in the 20×20 grid', function(){
			var result = euler.problem11();
			expect(result).to.equal(70600674);
		})
	});
	describe('#problem12()', function(){
		it('should find the value of the first triangle number to have over five hundred divisors', function(){
			var result = euler.problem12();
			expect(result).to.equal(76576500);
		})
	});
	describe('#problem13()', function(){
		it('should find the first ten digits of the sum of the given one-hundred 50-digit numbers', function(){
			var result = euler.problem13();
			expect(result).to.equal(5537376230);
		})
	});
	describe('#problem14()', function(){
		it('should find the starting number under 1,000,000 that produces the longest chain to 1 given the iterative sequence ' +
		'(even) n -> n/2, (odd) n -> 3n + 1', function(){
			var result = euler.problem14();
			expect(result).to.equal(837799);
		})
	});
	describe('#problem15()', function(){
		it('should find how many routes there are through a 20x20 grid from the lop left corner to the bottom right corner ' +
		'while only being able to move right and down', function(){
			var result = euler.problem15();
			expect(result).to.equal(137846528820);
		})
	});
});
