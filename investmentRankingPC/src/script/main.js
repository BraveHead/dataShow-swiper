// var app = new Vue({
//     el: '#app',
//     data: {
//         userData: [],
//         baseUrl: 'https://test.qtz360.com/api/rest/', //测试接口
//     },
//     ready: function () {
//         this.upData();
//     },
//     mounted: function () {
//         this.$nextTick(function () {
//             this.getCustomersData();
//             // this.upData();
//         });
//     },
//     methods: {
//         getCustomersData: function () {
//             this.$http.get(this.baseUrl + 'borrowToday')
//                 .then((res) => {
//                     console.log(res);
//                     if( res.data.rcd === '0000'){
//                         this.userData = res.data.data;
//                     }else{
//                         console.log('error>>>');
//                     }
//                 }, (error)=>{
//                     console.log(error);
//                 })
//         },
//         upData: function () {
//             var rank = $('.rank');
//             console.log(rank);
//             for(let i = 0; i < rank.length; i++){
//                 console.log('>>>>');
//             }
//             for(var j = 0; j < $('.get-money').length; j++){
//                 console.log('1123123');
//             }
//         }
//     },
//     filters: {
//         //金额数字的格式化
//         filterFun : function (num) {
//             return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '元';
//         },
//     },
//     update: function () {
//
//     }
// });

$(document).ready(function () {

    let baseUrl = 'https://test.qtz360.com/api/rest/';  //测试接口
    let userItemUl = $('.user-item-ul');
    function filterNumber(num) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '元';
    }
    $.getJSON(baseUrl + 'borrowToday').then((res)=>{
        console.log(res);
        if( res.rcd === '0000'){
            console.log('123123');
            for(let i = 0; i < res.data.length; i++){
                userItemUl.append('<ul class="ul-list-same ul-list-data"> ' +
                        '<li '+ 'rank=' + res.data[i].rank + ' class="rank"><img src="assets/top-1.png"/><span>' + res.data[i].name + '</span></li> ' +
                        '<li>' + res.data[i].phone + '</li> ' +
                        '<li>' + filterNumber(res.data[i].money) + '</li> ' +
                        '<li class="get-money">' + '</li> ' +
                    '</ul>');
            }
            // let rank = $('.rank');
            // console.log($('.rank').attr('rank'));
            let rank = $('.rank');
            for(let i = 0; i <rank.length;i++){
                console.log($('.rank').eq(i));
                switch (rank.eq(i).attr('rank')){
                    case '0':
                        $('.rank>img').eq(i).attr('src','assets/top-1.png').addClass('top-1');
                        $('.get-money').eq(i).html('100元');
                        continue;
                    case '1':
                        $('.rank>img').eq(i).attr('src','assets/top-2.png').addClass('top-2');
                        $('.get-money').eq(i).html('80元');
                        continue;
                    case '2':
                        $('.rank>img').eq(i).attr('src','assets/top-3.png').addClass('top-3');
                        $('.get-money').eq(i).html('50元');
                        continue;
                    case '3':
                        $('.rank>img').eq(i).hide();
                        $('.get-money').eq(i).html('30元');
                        continue;
                    case '4':
                        $('.rank>img').eq(i).hide();
                        $('.get-money').eq(i).html('20元');
                        continue;
                    default:
                        $('.rank>img').eq(i).hide();
                        $('.get-money').eq(i).html('10元');
                }
            }
        }else{
            console.log('error>>>');
        }
    }, (error)=>{
        console.log(error);
    })
});