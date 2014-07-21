var displayValue = [];

var scrabble = function(word) {
  var a = { letter: "a", score: 1 };
  var b = { letter: "b", score: 3 };
  var c = { letter: "c", score: 3 };
  var d = { letter: "d", score: 2 };
  var e = { letter: "e", score: 1 };
  var f = { letter: "f", score: 4 };
  var g = { letter: "g", score: 2 };
  var h = { letter: "h", score: 4 };
  var i = { letter: "i", score: 1 };
  var j = { letter: "j", score: 8 };
  var k = { letter: "k", score: 5 };
  var l = { letter: "l", score: 1 };
  var m = { letter: "m", score: 3 };
  var n = { letter: "n", score: 1 };
  var o = { letter: "o", score: 1 };
  var p = { letter: "p", score: 3 };
  var q = { letter: "q", score: 10 };
  var r = { letter: "r", score: 1 };
  var s = { letter: "s", score: 1 };
  var t = { letter: "t", score: 1 };
  var u = { letter: "u", score: 1 };
  var v = { letter: "v", score: 4 };
  var w = { letter: "w", score: 4 };
  var x = { letter: "x", score: 8 };
  var y = { letter: "y", score: 4 };
  var z = { letter: "z", score: 10 };

  var letters = [ a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z ];

  var score = 0;

  word = word.toLowerCase();

  for (var i = 0; i < word.length; i++) {
    letters.forEach(function(letter) {
      if (letter.letter === word[i]) {
        score = score + letter.score;
        displayValue.push(letter.score);
      }
    });
  };

  return score;
}

$(document).ready(function() {
  $("form#scrabble").submit(function(event) {
    $(".tiles").empty();
    $("#result").hide();

    var word = $("input#input-word").val();
    var score = scrabble(word);

    if (score === 0) {
      alert("You've got to give me a word!");
    } else {
      for (var i = 0; i < word.length; i++) {
        $(".tiles").append("<li class='tile'>" + "<span class='letter'>" + word[i] + "</span>" + "<span class='value'>" + displayValue[i] + "</span>" + "</li>");
      };
      $(".word").text(word);
      $(".score").text(score);
      $("#result").show();
    }

    $("input#input-word").val("");
    displayValue = [];
    event.preventDefault();
  });
});