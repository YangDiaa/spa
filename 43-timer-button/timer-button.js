define(['jquery'],function($){
    function TimerButton(){
        var $btn = $('<input class="timer-button" type="button" disabled/>');
        var cfg = {
                container:'body',
                num:7,
                title:'同意',
                onClick: null
            },
            timer,
            num;
        this.show = function(conf){
            //1.DOM绘制
            //if (timer) clearInterval(timer);
            $(cfg.container).append($btn);
            $.extend(cfg,conf);
            num = cfg.num;
            $btn.val(cfg.title+'('+num+'s)');
    
            timer = setInterval(function(){
                num--;
                if(num === 0){
                    clearInterval(timer);
                    $btn.val(cfg.title);
                    $btn.removeAttr('disabled');//去掉禁用属性
                }else{
                    $btn.val(cfg.title+'('+num+'s)');
                }
            },1000);
            //2.enent bind
            $btn.click(cfg.onClick);
        }
    }
    return TimerButton;
})


