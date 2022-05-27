$(function(){
    let timer = null;

    $('#start').click(function(){
        let minutes = $('#minutes').val();
        let seconds = Number($('#seconds').val());
        setInterval(function(){
            $('#seconds').val(seconds -1);
            seconds = seconds -1;
            
            if(seconds === 0){
              alert('終了です');
            }
            if(seconds === 0 && minutes > 0){
                minutes -1;
                seconds = 59;
            }
        },1000);

    });

    $('#stop').click(function(){
        clearInterval(timer);
        
    });

    $('#reset').click(function(){
        
        
    });
});