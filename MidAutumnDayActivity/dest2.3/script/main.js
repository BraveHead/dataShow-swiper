!function e(t,s,o){function i(r,c){if(!s[r]){if(!t[r]){var a="function"==typeof require&&require;if(!c&&a)return a(r,!0);if(n)return n(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var l=s[r]={exports:{}};t[r][0].call(l.exports,function(e){var s=t[r][1][e];return i(s||e)},l,l.exports,e,t,s,o)}return s[r].exports}for(var n="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}({1:[function(e,t,s){"use strict";$(document).ready(function(){"yes"===window.sessionStorage.getItem("login")?$(".red-btn").attr("src","assets/red-going-get@2x.png"):"over"===window.sessionStorage.getItem("login")?$(".red-btn").attr("src","assets/red-getted@2x.png"):$(".red-btn").attr("src","assets/red-login@2x.png"),$(".touzi-rules").on("click",function(){$("body").css("overflow","hidden"),$(".alert-rules").show().html(' <div class="rules-bg">\n            <img src="assets/close-alert@2x.png" class="close-alert"/>\n            <img src="assets/close-alert-line@2x.png" class="close-line"/>\n            <P style="padding-top: 0.30rem">活动说明:</P>\n            <P>1.用户点击领取按钮即可领取100元投资红包，每日限领一次。</P>\n            <P>2.活动期间用户完成任意3天任务奖励100元京东购物卡，用户完成任意6天任务奖励300元京东购物卡。</P>\n            <P>3.每日领取并使用则算完成当日任务。</P>\n            <P>4.福利一仅限领取一次奖励。</P>\n            <P>5.礼品在活动结束后，由客服联系统一发放，请保持电话畅通。</P>\n            <P>6.如有疑问请咨询客服：</P>\n            <P>客服热线：4007-571-918  客服QQ:3378831238</P>\n        </div>'),$(".close-alert").on("click",function(){$("body").css("overflow","scroll"),$(".alert-rules").hide()})}),$(".jd-100").on("click",function(){$("body").css("overflow","hidden"),$(".alert-rules").show().html(' <div class="red-bg">\n            <img src="assets/close-alert@2x.png" class="close-alert"/>\n            <img src="assets/close-alert-line@2x.png" class="close-line"/>\n            <P class="gxl">恭喜您！</P>\n            <p>恭喜获得100元京东购物卡，活动结束后同意发放。</p>\n            <img src="assets/jd-gift-100@2x.png" class="jd-gift-100"/>\n            <P style="transform: scale(0.9); transform-origin:0 0;width: 110%;padding-top:0.30rem;">(礼品在活动结束后，有客服联系统一发放，请保持电话畅通)</P>\n        </div>'),$(".close-alert").on("click",function(){$("body").css("overflow","scroll"),$(".alert-rules").hide()})}),$(".jd-300").on("click",function(){$("body").css("overflow","hidden"),$(".alert-rules").show().html(' <div class="red-bg">\n            <img src="assets/close-alert@2x.png" class="close-alert"/>\n            <img src="assets/close-alert-line@2x.png" class="close-line"/>\n            <P class="gxl">恭喜您！</P>\n            <p>恭喜获得300元京东购物卡，活动结束后同意发放。</p>\n            <img src="assets/jd-gift-300@2x.png" class="jd-gift-100"/>\n            <P style="transform: scale(0.9); transform-origin:0 0;width: 110%;padding-top:0.30rem;">(礼品在活动结束后，有客服联系统一发放，请保持电话畅通)</P>\n        </div>'),$(".close-alert").on("click",function(){$("body").css("overflow","scroll"),$(".alert-rules").hide()})}),$(".red-btn").on("click",function(){"yes"===window.sessionStorage.getItem("login")?($("body").css("overflow","hidden"),$(".alert-rules").show().html('  <div class="red-bg">\n                <img src="assets/close-alert@2x.png" class="close-alert"/>\n                <img src="assets/close-alert-line@2x.png" class="close-line"/>\n                <P class="gxl">恭喜您！</P>\n                <p>100元红包已发送至您的账户，请注意查收！</p>\n                <p>红包有效期1天，35天标可用。</p>\n                <img src="assets/red-100@2x.png" class="red-100-pic"/>\n                <P style="font-size: 0.18rem;transform: scale(0.9); transform-origin:0 0;width: 110%;">(领取成功可在我的账户-红包中查看)</P>\n            </div>'),$(".close-alert").on("click",function(){$("body").css("overflow","scroll"),window.sessionStorage.setItem("login","over"),$(".red-btn").attr("src","assets/red-getted@2x.png"),$(".alert-rules").hide()})):"over"===window.sessionStorage.getItem("login")?alert("今日已领取，请明天再来哦！"):(e.loginContainer=!0,e.status=!0,$(".tan-kuang-bg").show())});Vue.http.options.emulateJSON=!0;var e=new Vue({el:"#tan-kuang",data:{button:!1,isUp:!1,overflow:"hidden",phoneTitle:"请输入正确的手机号",passwordTitle:"请输入正确格式的密码",checkWordTitle:"请输入正确的验证码",checkPicCode:"请输入正确的图形验证码",getCheckWordButton:"获取验证码",phoneNumber:"",phoneNumShow:!1,passwordText:"",passwordShow:!1,picCodeText:"",picCodeTitle:!1,checkNumberText:"",checkShow:!1,isClick:!1,isDuable:!1,clickColor:"#ffffff",baseUrl:"https://test.qtz360.com/api1.1.0/rest/",phoneDisplay:"none",checkDisplay:"none",sn:8932543,channelId:"",channelCookie:"",timeStamp:"",renderStatus:!0,loginStatus:!1,registerTiXinStatus:!1,registerStatus:!1,savePhone:"",codeHover:!0,passwordShowLogin:"none",loginContainer:!0,status:!1},mounted:function(){},created:function(){},methods:{changePicCodeFun:function(){this.timeStamp=1e6*Math.random().toFixed(6)+1,this.loadPicCode()},checkPhone:function(e){return/^1[3456789]\d{9}$/.test(e)&&(this.phoneNumShow=!1),/^1[34578]\d{9}$/.test(e)},checkPassword:function(e){var t=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;return t.test(e)&&(this.passwordShow=!1),t.test(e)},checkWord:function(e){var t=/^\d{6}$/;return t.test(e)&&(this.checkShow=!1),t.test(e)},loadPicCode:function(){var e=this;this.timestamp=1e6*Math.random().toFixed(6)+1,this.$http.get(this.baseUrl+"CodeOnle?imgKey="+this.timestamp,{imgKey:this.timestamp}).then(function(t){$(".picCode").attr("src",e.baseUrl+"CodeOnle?imgKey="+e.timestamp)})},checkWordChange:function(){var e=this;if(!this.isClick){this.codeHover=!1;var t=60;this.Duable=!0,this.clickColor="#2dafff",this.getCheckWordButton=t+"s";var s=setInterval(function(){e.isClick=!0,t--,e.getCheckWordButton=t+"s",t<=0&&(t=0,e.clickColor="#ffffff",e.codeHover=!0,e.isClick=!1,e.getCheckWordButton="再次获取",e.Duable=!1,clearInterval(s),e.loadPicCode())},1e3)}},submitClick:function(){var e=this;this.checkPassword(this.passwordText)&&""===this.passwordText||(this.passwordShow=!0,setTimeout(function(){e.passwordShow=!1},1200)),this.checkWord(this.checkNumberText)&&""===this.checkNumberText||(this.checkShow=!0,setTimeout(function(){e.checkShow=!1},1400)),this.checkPassword(this.passwordText)&&this.checkWord(this.checkNumberText)&&this.register(),""===this.passwordText&&""===this.checkNumberText&&(this.checkShow=!0,this.phoneNumShow=!0,this.passwordShow=!0,setTimeout(function(){e.phoneNumShow=!1,setTimeout(function(){e.passwordShow=!1,setTimeout(function(){e.checkShow=!1},200)},200)},1e3))},getPhoneCheckCode:function(){var e=this;e.isClick||e.$http.get(e.baseUrl+"sendPCode",{phoneReg:e.phoneNumber,imgKey:e.timestamp,imgCode:e.picCodeText,source:"pc"}).then(function(t){var s=this;"R0001"!==t.data.rcd&&"M0008_23"!==t.data.rcd||e.checkWordChange(),"M0008_24"!==t.data.rcd&&"M0008_25"!==t.data.rcd||(this.picCodeTitle=!0,setTimeout(function(){s.picCodeTitle=!1},1e3))})},register:function(){this.$http.post(this.baseUrl+"reg",{"user.phone":this.phoneNumber,"user.password":this.passwordText,codeReg:this.checkNumberText,cr:this.channelCookie,invitePhone:"null",im:"mobile","user.placeChilderId":49,deviceName:"触屏版",deviceType:4,way:5}).then(function(e){var t=this;switch(e.data.rcd){case"R0001":alert("注册成功！");break;case"M0008_2":this.phoneDisplay="block",this.phoneTitle="手机号已注册！",setTimeout(function(){t.phoneDisplay="none",t.phoneTitle="请输入正确的手机格式！"},1e3);break;default:this.checkDisplay="block",setTimeout(function(){t.checkDisplay="none"},1e3)}}).catch(function(e){alert(e+"请求失败")})},nextTip:function(){var e=this;if(this.checkPhone(this.phoneNumber)&&!this.Duable){this.savePhone=this.phoneNumber;var t=this;this.$http.get(this.baseUrl+"isPhoneUsed",{phoneReg:this.phoneNumber}).then(function(e){"A0001"===e.data.rcd||"M0008_23"===e.data.rcd?(this.renderStatus=!1,this.loginStatus=!0):"A0002"===e.data.rcd&&t.checkPhone(t.phoneNumber)&&(this.renderStatus=!1,this.registerTiXinStatus=!0,t.isDuable=!0,t.getPhoneCheckCode())})}else this.phoneNumShow=!0,setTimeout(function(){e.phoneNumShow=!1},1e3)},goingRegister:function(){this.registerTiXinStatus=!1,this.registerStatus=!0,this.loadPicCode()},loginAccount:function(){var e=this;this.checkPassword(this.passwordText)?this.$http.get(this.baseUrl+"login",{username:this.savePhone,password:this.passwordText,clientType:1,imei:"mobile",deviceName:"触屏版",deviceType:4}).then(function(e){var t=this;"R0001"===e.data.rcd?($(".red-btn").attr("src","assets/red-going-get@2x.png"),window.sessionStorage.setItem("login","yes"),this.closeLoginContainer()):(console.log(e.data),this.passwordShowLogin="block",setTimeout(function(){t.passwordShowLogin="none"},2e3))}):(this.passwordShowLogin="block",setTimeout(function(){e.passwordShowLogin="none"},2e3))},closeLoginContainer:function(){this.loginContainer=!1,this.renderStatus=!0,this.loginStatus=!1,this.registerTiXinStatus=!1,this.registerStatus=!1},serviceAgreement:function(){},login:function(){}}});Vue.nextTick(function(){e.loadPicCode(),e.submitClick()})})},{}]},{},[1]);