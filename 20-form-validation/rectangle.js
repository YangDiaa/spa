function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
$(function(){
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /*calc button click event*/
    $btnCal.click(function(){
        //validate if error return
        if(!validate('#width') || !validate('#height')){
            return;
        }
        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = 2*(roundFractional(w + h, 1));
            a = roundFractional(w * h, 2);
        //output
        $perimeter.val(p);
        $area.val(a);
    });

    $width.focusout(function(){
        //if(!validate(width)) select this
        if(!validate('#width')){
            $width.select();
        }
    })
    $height.focusout(function(){
        //if(!validate(height)) select this
        if(!validate('#height')){
            $height.select();
        }
    })
    
    function validate(field){
        //get DOM error message
        var $data = $(field),
            $msg = $(field+"-validation-message");
        //validate null
        if($data.val() === ''){
            $msg.html("不能为空!");
            //select设置焦点
            $data.select();
            return false;
        }
        //validate number
        if(!(/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val()))){
            $msg.html("必须为数值!");
            $data.select();
            return false;
        }
        //validate > 0
        if($data.val()<0){
            $msg.html("必须大于零!");
            $data.select();
            return false;
        }
        //prompt error message
        //return false;
        return true;
    }
});