$(function () {
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
    //2.需求分析  当页面滚动10px 让nav改变为固定定位
    /*  $(window).on('scroll', function () {
         //2.1判断scrollTop值
         if ($(this).scrollTop() > $('.nav').height()) {
             //2.2修改nav固定定位
             $('.nav').css({
                 position: "fixed",
                 top: '0',
                 // left: '10%',
              
             })
             //2.3.设置details的marginTop ，避免脱标导致顿闪
             $('.details').css({
                 marginTop: $('.nav').height() + 10 + 'px'
             })
         } else {
             //2.4.如果用户返回顶部就修改nav为静态定位
             $('.nav').css({
                 position: "static",
             });
             //2.5.设置details的marginTop为默认值
             $('.details').css({
                 marginTop: "-3px"
             })
         }
     }) */
})