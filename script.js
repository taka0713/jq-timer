$(function(){
    $('#start').click(function(){
        setInterval(function(){
            const minutes = $('#minutes').val();
            const seconds = $('#seconds').val();
            $('#seconds').val(seconds - 1);
            if(seconds.value.length == 0){
                alert('終了です');
            }
            if(seconds>0){}
        },1000);
    });

    $('#stop').click(function(){
        clearInterval();
        
    });
    
    $('#reset').click(function(){
        clearInterval(interval);
        resetTimer();
    });

});