$(function() {

	$('.mighty').hover(function() {
		$('#mightySection').css('border', '8px solid #FF8700')
		$('.mightyarrow').css('visibility', 'visible')
		$('.mightyarrow').effect('shake', {times:4}, 1000)
		$('#mightytext').css('visibility', 'visible')
		$('.mightyword span').css('color', '#ff8700');
		}, function(){
   		$('#mightySection').css('border', '0px')
		$('.mightyarrow').css('visibility', 'hidden')
		$('#mightytext').css('visibility', 'hidden')
		$('.mightyword span').css('color', '#808080');
   	});

	$('.loyal').hover(function() {
		$('#loyalSection').css('border', '8px solid #FF8700')
		$('.loyalarrow').css('visibility', 'visible')
		$(".loyalarrow").effect('shake', {times:4}, 1000)
		$('#loyaltext').css('visibility', 'visible')
		$('.loyalword span').css('color', '#ff8700');
		}, function(){
   		$('#loyalSection').css('border', '0px')
		$('.loyalarrow').css('visibility', 'hidden')
		$('#loyaltext').css('visibility', 'hidden')
		$('.loyalword span').css('color', '#808080');
   	});

	$('.loving').hover(function() {
		$('#lovingSection').css('border', '8px solid #FF8700')
		$('.lovingarrow').css('visibility', 'visible')
		$(".lovingarrow").effect("shake", {times:4}, 1000)
		$('#lovingtext').css('visibility', 'visible')
		$('.lovingword span').css('color', '#ff8700');
		}, function(){
   		$('#lovingSection').css('border', '0px')
		$('.lovingarrow').css('visibility', 'hidden')
		$('#lovingtext').css('visibility', 'hidden')
		$('.lovingword span').css('color', '#808080');
   	});

// CHANGE THE PICTURES
	var i = 0,
		mightyPics = ['mightypic', 'mightypic2', 'mightypic3'],
		loyalPics = ['loyalpic', 'loyalpic2', 'loyalpic3'],
		lovingPics = ['lovingpic', 'lovingpic2', 'lovingpic3'];

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
		"if you throw it, I will fetch",
		"rain, sleet or snow doesn't stop me"
		];
	var loyalText = [
		"best. wingwoman. ever.",
		"I could lay here forever with you",
		"I got your back, bro"
		];
	var lovingText = [
		"I'm all ears",
		"is it kissy time?",
		"reporting for belly rub duty"
		];

		$('.mighty').click(function(){ 
		$('#mightytext').text(mightyText[i]); 
    	i = (i + 1) % mightyText.length;
 	});

		$('.loyal').click(function(){ 
		$('#loyaltext').text(loyalText[i]); 
    	i = (i + 1) % loyalText.length;
 	});

		$('.loving').click(function(){ 
		$('#lovingtext').text(lovingText[i]); 
    	i = (i + 1) % lovingText.length;
 	});

// SEE ALL PHOTOS
	$(".end").click(function(){
		    $(".allpics").toggle();
	});
});