$(function () {
    //(1)是给触摸轮播图注册animate
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 3000,
    });
    //1.创建一个定时器 发送ajax请求
    function setBigPic() {
        $.ajax({
            type: 'get',
            url: 'https://autumnfish.cn/api/cover/random',
            success: function (backData) {
                //console.log(backData);
                if (backData.code == 200) {
                    //2.正确的拿到随机大图
                    //设置给body作为背景图. 
                    $('body').css('background', 'url(' + backData.url + ') no-repeat');
                    $('body').css('background-size', 'cover');
                }
            }
        });
    }
    // 一进来调用一下
    setBigPic();
    // 每隔半小时换一张. 
    setInterval(setBigPic, 1000 * 60 * 30);
    //2.创建一个定时器来控制背景图片隐藏
    setInterval(function () {
        $('#loading').hide();
        $('.main').show();
    }, 3000);

    $('.music').on('click', function () {
        $('.current').show();
        $('.main').hide();
    })
    $('.x').on('click', function () {
        $('.current').hide();
        $('.main').show();

    })
    /* 1.2 发送天气天气请求
     * 请求地址：http://wthrcdn.etouch.cn/weather_mini
     * 请求方法：get
     * 请求参数：city
     * 示例： http://wthrcdn.etouch.cn/weather_mini?city=深圳
     */
    /*
       获取当前的地址
        var ip = "124.127.108.133";
                    var url = "http://ip.taobao.com/service/getIpInfo.php?ip=" + ip;
                    $.getJSON(url, function (json) {
                        alert("您所在的城市是：" + json.data.area + json.data.region);
                    });
         */
});