
// ここにjQueryを記述



// ハンバーガーボタン・メニューの処理まとめ
function toggle() {
    $('#btn__top').toggleClass('rotate-top');
    $('#btn__middle').toggleClass('rotate-middle');
    $('#btn__bottom').toggleClass('rotate-bottom');
    $('#gnav').toggleClass('nav-active');
}

// 処理実行
$(function () {

    $('#btn').on('click', (toggle)); //ボタンクリック

    $('#header').on('click', '.gnav__link', function () {// スムーススクロール
        let href = $(this).attr('href');
        // console.log(href);
        let top = $(href).offset().top;
        // console.log(top);
        $('html, body').animate({ scrollTop: (top - 150) }, 500);

        $('#btn__top').removeClass('rotate-top');
        $('#btn__middle').removeClass('rotate-middle');
        $('#btn__bottom').removeClass('rotate-bottom');
        $('#gnav').removeClass('nav-active');
        return false;
    });

});

