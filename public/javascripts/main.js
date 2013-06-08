$(function(){

	var socket = io.connect(window.location.hostname);

	socket.on('connect', function(){
		if(navigator.appVersion.indexOf('iPhone') !== -1) {
			console.log('iphone');
		} else {
			console.log('not iphone');
		}
	});

	socket.on("disconnect", function(client) {
	});

	$(window).bind("orientationchange", function() {
		if(Math.abs(window.orientation) === 90) {
			socket.emit('send direction', 'w');
		} else {
			socket.emit('send direction', 'h');
		}
	});

	socket.on('receive direction', function(direction){
		if(direction==='h'){
			$('body').css('background-color', 'skyblue');
		} else {
			$('body').css('background-color', 'yellow');
		}
	});

});