$(document).ready(function () {
    let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        // paginationClickable: '.swiper-pagination',
        paginationType: 'progress',
        noSwiping: true,
        effect: 'fade',
        autoHeight: true,
    });
    let scoreCount = 0;
    let scoreArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let crudeIndex = 0;
    const prePage = $('.pre-page'),
        nextPage = $('.next-page');

    if (crudeIndex === 0) {
        prePage.eq(crudeIndex).hide();
        nextPage.eq(crudeIndex).hide();
    }
    var imgIcon = $('.risk-ul').eq(crudeIndex).find('li');   //当前页面下的imgIcon

    //跳转函数
    function slideToFun(index) {
        imgIcon = $('.risk-ul').eq(index).find('li');
        swiper.slideTo(index, 400, false);
        $('.swiper-slide-active').siblings('div').css('opacity', 0);   //把当前的slide的兄弟元素全部隐藏
    }

    //上一页
    prePage.on('click', function (e) {
        crudeIndex -= 1;
        if (crudeIndex <= 0) {
            crudeIndex = 0;
            prePage.eq(crudeIndex).hide();
        }
        nextPage.eq(crudeIndex).show();
        slideToFun(crudeIndex);
    });
    //下一页
    nextPage.on('click', function (e) {
        crudeIndex += 1;
        if (crudeIndex >= 9) {
            crudeIndex = 9;
        }
        slideToFun(crudeIndex);
    });

    //截取URL中的token
    /**
     * @param url  url后面当且仅当只拼接一个token
     */
    function getUrlInnerToken(url) {
        return url.slice(url.indexOf('token=')+6);
    }

    let pause = true;
    var token;
    $('.risk-ul>li').on('click', function () {
        $('.risk-ul').eq(crudeIndex).find('img').attr('src', 'assets/no-choice@2x.png');
        $(this).find('img').attr('src', 'assets/choice@2x.png');
        scoreArr[crudeIndex] = imgIcon.index(this) + 1;
        // console.log(scoreArr);
        crudeIndex += 1;
        if (crudeIndex >= 9) {
            crudeIndex = 9;
            $('.risk-ul>li').on('click', () => {
                $('.submit-risk').css('background-color', '#2dafff').on('click', function(){
                    $(this).css('background-color','#0098ff');
                    if(pause){
                        for (let i = 0; i < scoreArr.length; i++) {
                            pause = false;
                            scoreCount += scoreArr[i];
                            if(i === scoreCount.length-1){
                                pause = true;
                            }
                        }
                        window.sessionStorage.setItem('score', scoreCount);
                        if(location.href.indexOf('token=') === -1){
                            window.location.href = './riskResult.html';
                        }else{
                            token = getUrlInnerToken(location.href);
                            window.location.href = './riskResult.html?token=' + token;
                        }
                    }
                })
            })
        }
        slideToFun(crudeIndex);
    })
});
