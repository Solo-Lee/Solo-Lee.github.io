$(document).ready(function () {
    //首先将#back-to-top隐藏
    $(".back-to-top").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $('.main-content').scroll(function () {
            if ($('.main-content').scrollTop() > 50) {
                $(".back-to-top").fadeIn(1500);
            } else {
                $(".back-to-top").fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $(".back-to-top").click(function () {
            $('.main-content').animate({
                    scrollTop: 0
                },
                1000);
            return false;
        });
    });

    // 显示百分比
    $('.main-content').on('scroll', function () {
        var scrollTop = $('.main-content').scrollTop();
        var docHeight = $('#details').height();
        var winHeight = $('.main-content').height();
        var contentMath = (docHeight > winHeight) ? (docHeight - winHeight) : ($(document).height() - winHeight);
        var scrollPercent = (scrollTop) / (contentMath);
        var scrollPercentRounded = Math.round(scrollPercent * 100);
        var scrollPercentMaxed = (scrollPercentRounded > 100) ? 100 : scrollPercentRounded;
        $('#scrollpercent>span').html(scrollPercentMaxed);});
});