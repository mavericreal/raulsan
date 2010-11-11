$(document).ready(function() {
	$('#main').load('/myWorld',{},function(data){
			if($.browser.msie){
				//$('#explorer').fadeIn('slow');
				showExplorer();
			}else{
				$('#main').fadeIn('slow');
				$('#planet').fadeIn('slow');
				initMyWorld();
			}
		}
	);
	
	$('#closeExplorer').click(function(){
		$('#explorer').fadeOut('slow');
	});
});


function showExplorer(){
	var mydiv = "<div id='explorer' class='withBorder' >"+
		"<div id='explorerB'>"+
		"	Hi! I just realized you are using a </br>"+
		"	browser not compatible with html5!"+
		"</div>"+
		"<div id='explorerC'>"+
		"	Download one of the browsers compatible with it </br>"+
		"	to enjoy of the most modern web-sites and to be able to see my profile!"+
		"</div>"+
		"<div id='explorerD'>"+
		"	<a href='http://www.mozilla.com/firefox/'><img src='/images/firefox.png'></a>"+
		"	<a href='http://www.google.com/chrome'><img src='/images/chrome.png'></a>"+
		"	<a href='http://www.apple.com/safari/download/'><img src='/images/safari.png'></a>"+
		"</div>"+
		"<div id='explorerE'>"+
		"	Sorry for any inconvenience. </br>"+
		"	Please, come back when you have your cool new browser.</br>"+
		"	Thank you!"+
		"</div>"+
	"</div>";
	$('body').append(mydiv);
}