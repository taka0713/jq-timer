$(function(){
    $('#start').click(function(){
        setInterval(function(){
            const minutes = $('#minutes').val();
            const seconds = $('#seconds').val();
            $('#seconds').val(seconds - 1);
        },1000);
    });

});