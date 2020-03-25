var $pwdVisual = (function() {
    function show(conf){
      var $pwd = $('<input class="pwd" type="password">'),
        $text = $('<input class="text" type="text">'),
        $eye = $('<div class="eye"></div>'),
        $div = $('<div class="box">密码：</div>');
      
      $div.append($pwd);
      $div.append($eye);
      $div.append($text);
      $(conf.container).append($div);

      $pwd.on('input', function(){
        $text.val($pwd.val());
      });
    
      $eye.mouseover(function(){
        $text.css('z-index', '10');
      });
    
      $eye.mouseout(function(){
        $text.css('z-index', '-10');
      });

      getPwd = function() {
        return $text.val();
      };
    } 

    return{
      show:show
    }
}());