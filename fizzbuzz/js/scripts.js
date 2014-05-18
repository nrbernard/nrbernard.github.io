$(document).ready(function() {
	var number = prompt("What number should I FizzBuzz up to?");
	$(".number").text(number);

	for (var index = 1; index <= number; index += 1) {
			if (index % 3 === 0 && index % 5 === 0) {
				$(".fizzbuzz").append("<li class='both'>FizzBuzz</li>");
			} else if (index % 3 === 0) {
				$(".fizzbuzz").append("<li class='fizz'>Fizz</li>");
			} else if (index % 5 === 0){
				$(".fizzbuzz").append("<li class='buzz'>Buzz</li>");
			} else {
				$(".fizzbuzz").append("<li>" + index + "</li>");
			}
		};
});
