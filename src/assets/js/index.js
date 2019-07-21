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

	add(eventName, eventListener,  eventHandler) {

		if(!eventHandler || !eventName || !eventListener){

			return
		}



// console.log('---------------------------------------')


// console.log('')
// console.log('')
// console.log('Получили входные параметры:')
// log()
// console.log('')


// console.log('Проверяем, есть ли такое событие')

		if (!this.events[eventName]) {
// console.log('')


// console.log('1. Нет такого события')
// console.log('')
// console.log('Добавили событие, слушателя и обработчик')
// console.log('')

			this.events[eventName] = {

				listeners: [{

					item: eventListener,
					handlers: [eventHandler]
				}]
			}
		}
		else{

// console.log('')
// console.log('2. Событие есть, надо проверить слушателей')


			let listeners = this.events[eventName].listeners;
			

// console.log('')
// console.log('Проверяем в цикле')

			for(var i = 0; i < listeners.length; i++){

// console.log('i = ', i)
// console.log('listeners[i].item =', listeners[i].item)
// console.log('eventHandler =', eventHandler)

// console.log('listeners[i].item === eventHandler');
// console.log(listeners[i].item === eventHandler);


				if(listeners[i].item === eventListener){

// console.log('Элемент-слушатель найден: ', listeners[i].item)

// console.log('Проверяем обработчики элемента-слушателя')
// console.log('listeners[i].handlers.indexOf(eventListener) + 1:')
// console.log(!(listeners[i].handlers.indexOf(eventListener) + 1))


					if(!(listeners[i].handlers.indexOf(eventHandler) + 1)){


// console.log('Нет такого обработчика у элемента-слушателя, добавляем')
// console.log('Нет такого обработчика у элемента-слушателя')

// console.log(listeners[i].handlers)
// console.log(listeners[i].handlers.indexOf(eventListener))

// alert()

						listeners[i].handlers.push(eventHandler);

// console.log('Выходим из цикла, i=', i)
						break;
					}
					else{


// console.log('Есть такой обработчик у элемента-слушателя, игнорируем')
// console.log(listeners[i].handlers)
// // alert()

						break;
					}
				}
			}


// console.log('Проверям счетчик i =', i)
// console.log('listeners.length =', listeners.length)

			if(i === listeners.length){

// console.log('')
// console.log('Прошли весь цикл, добавляем слушателя')

				listeners.push({item: eventListener, handlers: [eventHandler]});
// console.log(listeners)
// // alert()
			}
		}
	},

	remove(eventName, eventListener,  eventHandler){



		var listener = undefined;


		if(!eventHandler || !eventName || !eventListener){

			return
		}

		if (!this.events[eventName]) {

			return
		}		

		event = this.events[eventName];

		let listeners = this.events[eventName].listeners;

// console.log('Нашли событие', this.events[eventName])


		let listenerIndex = listeners.length;

		for(var i = 0; i < listeners.length; i++){
			
			if(listeners[i].item === eventListener){

				listenerIndex = i;
				listener = listeners[i];
// console.log('Нашли слушателя', listener)
			}
		}

		if(listener){


			if(listener.handlers.indexOf(eventHandler) + 1){

// console.log('Слушатель', listener)
// console.log('Обработчик', listener.handlers)

				listener.handlers = deleteElementFromArray(listener.handlers, listener.handlers.indexOf(eventHandler));

				if(listener.handlers.length === 0){

					listeners = deleteElementFromArray(listeners, listenerIndex);

					if(listeners.length === 0){

						delete this.events[eventName];
					}
				}
			}
		}
	},

	trigger(eventName, data){


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

				handlers[i].bind(item)(data);
			}
		}
	}


}



// // myEvents.add('div', 'click', '');
let f =  function(data){console.log(data)};

// myEvents.add('click', $('div')[0], ()=>{alert()});
// myEvents.add('Хуяк!', $('div')[0], f );
// // myEvents.add('click', $('div')[0], 'eventListener');
// // myEvents.add('click', $('div')[0], 'eventListener');

// myEvents.trigger('Хуяк!');
// console.log(myEvents);
// myEvents.remove('Хуяк!', $('div')[0], f);
// myEvents.trigger('Хуяк!');

// myEvents.add('click', $('div')[0], (data)=>{alert(data)});
// myEvents.add('click', $('div')[0], f);
// myEvents.trigger('click', 'click!');
// myEvents.remove('click', $('div')[0], f);



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






if (!Array.from){
	
	Array.prototype.from = function (arrayLike) {
		
		let array = [];

		for(let i = 0; i < arrayLike.length; i++){

			array.push(arrayLike[i]);
		}

		return array;
	}
}

if (!Array.forEach){
	
	Array.prototype.forEach = function (f) {

		for(let i = 0; i < this.length; i++){

			f(this[i], i, this);
		}
	}
}


let tabs = {

	ids: [],

	items: {},

	[Symbol.iterator](){

		let _this = this;




		let index = 0;

		return{

			next(){

				if(index < _this.ids.length)

					return  {

						value: _this.items[index++],
						done: false
					}
				else

					return  {

						done: true
					}

			}

		}

	},

	init(){

		// let _this = this;


		// tabs.items['service']
		// tabs.items.service
		// tabs.items[0]
		// tabs.items.length

		// tabs.items['service'].panel
		// tabs.items['service'].panelItems['econom']
		// tabs.items['service'].panelItems.econom
		// tabs.items['service'].panelItems[0]
		// tabs.items['service'].panelItems.length

		// tabs.items['service'].container
		// tabs.items['service'].contentItems['econom']
		// tabs.items['service'].contentItems.econom
		// tabs.items['service'].contentItems[0]
		// tabs.items['service'].contentItems.length

		// tabs = {

		// 	items: {

		// 		'service' : {


		// 		},

		// 		0: 

		// 	}
		// }


		let _this = this;

		let elements = Array.from(document.querySelectorAll('[data-tabs]'));


		elements.forEach(


			function (item, i) {

				let tabItem = {};

				let id = item.getAttribute('data-tabs');

				_this.ids.push(id);

				_this.items[id] = tabItem;

				_this.items[i] = tabItem;


				tabItem.id = id;

				tabItem.index = i;

				tabItem.active = 0;

				tabItem.panel = item.querySelector('[data-tabs-panel]');

				tabItem.container = item.querySelector('[data-tabs-container]');

				let panelItemsArr = Array.from(tabItem.panel.querySelectorAll('[data-tabs-id]'));
				
				tabItem.panelItems = {};

				tabItem.panelItemsLength = panelItemsArr.length;

				for(let i = 0; i < panelItemsArr.length; i++){

					tabItem.panelItems[i] = panelItemsArr[i];
					console.log("panelItemsArr[i]", panelItemsArr[i]);

					tabItem.panelItems[panelItemsArr[i].getAttribute('data-tabs-id')] = panelItemsArr[i];
				}

				let itemsArr = Array.from(tabItem.container.querySelectorAll('[data-tabs-id]'));

				tabItem.contentItems = {};

				tabItem.contentItemsLength = itemsArr.length;

				for(let i = 0; i < itemsArr.length; i++){

					tabItem.contentItems[i] = itemsArr[i];

					tabItem.contentItems[itemsArr[i].getAttribute('data-tabs-id')] = itemsArr[i];
				}


			}
		)

		for(let tab of this){

			tab.activeClassName = tab.id + '_active';

			for(let i = 0; i < tab.panelItemsLength; i++){
				// console.log("i", i);

				tab.panelItems[i].classList.remove(tab.activeClassName);

				let thisItem = tab.panelItems[i];

				let thisItemIndex = i;

				thisItem.addEventListener('click', function(event){

					event.preventDefault();

					tab.panelItems[tab.active].classList.remove(tab.activeClassName);
					tab.contentItems[tab.active].classList.remove(tab.activeClassName);


					tab.active = thisItemIndex;

					thisItem.classList.add(tab.activeClassName);
					tab.contentItems[tab.active].classList.add(tab.activeClassName);

				});			
				// console.log("remove(tab.activeClassName)");
			}

			// console.log("tab.panelItems[tab.active].classList", tab.panelItems[tab.active].classList);
			tab.panelItems[tab.active].classList.add(tab.activeClassName);
		}



		return this;
	}
}

tabs.init();
console.log("tabs", tabs);



		for(let tab of tabs){



		}

// console.log("tabs", tabs.init());

// console.log("tabsIterator", tabsIterator.next().value);


// tabs['services'e.panel['econom']
// tabs['services'].container['econom']

// tabs[tabsId].panel[panelId]

// let c = {

// 	a: 1
// }

// console.log(c);



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

