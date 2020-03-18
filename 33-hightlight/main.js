$(function(){
    var editor = new Behave({
        textarea: $('#main textarea').get(0),
        replaceTab: true,
        softTabs: true,
        tabSize: 2,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true,
        fence: false
    });

    $('input').click(function(){
        var $code = $('<div><pre class="javascript"></pre><i class="iconfont icon-delete" title="删除"></i></div>');
        var $txt = $('textarea');
        if($txt.val() !== ''){
            $code.find('pre').html($txt.val());
            hljs.highlightBlock($code.find('pre')[0]);
            $('body').append($code);
        }
        var $del = $code.find('i.icon-delete');
        $del.click(function(){
            $code.remove();
        })
    });
    return editor;
});