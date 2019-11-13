var links = ["./img/slika1.jpg", "./img/slika2.jpg", "./img/slika3.jpeg", "./img/slika4.jpg", "./img/slika5.jpg", ]
var body = $('body');

var div = $('<div></div>');

for (var i = 0; i < links.length; i++) {
    var randomWidth = 100 + Math.random() * 400;
    var image = $("<img>").attr("src", links[i]).css('width', randomWidth);
    div.append(image);


}

div.css('width', '50%');
div.css('margin', 'auto');
body.append(div);