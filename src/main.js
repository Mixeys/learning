window.onload = function () {

	var counter = 0,
	timer = 0;

	var start = document.getElementById('start');
	var stop = document.getElementById('stop');
	var reset = document.getElementById('reset');

	start.addEventListener('click', function () {
		timer = setInterval(function () {
			document.getElementById('main').innerHTML = counter;
			counter++;
		}, 1000);
	});

	stop.addEventListener('click', function () {
		clearInterval(timer);
	});

	reset.addEventListener('click', function () {
		clearInterval(timer);
		counter = 0;
		return document.getElementById('main').innerHTML = counter;
	});

// ======================================================================

	function getQueryString() {

		var args = {};
		var query = location.search.substr(1);
		var arr = query.split('&');

		for (var i = 0; i < arr.length; i++) {
			var pos = arr[i].indexOf('=');
			if (pos == -1) {
				continue;
			}
			var name = arr[i].slice(0, pos);
			var value = arr[i].slice(pos + 1);

			args[name] = value;
		}
		return args;
	};

	function print() {
		var args = getQueryString();
		var elem = document.createElement('p');
		elem.innerHTML = 'login: ' + args.login + ' <br> ';
		elem.innerHTML += 'password: ' + args.password;

		document.body.appendChild(elem);
	};

	print();

	// var yandex = window.open('http://yandex.ru', 'windowName');

// =====================================================================

	var colDiv = document.getElementById('colorDiv'),
		btnColor = document.getElementById('touch');

	btnColor.addEventListener('click', function () {
		// if(colDiv.style.backgroundColor == 'green'){
		// 	colDiv.style.backgroundColor = 'red';
		// } else {
		// 	colDiv.style.backgroundColor = 'green';
		// }
		if (colDiv.classList.contains('divGreen')) {
			colDiv.classList.remove('divGreen');
			colDiv.classList.add('divRed');
			alert('backgroundColor: ' + getStyle(colDiv, 'backgroundColor'));
		} else if (colDiv.classList.contains('divRed')) {
			colDiv.classList.remove('divRed');
			colDiv.classList.add('divGreen');
			alert('backgroundColor: ' + getStyle(colDiv, 'backgroundColor'));			
		}
	});

	function getStyle( elem, styleName ){
		if( Element.currentStyle ){
			return Element.currentStyle[styleName];
		} else if( window.getComputedStyle ){
			return window.getComputedStyle(elem, null)[styleName];
		}
	};

// ==================================================================

	function Tooltip(){
		this.tooltip = document.createElement("div");
		this.tooltip.style.position = 'absolute';
		this.tooltip.style.visibility = 'hidden';
		this.tooltip.className = "tooltip";
	};

	Tooltip.prototype.show = function(text, x, y){
		this.tooltip.innerHTML = text;
		this.tooltip.style.left = x + "px";
		this.tooltip.style.top = y + "px";
		this.tooltip.style.visibility = "visible";

		if( this.tooltip.parentNode != document.body ){
			document.body.appendChild(this.tooltip);
		}
	};

	Tooltip.prototype.hide = function(){
		this.tooltip.style.visibility = "hidden";
	};

	var d = document.getElementById('text');
	d.onmousemove = mouseMoveHandler;
	d.onmouseout = mouseOutHandler;

	var t = new Tooltip();

	function mouseMoveHandler(e){
		if(!e) e = window.event;
		t.show('this is text', e.clientX + 10, e.clientY + 10);
	};

	function mouseOutHandler(){
		t.hide();
	};

// ======================================================================

	var dColor = document.getElementById('dinamColor'),
	color = 0;

	setInterval(function(){
		color = ((color + 1) % 360);
		dColor.style.backgroundColor = "hsl(" + color + ", 100%, 50% )"; 
	}, 100);

// =====================================================================

var arrLi = document.getElementsByTagName('li');
for( var i = 0; i < arrLi.length; i++){
	arrLi[i].onclick = function(){
		this.style.backgroundColor = "red";
	};
};

// ====================================================================

document.getElementById("form").addEventListener("submit", function(e){
	if(document.getElementById("login").value.length == 0){
		e.preventDefault();
		alert("No text in login");
	}
});




}

