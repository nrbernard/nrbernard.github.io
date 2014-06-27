var terms = ["code", "poems", "love letters"];

function rotateTerm() {
  var currentTerm = $(".skill").data("term") || 0;
  $(".skill").data("term", currentTerm === terms.length -1 ? 0 : currentTerm + 1).text(terms[currentTerm]).fadeIn()
              .delay(1500).fadeToggle(200, rotateTerm);
}

$(document).ready(rotateTerm);

$("button#fizzbuzz").click(function() {
	var number = prompt("What number should I FizzBuzz up to?");
	$(".number").text(number);

	for (var index = 1; index <= number; index += 1) {
			if (index % 3 === 0 && index % 5 === 0) {
				$(".fizzbuzz").append("<li class='both'>" + "FizzBuzz" + "</li>");
			} else if (index % 3 === 0) {
				$(".fizzbuzz").append("<li class='fizz'>Fizz</li>");
			} else if (index % 5 === 0){
				$(".fizzbuzz").append("<li class='buzz'>Buzz</li>");
			} else {
				$(".fizzbuzz").append("<li>" + index + "</li>");
			}
		}
});