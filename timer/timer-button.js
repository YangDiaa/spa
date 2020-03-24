var $timerButton =(function(){
    var $btn = $('<input class="timer-button" type="button" disabled/>'),
        cfg = {
            container:'body',
            num:7,
            title:'同意'
        },
        timer,
        num;
    function show(conf){
        //1.DOM绘制
        if (timer) clearInterval(timer);
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num = cfg.num;
        $btn.val(cfg.title+'('+num+'s)');

        timer = setInterval(function(){
            num--;
            if(num === 0){
                clearInterval(timer);
                $btn.val('同意');
                $btn.removeAttr('disabled');//去掉禁用属性
            }else{
                $btn.val(cfg.title+'('+num+'s)');
            }
        },1000);
        //2.enent bind
    }

    $btn.click(function(){
        cfg.onClick();
    });
    return{
        show:show
    }
}());
//不用page load event
/*封装成对象，有几种方案
1.全局对象
var timerBtn={
    show:function()
}
2.工厂函数，一个函数返回值是一个简单对象
var timerBtn = (function(){
    return{
        show:function(){}
    }
}())匿名函数
3.构造函数
function TimerBtn(){

}
var tb=new TimerBtn()
*/