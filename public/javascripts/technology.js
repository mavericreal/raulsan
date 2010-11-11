function inittechnology(){
	
	initMatrix();
	
	$('#portfolio').click(function(){
		$('#portfolio').hide();
		$('#resume').fadeIn('slow');
		$('#resumeCnt').hide();
		$('#titleTechA').html('P O R T F O L I O');
		$('#portfolioCnt').fadeIn('slow');
	});
	
	$('#resume').click(function(){
		$('#resume').hide();
		$('#portfolio').fadeIn('slow');
		$('#portfolioCnt').hide();
		$('#titleTechA').html('R E S U M E');
		$('#resumeCnt').fadeIn('slow');
	});
	
	$('.thumbnail').live('click',function(){
		$('#sw').fadeIn('slow');
		$('#swItem').html($(this).html());
	});

	$('#swClose').live('click',function(){
		$('#sw').fadeOut('slow');
	});
	
	$('#home').click(function(){
		clearInterval(interval);
		$.ajax({
			url: '/myWorld',
			type: 'POST',
			success: function(data){
				$('#planet').show();
				$('#planet img').css('opacity','1');
				$('body').animate({scrollTop: 0}, 0);
				$('#planet img').animate({width:'300px',marginLeft:'0px',marginTop:'0px'},3000,function(){

				});
				$('#main').html(data);
				$('#main').fadeIn(1000,function(){
					initMyWorld();
				});	
			}
		});
	});
}