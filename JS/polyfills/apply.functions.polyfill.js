
/*

	Write a polyfill for function apply proto

*/


	Function.prototype.customApply = function (context, args) { 

		const originalFunc = this;

		return function (...innerArgs) {

			return originalFunc.call(context, ...args, ...innerArgs)
		}

	}


	const modules = {
		numbers: [1,2,3,4],
		getNumbers: function (nums) {
			console.log({ nums })
			return this.numbers.concat(nums)
		}
	}
	
	const boundedFunc = modules.getNumbers.customApply(modules, [[5,6,7,8,9]]);
	
	console.log({
		boundedFunc: boundedFunc(),
	});