// require('bootstrap'); 

let breakpoints = require('./breakpoints.js');

// console.log('s');

import "../scss/styles.scss";

// let displayInfo2 = new require('./display-info.js')();

require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');


window.addEventListener('load', function(){



	let displayInfo = require('./display-info.js')();

	displayInfo.html('size: ' + breakpoints.onPoint() + '<br>'+ breakpoints.windowSizePx().widthHeight);

	displayInfo.css({

		'background-color': 'rgba(255, 0, 0, .6)',
		'color': 'white',
		'right': '20px',
		'width' : '160px',
		'bottom' : 30,
		// 'bottom' : '0',
		'font-size' : '12px',
	});


	$(window).on('resize', function(){

		let width = breakpoints.windowSizePx().width;
		let height = breakpoints.windowSizePx().height;

		displayInfo.html('size: ' + breakpoints.onPoint() 
			+ '<br>'+ breakpoints.windowSizePx().widthHeight 
			+ '<br>aspect-ratio: ' + width + '/' + height
			+ ' : ' + Math.round( width/height*100)/100 + "");
	});


	// let topMenuBtn = document.querySelector('.top-menu__btn');
	// // console.log("topMenuBtn", topMenuBtn);

	// topMenuBtn.addEventListener('click', (event)=>{

	// 	// event.preventDefault();

	// 	event.stopPropagation();
		
	// 	// console.log("event.preventDefault()", event.preventDefault());

	// 	topMenuBtn.classList.toggle('active');
	// });

	// let html = document.querySelector('html');
	// let body = document.querySelector('body');

	// html.addEventListener('click', ()=>{

	// 	// console.log('html');		
	// 	if(topMenuBtn.classList.contains('active')){

	// 		topMenuBtn.classList.remove('active');
	// 	}

	// });


	// body.addEventListener('click', ()=>{

	// 	// console.log('body');		

	// 	if(topMenuBtn.classList.contains('active')){

	// 		topMenuBtn.classList.remove('active');
	// 	}

	// });

});

