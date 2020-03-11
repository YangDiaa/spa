$(function(){
    var $progress = $('progress'),
        $start = $('#start'),
        $stop = $('#stop'),
        $reset = $('#reset'),
        num=0,
        c=0;

    $start.click(function(){
        0 === num && (num = window.setInterval(function(){
            $progress.attr("value",c++);
        },100))
    });
    $stop.click(function(){
        window.clearInterval(num);
        num=0;
    });
    $reset.click(function(){
        $progress.attr("value","0");
        c=0;
    });

    
})