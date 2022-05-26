$(function(){
    let timer = null;

    $('#start').click(function(){
        timer = setInterval(function(){
            const minutes = $('#minutes').val();
            const seconds = Number($('#seconds').val());
            $('#seconds').val(seconds - 1);
            console.log(seconds);
            if(seconds === 0){
                alert('終了です');
                clearInterval(timer);
            }
            if(seconds>0){}
        },1000);
    });

    $('#stop').click(function(){
        clearInterval(timer);
        
    });
    
    $('#reset').click(function(){
        clearInterval(interval);
        resetTimer();
    });

});

