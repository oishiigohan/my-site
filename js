$(document).ready(function () {
    //オーバーレイ用のボックス生成
    $("body").prepend('<div class="overlay"></div>');
    var h = $(document).height();
    //画面の高さをオーバーレイの高さにする
    $(".overlay").css('height', h);
    
    //クリックイベント
    $(".cut img").click(function () {
        var url = $(this).attr('src');
        var w = ($(document).width() / 2) - 200;
        var t = $(document).scrollTop() + 100;
        //閉じるボタンを生成
        $(".overlay").empty().append('<img src="' + url + '" /><span id="cursol">close</span>').fadeIn('fast');
        $(".overlay img").css({left: w, top: t, opacity: '1'});
        //マウスにあわせてボタンも動くようにする
        $("body").mousemove(function (e) {
            var x = e.pageX + 10;
            var y = e.pageY - 30;
            $("#cursol").css({top: y, left: x});
        });
    });
    //オーバーレイを閉じる
    $(".overlay").click(function () {
        $(".overlay").fadeOut();
    });
});