function initcontact() {

	
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