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
            data:''
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
                    var endNumber = res.data.totalAmounts;
                    var endShouYi = res.data.interest;
                    var time, num, id2;
                    var id1 = setTimeout(function () {
                        time = 0;
                        id2 = setInterval(function () {
                            time += 40;
                            num = (Math.random().toFixed(8)*1000000).toFixed(2);
                            self.data.totalAmounts = num;
                            if(time>= 2000){
                                clearInterval(id2);
                                self.data.totalAmounts = endNumber;
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
                            function toThousands(num) {
                                return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.00';
                            }
                            var time, num, id2;
                            var id1 = setTimeout(function () {
                                time = 0;
                                id2 = setInterval(function () {
                                    time += 40;
                                    num = (Math.random().toFixed(8)*1000000).toFixed(2);
                                    self.data.totalAmounts = num;
                                    if(time>= 2000){
                                        clearInterval(id2);
                                        self.data.totalAmounts = endNumber;
                                    }
                                }, 10);

                            }, 10);
                        },
                        onSlideNextEnd: function (swiper) {
                            function toThousands(num) {
                                return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.00';
                            }
                            var time1, num1, id3;
                            var id5 = setTimeout(function () {
                                time1 = 0;
                                id3 = setInterval(function () {
                                    time1 += 40;
                                    num1 = (Math.random().toFixed(8)*1000000).toFixed(2);
                                    self.data.interest = num1;
                                    if(time1>= 2000){
                                        clearInterval(id3);
                                        self.data.totalAmounts = endShouYi;
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
                return parseInt((num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'))+'.00';
            }
        }
    })

