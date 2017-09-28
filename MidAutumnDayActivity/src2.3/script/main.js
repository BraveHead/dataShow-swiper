// import './lib/autoSetRem'

$(document).ready(function () {
    let baseUrl = 'https://test.qtz360.com/api1.1.0/rest/';
    $('.tan-kuang-bg').css({
        'height':'100%',
        'position':'fixed',
    });
    if(window.sessionStorage.getItem('login') === 'yes'){
        $('.red-btn').attr('src','assets/red-going-get@2x.png');
    }else if(window.sessionStorage.getItem('login') === 'over'){
        $('.red-btn').attr('src','assets/red-getted@2x.png');
        redRender();
    }else{
        $('.red-btn').attr('src','assets/red-login@2x.png');

    }
    //投资规则点击弹出
    $('.touzi-rules').on('click', function () {
        $('html').css('overflow','hidden');
        $('.alert-rules').show().html(` <div class="rules-bg">
            <img src="assets/close-alert@2x.png" class="close-alert"/>
            <img src="assets/close-alert-line@2x.png" class="close-line"/>
            <P style="padding-top: 0.30rem">活动说明:</P>
            <P>1.用户点击领取按钮即可领取100元投资红包，每日限领一次。</P>
            <P>2.活动期间用户完成任意3天任务奖励100元京东购物卡，用户完成任意6天任务奖励300元京东购物卡。</P>
            <P>3.每日领取并使用则算完成当日任务。</P>
            <P>4.福利一仅限领取一次奖励。</P>
            <P>5.礼品在活动结束后，由客服联系统一发放，请保持电话畅通。</P>
            <P>6.如有疑问请咨询客服：</P>
            <P>客服热线：4007-571-918  客服QQ:3378831238</P>
        </div>`);
        //点击去除弹框
        $('.close-alert').on('click', function () {
            $('html').css('overflow','scroll');
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
            $('html').css('overflow','hidden');
            $('.alert-rules').show().html(` <div class="red-bg">
            <img src="assets/close-alert@2x.png" class="close-alert"/>
            <img src="assets/close-alert-line@2x.png" class="close-line"/>
            <P class="gxl">恭喜您！</P>
            <p>恭喜获得100元京东购物卡，活动结束后同意发放。</p>
            <img src="assets/jd-gift-100@2x.png" class="jd-gift-100"/>
            <P style="transform: scale(0.9); transform-origin:0 0;width: 110%;padding-top:0.30rem;">(礼品在活动结束后，有客服联系统一发放，请保持电话畅通)</P>
        </div>`);
            //点击去除弹框
            $('.close-alert').on('click', function () {
                $('html').css('overflow','scroll');
                $('.alert-rules').hide();
            });
        });
    };
    //点击弹出京东购物卡300
    function alertJD300() {
        $('.jd-300').on('click', function () {
            $('html').css('overflow','hidden');
            $('.alert-rules').show().html(` <div class="red-bg">
            <img src="assets/close-alert@2x.png" class="close-alert"/>
            <img src="assets/close-alert-line@2x.png" class="close-line"/>
            <P class="gxl">恭喜您！</P>
            <p>恭喜获得300元京东购物卡，活动结束后同意发放。</p>
            <img src="assets/jd-gift-300@2x.png" class="jd-gift-100"/>
            <P style="transform: scale(0.9); transform-origin:0 0;width: 110%;padding-top:0.30rem;">(礼品在活动结束后，有客服联系统一发放，请保持电话畅通)</P>
        </div>`);
            //点击去除弹框
            $('.close-alert').on('click', function () {
                $('html').css('overflow','scroll');
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
                token: window.sessionStorage.getItem('token'),
            }
        }).done((res)=>{
            let redLi = $('.red-ul>li');
            for(let i=0;i < res.data.hasUse;i++){
                redLi.eq(i).css({
                    'background':'url(assets/red-'+ (i+1) +'@2x.png) no-repeat center',
                    'background-size': '1.08rem 1.02rem',
                });
                if(i<=2){
                    $('.fl-tx').html(`已完成${res.data.hasUse}次任务，您再完成${3-res.data.hasUse}次获得神秘礼包`);
                    if(i === 2){
                        $('.jd-100').attr('src', 'assets/lw-light@2x.png');
                        alertJD100();  //点击出100弹框
                    }
                }else if(i > 3 && i<=4){
                    $('.fl-tx').html(`已完成${res.data.hasUse}次任务，您再完成${3-res.data.hasUse}次获得终极神秘礼包`);
                }else{
                    $('.fl-tx').html(`已完成6次任务，恭喜您获得终极大礼！`);
                    $('.jd-300').attr('src', 'assets/lw-light@2x.png');
                    alertJD300();  //点击出JD300弹框
                }
                $('.tz-logo').eq(i).show().attr('src','assets/touzi.png');
            }
            if(res.data.status === 1){
                $('.red-btn').attr('src','assets/red-getted@2x.png');
                window.sessionStorage.setItem('login','over');
                redLi.eq(res.data.hasUse).css({
                    'background':'url(assets/red-'+ (res.data.hasUse+1) +'@2x.png) no-repeat center',
                    'background-size': '1.08rem 1.02rem',
                });
                $('.tz-logo').eq(res.data.hasUse).show();
            }else{
                $('.red-btn').attr('src','assets/red-going-get@2x.png');
                window.sessionStorage.setItem('login','yes');
            }
        }).fail((error)=>{
            console.log(error);
        });
    }
    //点击登录
    $('.red-btn').on('click', function () {
        if(window.sessionStorage.getItem('login') === 'yes'){   //领取红包
            $('html').css('overflow','hidden');
            $('.alert-rules').show().html(`  <div class="red-bg">
                <img src="assets/close-alert@2x.png" class="close-alert get-red-close"/>
                <img src="assets/close-alert-line@2x.png" class="close-line"/>
                <P class="gxl">恭喜您！</P>
                <p>100元红包已发送至您的账户，请注意查收！</p>
                <p>红包有效期1天，35天标可用。</p>
                <img src="assets/red-100@2x.png" class="red-100-pic"/>
                <P style="font-size: 0.18rem;transform: scale(0.9); transform-origin:0 0;width: 110%;">(领取成功可在我的账户-红包中查看)</P>
            </div>`);
            //领取红包
            $.ajax({
                url: baseUrl + 'guoqingHongbao',
                method: 'POST',
                dataType: 'json',
                data: {
                    token: window.sessionStorage.getItem('token'),
                }
            }).done((res)=>{
                redRender();  //红包列表刷新
            }).fail((error)=>{
                console.log(error);
            });
            //点击去除弹框
            $('.get-red-close').on('click', function () {
                $('html').css('overflow','scroll');
                window.sessionStorage.setItem('login','over');
                $('.red-btn').attr('src','assets/red-getted@2x.png');
                $('.alert-rules').hide();
            });
        }else if(window.sessionStorage.getItem('login') === 'over'){   //去注册
            alert('今日已领取，请明天再来哦！');
            // redRender();  //红包刷新
        }else{
            TanKuang.loginContainer = true;
            TanKuang.status = true;
            $('.tan-kuang-bg').css('display','flex');
        }
    });
    let template = '';   //
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
            phoneNumber: '',     //手机号码
            phoneNumShow: false,   //号码弹框提醒判断
            passwordText: '',    //密码
            passwordShow: false,  //密码弹框提醒判断
            picCodeText: '',   //图形验证码
            picCodeTitle: false,  //图形验证码弹框提醒
            checkNumberText: '',     //验证码
            checkShow: false,   //验证码弹框提醒判断
            isClick: false,  //点击在验证码
            isDuable: false,  //多次点击验证码
            clickColor: '#ffffff',   //点击按钮的颜色,
            // baseUrl: 'https://www.qtz360.com/api2.2.2/rest/',   //正式url2.2根路径
            // baseUrl: 'https://www.qtz360.com/api2.2.3/rest/',   //正式url2.3根路径
            baseUrl: 'https://test.qtz360.com/api1.1.0/rest/',  //url测试
            phoneDisplay: 'none',
            checkDisplay: 'none',
            sn: 8932543,  //ETC渠道码
            // sn:6431961,  //测试渠道码
            channelId: '',  //渠道id
            channelCookie: '',  //渠道cookie
            timeStamp : '',
            renderStatus: true,   //登录输入手机号页面status
            loginStatus: false,   //输入登录密码界面
            registerTiXinStatus: false,   //账号未注册提醒界面
            registerStatus: false,   //注册账号页面
            savePhone: '',    //保存当前的用户登录的手机号
            codeHover: true,   //获取验证码的颜色变化
            passwordShowLogin: 'none',   //登录界面下的密码提醒隐藏
            loginContainer: true,   //整个登录容器的显示
            status: false,
        },
        mounted: function () {
            // this.$nextTick(function () {
            //     this.submitClick();
            // })
        },
        created: function () {

        },
        methods: {
            //图形验证码点击切换
            changePicCodeFun: function () {
                this.timeStamp = Math.random().toFixed(6)*1000000+1;
                this.loadPicCode();   //冲新加载图形验证码
            },
            //手机号码格式验证
            checkPhone: function (text) {
                let filter = /^1[3456789]\d{9}$/;
                if((filter.test(text))) {
                    this.phoneNumShow = false;
                }
                return (/^1[34578]\d{9}$/.test(text));
            },
            //8-20位数字和字母的密码格式验证
            checkPassword: function (text) {
                let filter = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
                if(filter.test(text)){
                    this.passwordShow = false;
                }
                return (filter.test(text));
            },
            //6位验证码的格式验证
            checkWord: function (text) {
                let filter = (/^\d{6}$/);
                if(filter.test(text)){
                    this.checkShow = false;
                }
                return filter.test(text);
            },
            //初始化加载图片验证码
            loadPicCode: function () {
                this.timestamp = Math.random().toFixed(6)*1000000+1;
                this.$http.get( this.baseUrl + 'CodeOnle?imgKey=' + this.timestamp, {'imgKey': this.timestamp}).then((res)=>{
                    $('.picCode').attr('src',this.baseUrl + 'CodeOnle?imgKey=' + this.timestamp);
                    // console.log(this.timeStamp);
                });
            },
            //获取验证码后样式改变
            checkWordChange: function () {
                if(!this.isClick){
                    this.codeHover = false;
                    let i = 60;
                    this.Duable = true;
                    this.clickColor = '#2dafff';
                    this.getCheckWordButton = i + 's';
                    let id= setInterval(()=>{
                        this.isClick = true;
                        i--;
                        this.getCheckWordButton = i + 's';
                        if(i <= 0){
                            i = 0;
                            this.clickColor = '#ffffff';
                            this.codeHover = true;
                            this.isClick = false;
                            this.getCheckWordButton = '再次获取';
                            this.Duable = false;
                            clearInterval(id);
                            this.loadPicCode();  //60s之后重新加载图片验证码   图片验证码接口在验证正确后会自动清除当前缓存的图片验证码
                        }
                        // console.log(this.isClick, '样式改变中..');
                    },1000)
                }
            },
            //注册按钮点击事件
            submitClick: function () {
                //输入密码
                if (!this.checkPassword(this.passwordText) || this.passwordText !== ''){
                    this.passwordShow = true;
                    setTimeout(() => {
                        this.passwordShow = false;
                    }, 1200)
                }
                //输入验证码
                if (!this.checkWord(this.checkNumberText) || this.checkNumberText !== ''){
                    this.checkShow = true;
                    setTimeout(() => {
                        this.checkShow = false;
                    }, 1400)
                }
                //输入校验全部正确,点击提交
                if(this.checkPassword(this.passwordText) && this.checkWord(this.checkNumberText)){
                    this.register();
                }
                //没有输入点击
                if(this.passwordText === '' && this.checkNumberText === ''){
                    this.checkShow = true;
                    this.phoneNumShow = true;
                    this.passwordShow = true;
                    setTimeout(()=>{
                        this.phoneNumShow = false;
                        setTimeout(()=>{
                            this.passwordShow = false;
                            setTimeout(()=>{
                                this.checkShow = false;
                            }, 200)
                        },200)
                    },1000)
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
            getPhoneCheckCode: function () {
                let _this = this;
                // console.log(this.isClick+ '获取验证码之前判断');
                if(!_this.isClick){   //防止多次点击
                    _this.$http.get(_this.baseUrl + 'sendPCode',{
                        phoneReg : _this.phoneNumber,
                        imgKey: _this.timestamp,
                        imgCode: _this.picCodeText,
                        source: 'pc'
                    })
                        .then(function (res) {
                            if(res.data.rcd === 'R0001' || res.data.rcd === 'M0008_23'){
                                _this.checkWordChange();
                            }
                            if(res.data.rcd === 'M0008_24' || res.data.rcd === 'M0008_25'){
                                this.picCodeTitle = true;
                                setTimeout(()=>{
                                    this.picCodeTitle = false;
                                }, 1000)
                                // alert('图形验证码不正确！');
                            }
                        })
                }
            },
            //注册
            register: function () {
                this.$http.post(this.baseUrl + 'reg', {
                    'user.phone': this.phoneNumber,
                    'user.password': this.passwordText,
                    codeReg: this.checkNumberText,
                    cr: this.channelCookie,
                    invitePhone: 'null',
                    im:'mobile',
                    'user.placeChilderId': 49,
                    deviceName: '触屏版',
                    deviceType: 4,
                    way: 5,
                }).then(function (res) {
                    switch (res.data.rcd){
                        case 'R0001':
                            alert('注册成功！');
                            window.sessionStorage.setItem('token', res.data.token);
                            window.sessionStorage.setItem('login', 'yes');
                            redRender();
                            this.closeLoginContainer();   //关闭弹框
                            break;
                        case 'M0008_2':
                            this.phoneDisplay = 'block';
                            this.phoneTitle = '手机号已注册！';
                            setTimeout(()=>{
                                this.phoneDisplay = 'none';
                                this.phoneTitle = '请输入正确的手机格式！';
                            },1000);
                            break;
                        default   :
                            //验证码错误
                            this.checkDisplay = 'block';
                            setTimeout(()=>{
                                this.checkDisplay = 'none';
                            },1000);
                            break;
                    }
                }).catch(function (res) {
                    alert(res + '请求失败');
                })
            },
            //点击下一步
            nextTip: function () {
                //验证手机号是否注册
                if(this.checkPhone(this.phoneNumber) && !this.Duable){
                    this.savePhone = this.phoneNumber;
                    let _this = this;
                    this.$http.get(this.baseUrl+'isPhoneUsed',{phoneReg:this.phoneNumber})
                        .then(function (res) {
                            if(res.data.rcd === 'A0001' || res.data.rcd === 'M0008_23'){
                                this.renderStatus = false;  //登录手机号页面
                                this.loginStatus = true;  //手机号注册  直接进入到登录的弹框

                            }else if(res.data.rcd === 'A0002' && _this.checkPhone(_this.phoneNumber)){
                                this.renderStatus = false;   //登录手机号页面
                                this.registerTiXinStatus = true;   //注册提醒弹框
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
            },
            //注册领取红包
            goingRegister: function () {
                this.registerTiXinStatus = false;
                this.registerStatus = true;
                this.loadPicCode();
            },
            //登录账户
            loginAccount: function () {
                if(this.checkPassword(this.passwordText)){
                    this.$http.get(this.baseUrl+'login',{
                        username: this.savePhone,
                        password: this.passwordText,
                        clientType: 1,
                        imei: 'mobile',
                        deviceName: '触屏版',
                        deviceType: 4,
                    })
                        .then(function (res) {
                            if(res.data.rcd ==='R0001'){
                                $('.red-btn').attr('src','assets/red-going-get@2x.png');
                                window.sessionStorage.setItem('login','yes');
                                window.sessionStorage.setItem('token', res.data.token);
                                redRender();   //红包列表刷新
                                this.closeLoginContainer();
                            }else{
                                console.log(res.data);
                                this.passwordShowLogin = 'block';
                                setTimeout(()=>{
                                    this.passwordShowLogin = 'none';
                                }, 2000)
                            }
                        })
                }else{
                    this.passwordShowLogin = 'block';
                    setTimeout(()=>{
                        this.passwordShowLogin = 'none';
                    }, 2000)
                }
            },
            //点击关闭登录背景
            closeLoginContainer: function () {
                this.loginContainer = false;
                this.renderStatus = true;
                this.loginStatus = false;
                this.registerTiXinStatus = false;
                this.registerStatus = false;
            },
            serviceAgreement: function () {

            },
            login: function () {

            }
        }
    });
    Vue.nextTick(function () {
        TanKuang.loadPicCode();
        TanKuang.submitClick();
    });
});




