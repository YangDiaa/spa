function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
$(function(){
    var $width = $('#width'),
        $height = $('#height'),
        $form = $('form'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /*calc button click event*/
    $form.submit(function(e){
        e.preventDefault();// 阻止表单提交
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

});