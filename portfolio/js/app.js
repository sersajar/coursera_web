'use strict';

$(document).ready(function () {

	$("#logo-jumbo").click(function () {
		var randomColor = getRandomColor();
		$(".jumbotron").css('background-color', randomColor);
		$("footer").css('background-color', randomColor);
	});

    $(".strainLink").click(function () {

        if ($(".onoff").hasClass('active')) {
            $(".onoff").removeClass('active');
        };

        // if ($(".strainLink").attr('href', '#yumbolttab')) {
        //     if ($(".onoff").hasClass('active')) {
        //         $(".onoff").removeClass('active');
        //     };
        //     $("#go-to-yum").addClass('active');

        // } else if ($(".strainLink").attr('href', '#onepeacetab')) {
        //     if ($(".onoff").hasClass('active')) {
        //         $(".onoff").removeClass('active');
        //     };
        //     $("#go-to-peace").addClass('active');

        // }

        // } else if ($(".strainLink").attr('href', '#masquetab')) {
        //     $("#go-to-mask").addClass('active');

        // } else if ($(".strainLink").attr('href', '#willowtab')) {
        //     $("#go-to-wil").addClass('active');

        // } else if ($(".strainLink").attr('href', '#criticaltab')) {
        //     $("#go-to-kri").addClass('active');

        // } else if ($(".strainLink").attr('href', '#tuttitab')) {
        //     $("#go-to-tu").addClass('active');
        // }
    });


});


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
