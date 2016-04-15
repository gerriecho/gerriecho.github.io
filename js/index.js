$(function() {

	$('.mighty').hover(function() {
		$('#mightySection').css('border', '8px solid #FF8700')
		$('.mightyarrow').css('visibility', 'visible')
		$('.mightyarrow').css('float', 'right')
		$('#mightytext').css('visibility', 'visible')
		$(".mightyarrow").effect("shake", {times:4}, 1000);
		}, function(){
   		$('#mightySection').css('border', '0px')
		$('.mightyarrow').css('visibility', 'hidden')
		$('#mightytext').css('visibility', 'hidden')
   	});

	$('.loyal').hover(function() {
		$('#loyalSection').css('border', '8px solid #FF8700')
		$('.loyalarrow').css('visibility', 'visible')
		$('.loyalarrow').css('float', 'right')
		$('#loyaltext').css('visibility', 'visible')
		$(".loyalarrow").effect("shake", {times:4}, 1000);
		}, function(){
   		$('#loyalSection').css('border', '0px')
		$('.loyalarrow').css('visibility', 'hidden')
		$('#loyaltext').css('visibility', 'hidden')
   	});

	$('.loving').hover(function() {
		$('#lovingSection').css('border', '8px solid #FF8700')
		$('.lovingarrow').css('visibility', 'visible')
		$('.lovingarrow').css('float', 'right')
		$('#lovingtext').css('visibility', 'visible')
		$(".lovingarrow").effect("shake", {times:4}, 1000);
		}, function(){
   		$('#lovingSection').css('border', '0px')
		$('.lovingarrow').css('visibility', 'hidden')
		$('#lovingtext').css('visibility', 'hidden')
   	});

   	// $(".mighty").click(function(){
    //            $(".target").effect( "shake", {times:4}, 1000 );
    //         });

	var i = 0,
		mightyPics = ['mightypic', 'mightypic2', 'mightypic3'],
		loyalPics = ['loyalpic', 'loyalpic2', 'loyalpic3'],
		lovingPics = ['lovingpic', 'lovingpic2', 'lovingpic3'];
		// mightyText = ['mightytext', 'mightytext2', 'mightytext3'],
		// loyalText = ['loyaltext', 'loyaltext2', 'loyaltext3'],
		// lovingText = ['lovingtext', 'lovingtext2', 'lovingtext3'];

// CHANGE THE PICTURES
    function changeMightyPic() {
    	i++;
    	if (i > 2) {
    		i = 0;
    	}

    	$('#mightySection').attr('class', mightyPics[i]);
    }
		$('.mighty').click(changeMightyPic)

    function changeLoyalPic() {
    	i++;
    	if (i > 2) {
    		i = 0;
    	}
    	$('#loyalSection').attr('class', loyalPics[i]);
    	}
		$('.loyal').click(changeLoyalPic)

    function changeLovingPic() {
    	i++;
    	if (i > 2) {
    		i = 0;
    	}
    	$('#lovingSection').attr('class', lovingPics[i]);
    	}
		$('.loving').click(changeLovingPic)		

// CHANGE THE TEXT
	var mightyText = [
		"someone say road trip? I call shotgun!",
		"if you throw it, I will fetch it",
		"Three"
		];

		$('.mighty').click(function(){ 
		$('#mightytext').text(mightyText[i]); 
    	i = (i + 1) % mightyText.length;
 	});

	var loyalText = [
		"best wingwoman ever. I'm always up for a fun time!",
		"I could lay here forever with you",
		"I got your back, bro"
		];

		$('.loyal').click(function(){ 
		$('#loyaltext').text(loyalText[i]); 
    	i = (i + 1) % loyalText.length;
 	});

	var lovingText = [
		"serious listener. these ears aren't just for looks",
		"ready for your kiss?",
		"reporting for belly rub duty"
		];

		$('.loving').click(function(){ 
		$('#lovingtext').text(lovingText[i]); 
    	i = (i + 1) % lovingText.length;
 	});

});