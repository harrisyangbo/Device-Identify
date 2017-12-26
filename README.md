# Device-Identify
一句代码获取设备及浏览器信息

引入device-identify.js文件或将此文件代码拷贝到你的项目

调用：

$device().getInfo() 
这句代码返回一个object 里面包含你需要的浏览器信息


//返回数据详解
device:设备。包含设备名称PC/Phone/Pad)和系统
browser:包含broName(浏览器名称)
deviceWH:{
    clientWidth:网页可见区域宽
    clientHeight:网页可见区域高
    offsetWidth:网页可见区域宽(包含边线)
    offsetHeight:网页可见区域高(包含边线)
    screenWidth:屏幕物理分辨率的宽
    screenHeight:屏幕物理分辨率的高
    availWidth:屏幕可用工作区宽
    availHeight:屏幕可用工作区高
}
