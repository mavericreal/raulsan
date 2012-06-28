
var ctx = null,
	canvas = null,
	HEIGHT = 0,
   WIDTH = 0;

//Brushes
var BRUSH_SIZE = 2;
var COLOR = [0, 0, 0];
var BRUSH_PRESSURE = 2;

function initMyWorld(){
	$('.labelA').click(function(){
		var id = $(this).attr('id');
		$.ajax({
			url: '/'+id,
			type: 'POST',
			success: function(data){
				$('#planet img').animate({width:'5000px',marginLeft:'-2300px',marginTop:'-2000px',opacity:'0'},3000,function(){
					$('#planet').hide();
				});
				$('#main').fadeOut(1000,function(){
					$('#main').html(data);
					$('#main').fadeIn(1000,function(){
						eval('init'+id+'()');
					});	
				});
			}
		});
	});
	
	
	canvas = document.getElementById("bg");
	canvas.clear = true;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	HEIGHT = canvas.height;
    WIDTH = canvas.width;
	var brush = new sketchy(ctx);

	var inside = false;

	$(window).mouseenter(function(event){
		inside = true;
		brush.strokeStart( event.pageX, event.pageY );
	});
	
	$(window).mousemove(function(event){
		if(inside){
			brush.stroke( event.pageX, event.pageY );
		}else{
			inside=true;
			brush.strokeStart( event.pageX, event.pageY );
		}
		
	});

	$(window).mouseout(function(event){
		 brush.strokeEnd();
	});
	
}

