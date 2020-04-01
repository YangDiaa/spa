$(function(){
    var $url = $('input[type="text"]'),
        $btnSave = $('input[type="button"]'),
        $img = $('img'),
        $tmpImg = $('<img>');

    $btnSave.click(function(){
        //validate url not null
        var url = $url.val();
        if(url ==='') return;
        //load url image tmpImg
        $tmpImg.attr('crossOrigin','anonymous');
        $tmpImg.attr('src',url);
    })
    $tmpImg.load(function() {
        //creat canvas
        var can = $('<canvas>').get(0);
        var ctx = can.getContext('2d');
        can.width = $tmpImg.get(0).width;
        can.height = $tmpImg.get(0).height;
        //canvas file tmpImg
        ctx.drawImage($tmpImg.get(0), 0, 0, can.width, can.height);
        //canvas output base64 string
        var str = can.toDataURL();
        //save base64 string to localstorage
        window.localStorage.setItem('img',str);
        //load localstorage string to $img
        var strImg = window.localStorage.getItem('img');
        console.log(strImg)
        $img.attr('src',strImg);
    })
})