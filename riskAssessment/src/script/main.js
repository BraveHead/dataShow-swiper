

$(document).ready(function () {
    let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        noSwiping: true,
    });
    let crudeIndex = 0;
    const   prePage = $('.pre-page'),
            nextPage = $('.next-page');

    if(crudeIndex === 0){
        prePage.eq(crudeIndex).hide();
        nextPage.eq(crudeIndex).hide();
    }
    var imgIcon = $('.risk-ul').eq(crudeIndex).find('img');   //当前页面下的imgIcon

    //跳转函数
    function slideToFun(index) {
        imgIcon = $('.risk-ul').eq(index).find('img');
        swiper.slideTo(index, 300, false);
    }

    //上一页
    prePage.on('click', function (e) {
        crudeIndex -= 1 ;
        if(crudeIndex <= 0){
            crudeIndex = 0;
            prePage.eq(crudeIndex).hide();
        }
        nextPage.eq(crudeIndex).show();
        slideToFun(crudeIndex);
    });
    //下一页
    nextPage.on('click', function (e) {
        crudeIndex += 1 ;
        if(crudeIndex >= 9){
            crudeIndex = 9;
        }
        slideToFun(crudeIndex);
    });

    $('.risk-ul>li>img').on('click', function () {
        imgIcon.attr('src', 'assets/no-choice@2x.png');
        $(this).attr('src', 'assets/choice@2x.png');
        crudeIndex += 1;
        if(crudeIndex >= 9){
            crudeIndex = 9;
        }
        slideToFun(crudeIndex);
    })
});
