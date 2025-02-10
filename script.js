var isDate = function (input) {
  //   write your code here
	const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

	
    if (input instanceof Date && !isNaN(input)) {
        return true; // Valid Date object
    }
	
    
    return dateRegex.test(input);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
