$(document).ready(function() {

	$.stellar({
		responsive: true,  
		horizontalOffset: 0  
	});

	$(function() {
        $(".dial").knob();
    });
    $(function() {
        $(".dial_1").knob();
    });
    $(function() {
        $(".dial_2").knob();
    });
    $(function() {
        $(".dial_3").knob();
    });

    $('#works_1').click(function(e) {
		e.preventDefault();
		$.panelslider.close();
		return false;
		});
		





$(window).scroll(
function() {
var start = $('.progres').offset().top-600;
if ((($(this).scrollTop() > start)&($(this).scrollTop() < start+200))) {
var currentNumber = $('.dial').val();
$('.dial').knob();
$({numberValue: currentNumber}).animate({numberValue: 90}, {
duration: 1000,
easing: 'linear',
step: function() {
$('.dial').val(Math.ceil(this.numberValue)).trigger('change');
}
});
}
});

$(window).scroll(
function() {
var start = $('.progres').offset().top-600;
if ((($(this).scrollTop() > start)&($(this).scrollTop() < start+200))) {
var currentNumber = $('.dial_1').val();
$('.dial_1').knob();
$({numberValue: currentNumber}).animate({numberValue: 100}, {
duration: 1000,
easing: 'linear',
step: function() {
$('.dial_1').val(Math.ceil(this.numberValue)).trigger('change');
}
});
}
});

$(window).scroll(
function() {
var start = $('.progres').offset().top-600;
if ((($(this).scrollTop() > start)&($(this).scrollTop() < start+200))) {
var currentNumber = $('.dial_2').val();
$('.dial_2').knob();
$({numberValue: currentNumber}).animate({numberValue: 95}, {
duration: 1000,
easing: 'linear',
step: function() {
$('.dial_2').val(Math.ceil(this.numberValue)).trigger('change');
}
});
}
});

$(window).scroll(
function() {
var start = $('.progres').offset().top-600;
if ((($(this).scrollTop() > start)&($(this).scrollTop() < start+200))) {
var currentNumber = $('.dial_3').val();
$('.dial_3').knob();
$({numberValue: currentNumber}).animate({numberValue: 80}, {
duration: 1000,
easing: 'linear',
step: function() {
$('.dial_3').val(Math.ceil(this.numberValue)).trigger('change');
}
});
}
});



	




	

  	



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});

$(window).on( 'load', function() {
	$('body,html').animate({
    	scrollTop: 5
        }, 1);
 
});