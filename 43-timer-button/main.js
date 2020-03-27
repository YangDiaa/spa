requirejs.config({
    'paths': {
      'jquery': '//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
    }
});

require(['jquery'],function($){
    $(function(){
        var $btnAdd = $('#add');
        $btnAdd.click(function(){
            require(['timer-button'],function(TimerButton){
                var tb1 = new TimerButton();
                tb1.show({
                    num:  9,
                    title: '发送验证码',
                    onClick: function(){
                        alert("短信已发送");
                    }
                })
            })
        });
        
    })
});
    