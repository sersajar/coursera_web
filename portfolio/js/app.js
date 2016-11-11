'use strict';

$(document).ready(function () {
     
	$("#logo-jumbo").click(function () {
		var randomColor = getRandomColor();
		$(".jumbotron").css('background-color', randomColor);
		$("footer").css('background-color', randomColor);
	});

    $(".knowledgePics").click(function showPic() {
        
        if (this.id == "acc1") {
            $("#chPic").prepend('<img src="img/germ.jpg">');   
            this.id = undefined;  
         } else if (this.id == "acc2") {
            $("#chPic").prepend('<img src="img/botella.jpg">');
             
         } 
    });
    // $('#aToggle').click(function(e) {

    //     $(this).toggleClass('disabled');
    //     e.preventDefault();
    //     console.log("hey");
    //});
});

//function to show accordion pictures



//function to get a random html color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
};
