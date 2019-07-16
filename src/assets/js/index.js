// require('bootstrap'); 


function deleteElementFromArray(arr, index){

	if(arr.length === 0) return arr;
	if((index < 0) || (index >= arr.length)) return arr;

	 arr.splice(index, 1);

	 return arr;

}

let breakpoints = require('./breakpoints.js');

// console.log('s');

import "../scss/styles.scss";

// let displayInfo2 = new require('./display-info.js')();

require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');



const myEvents = {

	events: {},

	add(eventName, eventHandler, eventListener) {

function log(){
			console.log('eventName', eventName)
			console.log('eventHandler', eventHandler)
			console.log('eventListener', eventListener)
}


		if(!eventHandler || !eventName || !eventListener){

			return
		}



console.log('---------------------------------------')


console.log('')
console.log('')
		console.log('Получили входные параметры:')
		log()
console.log('')


		console.log('Проверяем, есть ли такое событие')

		if (!this.events[eventName]) {
console.log('')


			console.log('1. Нет такого события')
			console.log('')
			console.log('Добавили событие, слушателя и обработчик')
			console.log('')

			this.events[eventName] = {

				listeners: [{

					item: eventHandler,
					handlers: [eventListener]
				}]
			}
		}
		else{

			console.log('')
			console.log('2. Событие есть, надо проверить слушателей')


			let listeners = this.events[eventName].listeners;
			

			console.log('')
			console.log('Проверяем в цикле')

			for(var i = 0; i < listeners.length; i++){

				console.log('i = ', i)
				console.log('listeners[i].item =', listeners[i].item)
				console.log('eventHandler =', eventHandler)

				console.log('listeners[i].item === eventHandler');
				console.log(listeners[i].item === eventHandler);


				if(listeners[i].item === eventHandler){

					console.log('Элемент-слушатель найден: ', listeners[i].item)

					console.log('Проверяем обработчики элемента-слушателя')
					console.log('listeners[i].handlers.indexOf(eventListener) + 1:')
					console.log(!(listeners[i].handlers.indexOf(eventListener) + 1))


					if(!(listeners[i].handlers.indexOf(eventListener) + 1)){


						console.log('Нет такого обработчика у элемента-слушателя, добавляем')
						// console.log('Нет такого обработчика у элемента-слушателя')

						console.log(listeners[i].handlers)
						console.log(listeners[i].handlers.indexOf(eventListener))

						// alert()

						listeners[i].handlers.push(eventListener);

						console.log('Выходим из цикла, i=', i)
						break;
					}
					else{


						console.log('Есть такой обработчик у элемента-слушателя, игнорируем')
						console.log(listeners[i].handlers)
						// alert()

						break;
					}
				}
			}


console.log('Проверям счетчик i =', i)
console.log('listeners.length =', listeners.length)

			if(i === listeners.length){

				console.log('')
				console.log('Прошли весь цикл, добавляем слушателя')

				listeners.push({item: eventHandler, handlers: [eventListener]});
						console.log(listeners)
						// alert()
			}
		}
	},

	remove(eventName, eventHandler, eventListener){



		var listener = undefined;


		if(!eventHandler || !eventName || !eventListener){

			return
		}

		if (!this.events[eventName]) {

			return
		}		

		event = this.events[eventName];

		let listeners = this.events[eventName].listeners;

console.log('Нашли событие', this.events[eventName])


		let listenerIndex = listeners.length;

		for(var i = 0; i < listeners.length; i++){
			
			if(listeners[i].item === eventHandler){

				listenerIndex = i;
				listener = listeners[i];
console.log('Нашли слушателя', listener)
			}
		}

		if(listener){


			if(listener.handlers.indexOf(eventListener) + 1){

console.log('Слушатель', listener)
console.log('Обработчик', listener.handlers)

				listener.handlers = deleteElementFromArray(listener.handlers, listener.handlers.indexOf(eventListener));

				if(listener.handlers.length === 0){

					listeners = deleteElementFromArray(listeners, listenerIndex);

					if(listeners.length === 0){

						delete this.events[eventName];
					}
				}
			}
		}
	},

	trigger(eventName){


		if(!eventName){

			return
		}

		if (!this.events[eventName]) {

			return
		}			

		let listeners = this.events[eventName].listeners;

		for(var listenerIndex = 0; listenerIndex < listeners.length; listenerIndex++){



			let listener = listeners[listenerIndex];

			let item = listener.item;

			let handlers = listener.handlers;

			for(var i = 0; i < handlers.length; i++){

				handlers[i].bind(item)();
			}
		}
	}


}

// myEvents.add('div', 'click', '');
let f =  function(){console.log(this)}

myEvents.add('click', $('div')[0], ()=>{alert()});
myEvents.add('Хуяк!', $('div')[0], f );
// myEvents.add('click', $('div')[0], 'eventListener');
// myEvents.add('click', $('div')[0], 'eventListener');
// myEvents.add('click', $('div')[0], 'eventListener');
// myEvents.add('click', $('div')[0], 'eventListener');
// myEvents.remove('click', $('div')[0], 'eventListener');
// myEvents.add('click', $(window)[0], 'eventListener');
// myEvents.remove('click', $(window)[0], 'eventListener');
// myEvents.add('div', 'mouse', 'eventListener');
// myEvents.add('p', 'mouse', 'eventListener');
// myEvents.add('p', 'mouse', 'eventListener2');
// myEvents.add('ul', 'close', 'eventListener4');
// myEvents.add('body', 'close', 'eventListener4');

myEvents.trigger('Хуяк!');
console.log(myEvents);
myEvents.remove('Хуяк!', $('div')[0], f );
myEvents.trigger('Хуяк!');

let b = ['aaaa', 'bbbb', 'ccc', 'dddd'];

// let c = ['aaaa', 'bbbb', 'ccc', 'dddd'];


// let d = b.splice(0, 2)

// console.log(d)
// console.log(b)
console.log(deleteElementFromArray(b, -1))

let ccc = 1;

let a = ()=>{console.log('a', ccc++)};



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

