export default class MyGrid {
	constructor(settings) {
		this.img_elements = $('.this-item img');
		this.text_elements = $('.this-item .text');
		this.wrapper = $('.this-wrapper');
		this.settings = settings;
		this.elMargin;
		this.rowMargin;
		this.quantity;
	}
	myStart() {
		var context = this;
		resizing.call(context);
		$(window).resize(function() {
			var r = $(window).width();
			resizing.call(context, r);
		});
	}
}

function resizing(width = $(window).width(), quantity) {
	var screenWidth = width;
	for (var i = this.settings.responsive.length; i > 0; i--) {
		if (screenWidth < this.settings.responsive[i - 1].breakpoint) {
			this.quantity = this.settings.responsive[i - 1].quantityRowElements;
			break;
		} else {
			this.quantity = this.settings.quantityRowElements;
			this.elMargin = this.settings.elementGap;
			this.rowMargin = this.settings.rowGap;
		}
	}
	inicialization.call(this);
	sH();
}

function inicialization() {
	$('.this-item').detach();
	$('.my-row').detach();
	var l = 0;
	var l2 = this.quantity;
	
	for (let i = 0; i < this.img_elements.length / this.quantity; i++) {
		$(`.this-wrapper`).append(`<div class="my-row row${i}"></div>`);
		if (i !== this.img_elements.length / this.quantity - 1) {
			$(`.my-row`).eq(i).css({ 'margin-bottom': this.rowMargin });
		}

		for (let i2 = l; i2 < l2; i2++) {
			$(`.row${i}`).append(`<div class="my-item">
									 <div class="iside">
										<div class="my-container">
										   <div class="i-el">
												
											</div>
										</div>
									</div>
								</div>`);
			if (i2 !== l2 - 1) {
				$(`.my-item`).eq(i2).css({ 'margin-right': this.elMargin });
			}
			var elementWidth = ($('.this-wrapper').outerWidth() - Number(this.elMargin.slice(0, -2) * (this.quantity - 1))) / this.quantity;
			
			$(`.my-item`).css({ 'width': `${elementWidth}px`, 'display': 'inline-block' });
			
			$('.my-container')[i2].append(this.img_elements[i2]);
			$('.i-el')[i2].append(this.text_elements[i2]);
		}
		$(`.row${i}`).removeClass(`row${i}`);
		l += this.quantity;
		l2 += this.quantity;
		
		if (l2 > this.img_elements.length - 1) {
			l2 = this.img_elements.length;
		}
	}
}

function sH() {
	$('.my-item').on('mouseover', function(){
		this.classList.add('my-show');
	});
	$('.my-item').on('mouseout', function(){
		this.classList.remove('my-show');
	});
}
