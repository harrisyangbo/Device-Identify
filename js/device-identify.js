(function(w){
    function DeviceIdentify(){
        this.browser = new Object();
        this.device = new Object();
        this.deviceWH = new Object();
        this.navigator = navigator;
    }
    DeviceIdentify.prototype.deviceInfo = function(){
        this.device.title = '设备信息';
        var sUserAgent = this.navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if(bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM){
            var u = this.navigator.userAgent;
            this.device.devName = 'phone';
            if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
                //Android phone
                this.device.deviceVersion = 'Android phone';
            }else if(u.indexOf('iPhone') > -1){
                //iPhone
                this.device.deviceVersion = 'iPhone';
            }else if(u.indexOf('Windows Phone') > -1){
                //winphone
                this.device.deviceVersion = 'winPhone';
            }else{
                //other phone
                this.device.deviceVersion = 'otherPhone';
            }
        }else if(bIsIpad){
            this.device.devName = 'pad';
            this.device.deviceVersion = 'iPad';
        }else{
            var platform = this.navigator.platform;//PC系统
            this.device.devName = 'PC';
            this.device.deviceVersion = platform;
        }
    };
    DeviceIdentify.prototype.browserInfo = function () {
        this.browser.title = '浏览器信息';
        var userAgent = this.navigator.userAgent;
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
        if(userAgent.indexOf("Opera") > -1){
            this.browser.broName = "Opera";
        }else if(userAgent.indexOf("Firefox") > -1){
            this.browser.broName = "Firefox";
        }else if(userAgent.indexOf("Chrome") > -1){
            this.browser.broName = "Chrome";
        }else if(userAgent.indexOf("Safari") > -1){
            this.browser.broName = "Safari";
        }else if(isIE){
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 7) {
                this.browser.broName = "IE7";
            } else if(fIEVersion == 8) {
                this.browser.broName = "IE8";
            } else if(fIEVersion == 9) {
                this.browser.broName = "IE9";
            } else if(fIEVersion == 10) {
                this.browser.broName = "IE10";
            } else {
                this.browser.broName = "IE6";
            }
        }else if(userAgent.indexOf("Edge") > -1 && !isIE) {
            this.browser.broName = "IE edge";
        }else if(userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1){
            this.browser.broName = "IE11";
        }else{
            this.browser.broName = "Other Browser";
        }
    };
    DeviceIdentify.prototype.widthInfo = function () {
        this.deviceWH.title = '窗口宽高';
        this.deviceWH.clientWidth = document.body.clientWidth;
        this.deviceWH.clientHeight = document.body.clientHeight;
        this.deviceWH.offsetWidth = document.body.offsetWidth;
        this.deviceWH.offsetHeight = document.body.offsetHeight;
        this.deviceWH.screenWidth = window.screen.width;
        this.deviceWH.screenHeight = window.screen.height;
        this.deviceWH.availWidth = window.screen.availWidth;
        this.deviceWH.availHeight = window.screen.availHeight;
    };
    DeviceIdentify.prototype.getInfo = function () {
        this.deviceInfo();
        this.browserInfo();
        this.widthInfo();
        return {
            device:this.device,
            browser:this.browser,
            deviceWH:this.deviceWH
        }
    };
    window.$device = function () {
        return new DeviceIdentify();
    };
}(window));