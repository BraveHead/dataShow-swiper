/**
 * Created by Yy on 2017/7/12.
 */


    //数字格式化
    function toThousands(num) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.00';
    }
    var autoSetRem = (function(doc, win) {
        var docEl = doc.documentElement,
            done = false,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            set = function(paper) {
                if(paper==null){
                    paper=375;
                }
                var clientWidth = docEl.clientWidth || win.innerWidth || screen.width;
                if(clientWidth<=320){
                    clientWidth = 320;
                }
                console.log(clientWidth);
                if (!clientWidth) return;
                docEl.style.fontSize = 100 * (clientWidth / paper) + 'px';
                console.log(100 * (clientWidth / paper) + 'px');
                done = true;
                return done;
            };
        return {
            set:set
        };
        //AbortifbrowserdoesnotsupportaddEventListener
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, set, false);
        doc.addEventListener('DOMContentLoaded', set, false);
    })(document, window);

    autoSetRem.set(375);

    var app = new Vue({
        el: '#app',
        data: {
            data:'',
            times: ''
        },
        mounted: function () {
            var self = this;

            $.ajax({
                url: 'https://test.qtz360.com/api/rest/summary',
                method: 'GET',
                dataType: 'json'
            }).then(function (res) {
                if(res.code === '0000'){
                    self.data = res.data;
                    var endNumber = res.data.totalAmounts,
                        endShouYi = res.data.interest,
                        todayMoney = res.data.today,
                        yesterdayMoney = res.data.yesterday,
                        monthMoney = res.data.month,
                        upMonthMoney = res.data.upMonth,
                        totalProjects = res.data.totalProjects,  //已发布的借款项目数量
                        todayLoanAccount = res.data.todayLoanAccount,  //今日放款金额
                        shop = res.data.shop,   //门店数量
                        borrower = res.data.borrower;   //累计借款人

                    var time, num, id2;
                    setTimeout(function () {
                        time = 0;
                        id2 = setInterval(function () {
                            time += 40;
                            num = (Math.random().toFixed(8) * 100000).toFixed(2);
                            self.data.totalAmounts = num;
                            self.data.today = num;
                            self.data.yesterday = num;
                            self.data.month = num;
                            self.data.upMonth = num;
                            if (time >= 2000) {
                                clearInterval(id2);
                                self.data.totalAmounts = endNumber;
                                self.data.today = todayMoney;
                                self.data.yesterday = yesterdayMoney;
                                self.data.month = monthMoney;
                                self.data.upMonth = upMonthMoney;
                            }
                        }, 10);
                    }, 200);
                    //swiper
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        effect: 'coverflow',
                        grabCursor: true,
                        centeredSlides: true,
                        slidesPerView: 'auto',
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1
                        },
                        onSlidePrevEnd: function(swiper){
                            var time, num, id2;
                            setTimeout(function () {
                                time = 0;
                                id2 = setInterval(function () {
                                    time += 40;
                                    num = (Math.random().toFixed(8)*1000000).toFixed(2);
                                    self.data.totalAmounts = num;
                                    self.data.today = num;
                                    self.data.yesterday = num;
                                    self.data.month = num;
                                    self.data.upMonth = num;
                                    if (time >= 2000) {
                                        clearInterval(id2);
                                        self.data.totalAmounts = endNumber;
                                        self.data.today = todayMoney;
                                        self.data.yesterday = yesterdayMoney;
                                        self.data.month = monthMoney;
                                        self.data.upMonth = upMonthMoney;
                                    }
                                }, 10);
                            }, 10);
                        },
                        onSlideNextEnd: function (swiper) {
                            var time1, num1, id3, projectNum, shopNum, borrowerNum;
                            setTimeout(function () {
                                time1 = 0;
                                id3 = setInterval(function () {
                                    time1++;
                                    num1 = (Math.random().toFixed(8)*1000000).toFixed(2);
                                    projectNum = parseInt(Math.random().toFixed(3)*1000);
                                    shopNum = parseInt(Math.random().toFixed(2)*100);
                                    borrowerNum = parseInt(Math.random().toFixed(2)*100);
                                    self.data.interest = num1;
                                    self.data.totalProjects = projectNum;
                                    self.data.todayLoanAccount = num1;
                                    self.data.shop = shopNum;
                                    self.data.borrower = borrowerNum;
                                    if(time1>= 50){
                                        clearInterval(id3);
                                        self.data.interest = endShouYi;
                                        self.data.totalProjects = totalProjects;
                                        self.data.todayLoanAccount = todayLoanAccount;
                                        self.data.shop = shop;
                                        self.data.borrower = borrower;
                                    }
                                }, 10);
                            }, 10);
                        }
                    });
                }
            }, function (error) {
                console.log(error);
            })
        },
        filters: {
            filterFun : function (num) {
                return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.00';
            },
            filterNOToFixed: function (num) {
                return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
            },
            filterTime: function () {
                var item = new Date();
                var y = item.getFullYear(),
                    m = item.getMonth() + 1,
                    d = item.getDay(),
                    h = item.getHours(),
                    mit = item.getMinutes(),
                    sec = item.getSeconds();
                function addZero(num) {
                    if(num < 10){
                        num = '0' + num;
                    }
                    return num;
                }
                return addZero(y)+ '-' + addZero(m) + '-' + addZero(d)  + ' ' + addZero(h) +'-' + addZero(mit) + '-' + addZero(sec);
            }
        }
    })

