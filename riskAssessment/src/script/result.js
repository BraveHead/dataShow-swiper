$(document).ready(function () {
    let baseUrl = 'https://test.qtz360.com/api/rest/';   //测试接口
    //点击重新测评
    $('.again-rest').on('click', function () {
        sessionStorage.setItem('score',0);
        window.location.href = './index.html';
    });
    var score = parseInt(sessionStorage.getItem('score'));
    var flag = 0;
    if( score<=40 && score > 35){
        $('img').attr('src', 'assets/jijing@2x.png');
        flag = 3;
    }else if(score <= 25 && score > 15){
        $('img').attr('src', 'assets/wenjian@2x.png');
        flag = 1;
    }else if(score <= 35 && score > 25){
        $('img').attr('src', 'assets/pingheng@2x.png');
        flag = 2;
    }else if(score <= 15 && score >= 10){
        $('img').attr('src', 'assets/baoshou@2x.png');
        flag =0;
    }
    //获取cookie
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    //ios,android, h5返回方法
    function appJs(_type) {
        if (typeof window.safe !== 'undefined') {
            window.safe(_type);
        } else if (typeof iosJsSafe === 'function') {
            iosJsSafe();
        } else {
            window.location.href = 'https://test.qtz360.com/h5/home.html?v=1504852248180#/';
        }
    }

    //截取URL中的token
    /**
     * @param url  url后面当且仅当只拼接一个token
     */
    function getUrlInnerToken(url) {
        return url.slice(url.indexOf('token=')+6);
    }
    var token;
    //点击确定提交数据
    $('.sure-result').on('click', function () {
        if(location.href.indexOf('token=') === -1){
            token = getCookie('token');
            console.log(token);
        }else{
            token = getUrlInnerToken(location.href);
        }
        $.ajax({
            url: baseUrl + 'evaluate',
            method: 'POST',
            dataType: 'json',
            data: {
                'token': token,
                'evaluateType': flag,
            }
        }).done(function (data) {
            //请求成功后
            if(data.rcd === '0000'){
                appJs(token);
            }
        }).fail(function (error) {
            //请求失败后
            console.log('error'+ error);
        }).always(function () {
            //无论失败成功都要做的
        })
    })
});