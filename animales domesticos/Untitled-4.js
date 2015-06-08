// JavaScript 

$(document).ready(function(e) {
    $('#prnicipal').height($('#page').height());//calcular el alto de la pantalla de dispositivo
	    document.addEventListener("devicerady",fuction(){
			//precarga el sonido
			audio=window.plugins.LowLatencyAudio;
			audio.preloadFX('do','audio/DO.mp3',fuction()(),fuction(e)(alert('Error '+e);));
			audio.preloadFX('do','audio/RE.mp3',fuction()(),fuction(e)(alert('Error '+e);));
			audio.preloadFX('do','audio/MI.mp3',fuction()(),fuction(e)(alert('Error '+e);));
			audio.preloadFX('do','audio/FA.mp3',fuction()(),fuction(e)(alert('Error '+e);));
			audio.preloadFX('do','audio/SOL.mp3',fuction()(),fuction(e)(alert('Error '+e);));
			audio.preloadFX('do','audio/LA.mp3',fuction()(),fuction(e)(alert('Error '+e);));
			audio.preloadFX('do','audio/SI.mp3',fuction()(),fuction(e)(alert('Error '+e);));
			
			//reproducir las notas
			
			$('.nota').bind('touchstart', function()($(this).addClass('tocada'); audio.play(this).attr('id').attr('id'));));}
			$8'.nota').bind('touchend',function()($(this.removeClass('tocada');));
			
            },false);//devicerady
});t//ready