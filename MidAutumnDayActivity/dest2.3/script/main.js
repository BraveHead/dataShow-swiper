(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    // let baseUrl = 'https://test.qtz360.com/api1.1.0/rest/'; //测试地址
    var baseUrl = 'https://www.qtz360.com/apiactive/rest/'; //正式地址
    $('.tan-kuang-bg').css({
        'height': '100%',
        'position': 'fixed'
    });
    if (window.sessionStorage.getItem('login') === 'yes') {
        $('.red-btn').attr('src', 'assets/red-going-get@2x.png');
    } else if (window.sessionStorage.getItem('login') === 'over') {
        $('.red-btn').attr('src', 'assets/red-getted@2x.png');
        redRender();
    } else {
        $('.red-btn').attr('src', 'assets/red-login@2x.png');
    }
    //投资规则点击弹出
    $('.touzi-rules').on('click', function () {
        $('html').css('overflow', 'hidden');
        $('.alert-rules').show().html(' <div class="rules-bg">\n            <img src="assets/close-alert@2x.png" class="close-alert"/>\n            <img src="assets/close-alert-line@2x.png" class="close-line"/>\n            <P style="padding-top: 0.30rem">\u6D3B\u52A8\u8BF4\u660E:</P>\n            <P>1.\u7528\u6237\u70B9\u51FB\u9886\u53D6\u6309\u94AE\u5373\u53EF\u9886\u53D6100\u5143\u6295\u8D44\u7EA2\u5305\uFF0C\u6BCF\u65E5\u9650\u9886\u4E00\u6B21\u3002</P>\n            <P>2.\u6D3B\u52A8\u671F\u95F4\u7528\u6237\u5B8C\u6210\u4EFB\u610F3\u5929\u4EFB\u52A1\u5956\u52B1100\u5143\u4EAC\u4E1C\u8D2D\u7269\u5361\uFF0C\u7528\u6237\u5B8C\u6210\u4EFB\u610F6\u5929\u4EFB\u52A1\u5956\u52B1300\u5143\u4EAC\u4E1C\u8D2D\u7269\u5361\u3002</P>\n            <P>3.\u6BCF\u65E5\u9886\u53D6\u5E76\u4F7F\u7528\u5219\u7B97\u5B8C\u6210\u5F53\u65E5\u4EFB\u52A1\u3002</P>\n            <P>4.\u798F\u5229\u4E00\u4E24\u9879\u5956\u52B1\u4EC5\u9650\u9886\u53D6\u4E00\u9879\u3002</P>\n            <P>5.\u793C\u54C1\u5728\u6D3B\u52A8\u7ED3\u675F\u540E\uFF0C\u7531\u5BA2\u670D\u8054\u7CFB\u7EDF\u4E00\u53D1\u653E\uFF0C\u8BF7\u4FDD\u6301\u7535\u8BDD\u7545\u901A\u3002</P>\n            <P>6.\u5982\u6709\u7591\u95EE\u8BF7\u54A8\u8BE2\u5BA2\u670D\uFF1A</P>\n            <P>\u5BA2\u670D\u70ED\u7EBF\uFF1A4007-571-918  \u5BA2\u670DQQ:3378831238</P>\n        </div>');
        //点击去除弹框
        $('.close-alert').on('click', function () {
            $('html').css('overflow', 'scroll');
            $('.alert-rules').hide();
        });
    });
    //领取红包
    /*$('.red-btn').on('click', function () {
        $('body').css('overflow','hidden');
        $('.alert-rules').show().html(`  <div class="red-bg">
            <img src="assets/close-alert@2x.png" class="close-alert"/>
            <img src="assets/close-alert-line@2x.png" class="close-line"/>
            <P class="gxl">恭喜您！</P>
            <p>100元红包已发送至您的账户，请注意查收！</p>
            <p>红包有效期1天，35天标可用。</p>
            <img src="assets/red-100@2x.png" class="red-100-pic"/>
            <P style="font-size: 0.18rem;transform: scale(0.9); transform-origin:0 0;width: 110%;">(领取成功可在我的账户-红包中查看)</P>
        </div>`);
        //点击去除弹框
        $('.close-alert').on('click', function () {
            $('body').css('overflow','scroll');
            $('.alert-rules').hide();
        });
    });*/
    //点击弹出京东购物卡100
    function alertJD100() {
        $('.jd-100').on('click', function () {
            $('html').css('overflow', 'hidden');
            $('.alert-rules').show().html(' <div class="red-bg">\n            <img src="assets/close-alert@2x.png" class="close-alert"/>\n            <img src="assets/close-alert-line@2x.png" class="close-line"/>\n            <P class="gxl">\u606D\u559C\u60A8\uFF01</P>\n            <p>\u606D\u559C\u83B7\u5F97100\u5143\u4EAC\u4E1C\u8D2D\u7269\u5361\uFF0C\u6D3B\u52A8\u7ED3\u675F\u540E\u540C\u610F\u53D1\u653E\u3002</p>\n            <img src="assets/jd-gift-100@2x.png" class="jd-gift-100"/>\n            <P style="transform: scale(0.9); transform-origin:0 0;width: 110%;padding-top:0.25rem;">(\u793C\u54C1\u5728\u6D3B\u52A8\u7ED3\u675F\u540E\uFF0C\u6709\u5BA2\u670D\u8054\u7CFB\u7EDF\u4E00\u53D1\u653E\uFF0C\u8BF7\u4FDD\u6301\u7535\u8BDD\u7545\u901A)</P>\n        </div>');
            //点击去除弹框
            $('.close-alert').on('click', function () {
                $('html').css('overflow', 'scroll');
                $('.alert-rules').hide();
            });
        });
    };
    //点击弹出京东购物卡300
    function alertJD300() {
        $('.jd-300').on('click', function () {
            $('html').css('overflow', 'hidden');
            $('.alert-rules').show().html(' <div class="red-bg">\n            <img src="assets/close-alert@2x.png" class="close-alert"/>\n            <img src="assets/close-alert-line@2x.png" class="close-line"/>\n            <P class="gxl">\u606D\u559C\u60A8\uFF01</P>\n            <p>\u606D\u559C\u83B7\u5F97300\u5143\u4EAC\u4E1C\u8D2D\u7269\u5361\uFF0C\u6D3B\u52A8\u7ED3\u675F\u540E\u540C\u610F\u53D1\u653E\u3002</p>\n            <img src="assets/jd-gift-300@2x.png" class="jd-gift-100"/>\n            <P style="transform: scale(0.9); transform-origin:0 0;width: 110%;padding-top:0.25rem;">(\u793C\u54C1\u5728\u6D3B\u52A8\u7ED3\u675F\u540E\uFF0C\u6709\u5BA2\u670D\u8054\u7CFB\u7EDF\u4E00\u53D1\u653E\uFF0C\u8BF7\u4FDD\u6301\u7535\u8BDD\u7545\u901A)</P>\n        </div>');
            //点击去除弹框
            $('.close-alert').on('click', function () {
                $('html').css('overflow', 'scroll');
                $('.alert-rules').hide();
            });
        });
    }
    //红包列表渲染
    function redRender() {
        //获取已完成任务
        $.ajax({
            url: baseUrl + 'guoqingHongbaoSign',
            method: 'POST',
            dataType: 'json',
            data: {
                token: window.sessionStorage.getItem('token')
            }
        }).done(function (res) {
            var redLi = $('.red-ul>li');
            for (var i = 0; i < res.data.hasUse; i++) {
                redLi.eq(i).css({
                    'background': 'url(assets/red-' + (i + 1) + '@2x.png) no-repeat center',
                    'background-size': '1.08rem 1.02rem'
                });
                $('.tz-logo').eq(i).show().attr('src', 'assets/touzi.png');
            }
            if (res.data.hasUse <= 3) {
                $('.fl-tx').html('\u5DF2\u5B8C\u6210' + res.data.hasUse + '\u6B21\u4EFB\u52A1\uFF0C\u60A8\u518D\u5B8C\u6210' + (3 - res.data.hasUse) + '\u6B21\u83B7\u5F97\u795E\u79D8\u793C\u5305');
                if (res.data.hasUse === 3) {
                    $('.jd-100').attr('src', 'assets/lw-light@2x.png');
                    $('.fl-tx').html('\u5DF2\u5B8C\u6210' + res.data.hasUse + '\u6B21\u4EFB\u52A1\uFF0C\u60A8\u518D\u5B8C\u6210' + 3 + '\u6B21\u83B7\u5F97\u7EC8\u6781\u795E\u79D8\u793C\u5305');
                    alertJD100(); //点击出100弹框
                }
            } else if (res.data.hasUse > 3 && res.data.hasUse <= 5) {
                $('.jd-100').attr('src', 'assets/lw-light@2x.png');
                alertJD100(); //点击出100弹框
                $('.fl-tx').html('\u5DF2\u5B8C\u6210' + res.data.hasUse + '\u6B21\u4EFB\u52A1\uFF0C\u60A8\u518D\u5B8C\u6210' + (6 - res.data.hasUse) + '\u6B21\u83B7\u5F97\u7EC8\u6781\u795E\u79D8\u793C\u5305');
            } else {
                $('.jd-100').attr('src', 'assets/lw-light@2x.png');
                alertJD100(); //点击出100弹框
                $('.fl-tx').html('\u5DF2\u5B8C\u62106\u6B21\u4EFB\u52A1\uFF0C\u606D\u559C\u60A8\u83B7\u5F97\u7EC8\u6781\u5927\u793C\uFF01');
                $('.jd-300').attr('src', 'assets/lw-light@2x.png');
                alertJD300(); //点击出JD300弹框
            }
            if (res.data.status === 1) {
                $('.red-btn').attr('src', 'assets/red-getted@2x.png');
                window.sessionStorage.setItem('login', 'over');
                if (res.data.todayStatus === 0) {
                    redLi.eq(res.data.hasUse).css({
                        'background': 'url(assets/red-' + (res.data.hasUse + 1) + '@2x.png) no-repeat center',
                        'background-size': '1.08rem 1.02rem'
                    });
                    $('.tz-logo').eq(res.data.hasUse).show();
                } else {
                    redLi.eq(res.data.hasUse > 0 ? res.data.hasUse - 1 : 0).css({
                        'background': 'url(assets/red-' + ((res.data.hasUse > 0 ? res.data.hasUse - 1 : 0) + 1) + '@2x.png) no-repeat center',
                        'background-size': '1.08rem 1.02rem'
                    });
                    $('.tz-logo').eq(res.data.hasUse > 0 ? res.data.hasUse - 1 : 0).show();
                }
            } else {
                $('.red-btn').attr('src', 'assets/red-going-get@2x.png');
                window.sessionStorage.setItem('login', 'yes');
            }
        }).fail(function (error) {
            console.log(error);
        });
    }
    //点击登录
    $('.red-btn').on('click', function () {
        if (window.sessionStorage.getItem('login') === 'yes') {
            //领取红包
            $('html').css('overflow', 'hidden');
            $('.alert-rules').show().html('  <div class="red-bg">\n                <img src="assets/close-alert@2x.png" class="close-alert get-red-close"/>\n                <img src="assets/close-alert-line@2x.png" class="close-line"/>\n                <P class="gxl">\u606D\u559C\u60A8\uFF01</P>\n                <p>100\u5143\u7EA2\u5305\u5DF2\u53D1\u9001\u81F3\u60A8\u7684\u8D26\u6237\uFF0C\u8BF7\u6CE8\u610F\u67E5\u6536\uFF01</p>\n                <p>\u7EA2\u5305\u6709\u6548\u671F1\u5929\uFF0C35\u5929\u6807\u53EF\u7528\u3002</p>\n                <img src="assets/red-100@2x.png" class="red-100-pic"/>\n                <P style="font-size: 0.18rem;transform: scale(0.9); transform-origin:0 0;width: 110%;">(\u9886\u53D6\u6210\u529F\u53EF\u5728\u6211\u7684\u8D26\u6237-\u7EA2\u5305\u4E2D\u67E5\u770B)</P>\n            </div>');
            //领取红包
            $.ajax({
                url: baseUrl + 'guoqingHongbao',
                method: 'POST',
                dataType: 'json',
                data: {
                    token: window.sessionStorage.getItem('token')
                }
            }).done(function (res) {
                redRender(); //红包列表刷新
            }).fail(function (error) {
                console.log(error);
            });
            //点击去除弹框
            $('.get-red-close').on('click', function () {
                $('html').css('overflow', 'scroll');
                window.sessionStorage.setItem('login', 'over');
                $('.red-btn').attr('src', 'assets/red-getted@2x.png');
                $('.alert-rules').hide();
            });
        } else if (window.sessionStorage.getItem('login') === 'over') {
            //去注册
            alert('今日已领取，请明天再来哦！');
            // redRender();  //红包刷新
        } else {
            TanKuang.loginContainer = true;
            TanKuang.status = true;
            $('.tan-kuang-bg').css('display', 'flex');
        }
    });
    var template = ''; //
    Vue.http.options.emulateJSON = true;
    var TanKuang = new Vue({
        el: '#tan-kuang',
        data: {
            button: false,
            isUp: false,
            overflow: 'hidden',
            phoneTitle: '请输入正确的手机号',
            passwordTitle: '请输入正确格式的密码',
            checkWordTitle: '请输入正确的验证码',
            checkPicCode: '请输入正确的图形验证码',
            getCheckWordButton: '获取验证码',
            phoneNumber: '', //手机号码
            phoneNumShow: false, //号码弹框提醒判断
            passwordText: '', //密码
            passwordShow: false, //密码弹框提醒判断
            picCodeText: '', //图形验证码
            picCodeTitle: false, //图形验证码弹框提醒
            checkNumberText: '', //验证码
            checkShow: false, //验证码弹框提醒判断
            isClick: false, //点击在验证码
            isDuable: false, //多次点击验证码
            clickColor: '#ffffff', //点击按钮的颜色,
            // baseUrl: 'https://www.qtz360.com/api2.2.2/rest/',   //正式url2.2根路径
            // baseUrl: 'https://www.qtz360.com/api2.2.3/rest/',   //正式url2.3根路径
            // baseUrl: 'https://test.qtz360.com/api1.1.0/rest/',  //url测试
            baseUrl: 'https://www.qtz360.com/apiactive/rest/', //url测试
            phoneDisplay: 'none',
            checkDisplay: 'none',
            sn: 8932543, //ETC渠道码
            // sn:6431961,  //测试渠道码
            channelId: '', //渠道id
            channelCookie: '', //渠道cookie
            timeStamp: '',
            renderStatus: true, //登录输入手机号页面status
            loginStatus: false, //输入登录密码界面
            registerTiXinStatus: false, //账号未注册提醒界面
            registerStatus: false, //注册账号页面
            savePhone: '', //保存当前的用户登录的手机号
            codeHover: true, //获取验证码的颜色变化
            passwordShowLogin: 'none', //登录界面下的密码提醒隐藏
            loginContainer: true, //整个登录容器的显示
            status: false
        },
        mounted: function mounted() {
            // this.$nextTick(function () {
            //     this.submitClick();
            // })
        },
        created: function created() {},
        methods: {
            //图形验证码点击切换
            changePicCodeFun: function changePicCodeFun() {
                this.timeStamp = Math.random().toFixed(6) * 1000000 + 1;
                this.loadPicCode(); //冲新加载图形验证码
            },
            //手机号码格式验证
            checkPhone: function checkPhone(text) {
                var filter = /^1[3456789]\d{9}$/;
                if (filter.test(text)) {
                    this.phoneNumShow = false;
                }
                return (/^1[34578]\d{9}$/.test(text)
                );
            },
            //8-20位数字和字母的密码格式验证
            checkPassword: function checkPassword(text) {
                var filter = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
                if (filter.test(text)) {
                    this.passwordShow = false;
                }
                return filter.test(text);
            },
            //6位验证码的格式验证
            checkWord: function checkWord(text) {
                var filter = /^\d{6}$/;
                if (filter.test(text)) {
                    this.checkShow = false;
                }
                return filter.test(text);
            },
            //初始化加载图片验证码
            loadPicCode: function loadPicCode() {
                var _this2 = this;

                this.timestamp = Math.random().toFixed(6) * 1000000 + 1;
                this.$http.get(this.baseUrl + 'CodeOnle?imgKey=' + this.timestamp, { 'imgKey': this.timestamp }).then(function (res) {
                    $('.picCode').attr('src', _this2.baseUrl + 'CodeOnle?imgKey=' + _this2.timestamp);
                    // console.log(this.timeStamp);
                });
            },
            //获取验证码后样式改变
            checkWordChange: function checkWordChange() {
                var _this3 = this;

                if (!this.isClick) {
                    this.codeHover = false;
                    var i = 60;
                    this.Duable = true;
                    this.clickColor = '#2dafff';
                    this.getCheckWordButton = i + 's';
                    var id = setInterval(function () {
                        _this3.isClick = true;
                        i--;
                        _this3.getCheckWordButton = i + 's';
                        if (i <= 0) {
                            i = 0;
                            _this3.clickColor = '#ffffff';
                            _this3.codeHover = true;
                            _this3.isClick = false;
                            _this3.getCheckWordButton = '再次获取';
                            _this3.Duable = false;
                            clearInterval(id);
                            _this3.loadPicCode(); //60s之后重新加载图片验证码   图片验证码接口在验证正确后会自动清除当前缓存的图片验证码
                        }
                        // console.log(this.isClick, '样式改变中..');
                    }, 1000);
                }
            },
            //注册按钮点击事件
            submitClick: function submitClick() {
                var _this4 = this;

                //输入密码
                if (!this.checkPassword(this.passwordText) || this.passwordText !== '') {
                    this.passwordShow = true;
                    setTimeout(function () {
                        _this4.passwordShow = false;
                    }, 1200);
                }
                //输入验证码
                if (!this.checkWord(this.checkNumberText) || this.checkNumberText !== '') {
                    this.checkShow = true;
                    setTimeout(function () {
                        _this4.checkShow = false;
                    }, 1400);
                }
                //输入校验全部正确,点击提交
                if (this.checkPassword(this.passwordText) && this.checkWord(this.checkNumberText)) {
                    this.register();
                }
                //没有输入点击
                if (this.passwordText === '' && this.checkNumberText === '') {
                    this.checkShow = true;
                    this.phoneNumShow = true;
                    this.passwordShow = true;
                    setTimeout(function () {
                        _this4.phoneNumShow = false;
                        setTimeout(function () {
                            _this4.passwordShow = false;
                            setTimeout(function () {
                                _this4.checkShow = false;
                            }, 200);
                        }, 200);
                    }, 1000);
                }
            },
            /*//验证手机号是否注册
            isPhoneExistence: function () {
                if(this.checkPhone(this.phoneNumber) && !this.Duable){
                    let _this = this;
                    this.$http.get(this.baseUrl+'isPhoneUsed',{phoneReg:this.phoneNumber})
                        .then(function (res) {
                            if(res.data.rcd === 'A0001' || res.data.rcd === 'M0008_23'){
                                _this.phoneTitle = '手机号已注册！';
                                _this.phoneNumShow = true;
                                _this.phoneDisplay = 'block';
                                setTimeout(()=>{
                                    _this.phoneNumShow = false;
                                    _this.phoneDisplay = "none";
                                    _this.phoneTitle = '请输入正确的手机格式';
                                },1000);
                            }else if(res.data.rcd === 'A0002' && _this.checkPhone(_this.phoneNumber)){
                                //获取验证码
                                _this.isDuable = true;
                                _this.getPhoneCheckCode();
                            }
                        })
                }else{
                    this.phoneNumShow = true;
                    setTimeout(()=>{
                        this.phoneNumShow = false;
                    },1000)
                }
              },*/
            //获取验证码
            getPhoneCheckCode: function getPhoneCheckCode() {
                var _this = this;
                // console.log(this.isClick+ '获取验证码之前判断');
                if (!_this.isClick) {
                    //防止多次点击
                    _this.$http.get(_this.baseUrl + 'sendPCode', {
                        phoneReg: _this.phoneNumber,
                        imgKey: _this.timestamp,
                        imgCode: _this.picCodeText,
                        source: 'pc'
                    }).then(function (res) {
                        var _this5 = this;

                        if (res.data.rcd === 'R0001' || res.data.rcd === 'M0008_23') {
                            _this.checkWordChange();
                        }
                        if (res.data.rcd === 'M0008_24' || res.data.rcd === 'M0008_25') {
                            this.picCodeTitle = true;
                            setTimeout(function () {
                                _this5.picCodeTitle = false;
                            }, 1000);
                            // alert('图形验证码不正确！');
                        }
                    });
                }
            },
            //注册
            register: function register() {
                this.$http.post(this.baseUrl + 'reg', {
                    'user.phone': this.phoneNumber,
                    'user.password': this.passwordText,
                    codeReg: this.checkNumberText,
                    cr: this.channelCookie,
                    invitePhone: 'null',
                    im: 'mobile',
                    'user.placeChilderId': 49,
                    deviceName: '触屏版',
                    deviceType: 4,
                    way: 5
                }).then(function (res) {
                    var _this6 = this;

                    switch (res.data.rcd) {
                        case 'R0001':
                            alert('注册成功！');
                            window.sessionStorage.setItem('token', res.data.token);
                            window.sessionStorage.setItem('login', 'yes');
                            redRender();
                            this.closeLoginContainer(); //关闭弹框
                            break;
                        case 'M0008_2':
                            this.phoneDisplay = 'block';
                            this.phoneTitle = '手机号已注册！';
                            setTimeout(function () {
                                _this6.phoneDisplay = 'none';
                                _this6.phoneTitle = '请输入正确的手机格式！';
                            }, 1000);
                            break;
                        default:
                            //验证码错误
                            this.checkDisplay = 'block';
                            setTimeout(function () {
                                _this6.checkDisplay = 'none';
                            }, 1000);
                            break;
                    }
                })['catch'](function (res) {
                    alert(res + '请求失败');
                });
            },
            //点击下一步
            nextTip: function nextTip() {
                var _this7 = this;

                //验证手机号是否注册
                if (this.checkPhone(this.phoneNumber) && !this.Duable) {
                    this.savePhone = this.phoneNumber;
                    var _this = this;
                    this.$http.get(this.baseUrl + 'isPhoneUsed', { phoneReg: this.phoneNumber }).then(function (res) {
                        if (res.data.rcd === 'A0001' || res.data.rcd === 'M0008_23') {
                            this.renderStatus = false; //登录手机号页面
                            this.loginStatus = true; //手机号注册  直接进入到登录的弹框
                        } else if (res.data.rcd === 'A0002' && _this.checkPhone(_this.phoneNumber)) {
                            this.renderStatus = false; //登录手机号页面
                            this.registerTiXinStatus = true; //注册提醒弹框
                            //获取验证码
                            _this.isDuable = true;
                            _this.getPhoneCheckCode();
                        }
                    });
                } else {
                    this.phoneNumShow = true;
                    setTimeout(function () {
                        _this7.phoneNumShow = false;
                    }, 1000);
                }
            },
            //注册领取红包
            goingRegister: function goingRegister() {
                this.registerTiXinStatus = false;
                this.registerStatus = true;
                this.loadPicCode();
            },
            //登录账户
            loginAccount: function loginAccount() {
                var _this9 = this;

                if (this.checkPassword(this.passwordText)) {
                    this.$http.get(this.baseUrl + 'login', {
                        username: this.savePhone,
                        password: this.passwordText,
                        clientType: 1,
                        imei: 'mobile',
                        deviceName: '触屏版',
                        deviceType: 4
                    }).then(function (res) {
                        var _this8 = this;

                        if (res.data.rcd === 'R0001') {
                            alert('登录成功！');
                            window.sessionStorage.setItem('login', 'yes');
                            window.sessionStorage.setItem('token', res.data.token);
                            redRender(); //红包列表刷新
                            this.closeLoginContainer();
                        } else {
                            console.log(res.data);
                            this.passwordShowLogin = 'block';
                            setTimeout(function () {
                                _this8.passwordShowLogin = 'none';
                            }, 2000);
                        }
                    });
                } else {
                    this.passwordShowLogin = 'block';
                    setTimeout(function () {
                        _this9.passwordShowLogin = 'none';
                    }, 2000);
                }
            },
            //点击关闭登录背景
            closeLoginContainer: function closeLoginContainer() {
                this.loginContainer = false;
                this.renderStatus = true;
                this.loginStatus = false;
                this.registerTiXinStatus = false;
                this.registerStatus = false;
            },
            serviceAgreement: function serviceAgreement() {},
            login: function login() {}
        }
    });
    Vue.nextTick(function () {
        TanKuang.loadPicCode();
        TanKuang.submitClick();
    });
});

},{}]},{},[1]);
