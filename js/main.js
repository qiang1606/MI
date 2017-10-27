//  // 上部下拉菜单
// $(document).ready(function() {
//     var swith;
//     $(".item-children").hide();
//     $(".nav-item .link").mouseover(
//         function() {
//             swith = $(".nav-item .link").index(this);
//             $(".item-children").eq(swith).stop(false, true).show();
//          $(".item-children").eq(swith).siblings(".item-children").hide();
//         }
//     );
//     $(".item-children").mouseleave(
//         function() {
//             $(".item-children").hide();
//         }
//     );
// });
// // 法2：上部下拉菜单显示和隐藏
//  $(document).ready(function () {
//     $(".nav-item").has(".item-children").mouseover(function(){
//         $(this).children(".item-children").css("display","block");
//     }).mouseout(function(){
//         $(this).children(".item-children").css("display","none");
//     })
// })
// 法3：上部下拉菜单缓慢显示和隐藏
$(document).ready(function() {
        $(".nav-item").mousemove(function() {
            $(this).find(".item-children").slideDown("1000");
        }).mouseleave(function() {
            $(this).find(".item-children").slideUp("slow");
        })
    })
    // 购物车下拉菜单
$(document).ready(function() {
        $(".topbar-cart").mousemove(function() {
            $(this).find(".cart-menu").slideDown("1000");
        }).mouseleave(function() {
            $(this).find(".cart-menu").slideUp("slow");
        })
    })
    // // 法1：左侧下拉菜单
    // $(document).ready(function() {
    //     var swith;
    //     $(".children-col-2").hide();
    //     $(".category-item .title").mouseover(
    //         function() {
    //             swith = $(".category-item .title").index(this);
    //             $(".children-col-2").eq(swith).stop(false, true).show();
    //             $(".children-col-2").eq(swith).siblings(".children-col-2").hide();
    //         }
    //     );
    //     $(".children-col-2").mouseleave(
    //         function() {
    //             $(".children-col-2").hide();
    //         }
    //     );
    // });
    // 法2：左侧下拉菜单显示和隐藏
// 搜索框的显示
$(function () {
    $(".search-form .search-text").focus(function () {
        $(".search-form .search-hot-words").css("display","none");
        $(".search-form").find("input").css("border","1px solid #ff6700");
        $(this).siblings(".keyword-list").removeClass("hide");
    })
    $(".search-form .search-text").blur(function () {
        $(".search-form .search-hot-words").css("display","block");
        $(".search-form").find("input").css("border","1px solid #e0e0e0");
        $(this).siblings(".keyword-list").addClass("hide");
    })
})
$(document).ready(function() {
        $(".category-item").has(".children").mouseover(function() {
            $(this).children(".children").css("display", "block");
        }).mouseout(function() {
            $(this).children(".children").css("display", "none");
        })
    })
    //轮播图变化
$(document).ready(function() {
    var num = $('.ui-pager span').length;
    var i_mun = 0;
    var timer_banner = null;

    $('.xs-slider li:gt(0)').hide(); //页面加载隐藏所有的li 除了第一个

    //底下小图标点击切换
    $('.ui-pager span').click(function() {
        $(this).addClass('active')
            .siblings('span').removeClass('active');
        var i_mun1 = $('.ui-pager span').index(this);
        $('.xs-slider li').eq(i_mun1).fadeIn('slow')
            .siblings('li').fadeOut('slow');

        i_mun = i_mun1;
    });

    //左边箭头点击时切换
    $('.ui-prev').click(function() {
        if (i_mun == 0) {
            i_mun = num
        }
        //大图切换
        $('.xs-slider li').eq(i_mun - 1).fadeIn('slow')
            .siblings('li').fadeOut('slow');
        //小图切换
        $('.ui-pager span').eq(i_mun - 1).addClass('active')
            .siblings('span').removeClass('active');

        i_mun--
    });

    //右边箭头点击时切换
    $('.ui-next').click(function() {
        move_banner()

    });

    //鼠标移动到幻灯片上时 显示左右切换案例
    $('ui-wrapper').mouseover(function() {
        $('.ui-next').show();
        $('.ui-prev').show();
    });

    //鼠标离开幻灯片上时 隐藏左右切换案例
    $('.weichuangyi').mouseout(function() {
        $('.ui-next').hide();
        $('.ui-prev').hide();
    });

    //自动播放函数
    function bannerMoveks() {
        timer_banner = setInterval(function() {
            move_banner()
        }, 2000)
    };
    bannerMoveks(); //开始自动播放

    //鼠标移动到banner上时停止播放
    $('.ui-wrapper').mouseover(function() {
        clearInterval(timer_banner);
    });

    //鼠标离开 banner 开启定时播放
    $('.ui-wrapper').mouseout(function() {
        bannerMoveks();
    });


    //banner 右边点击执行函数
    function move_banner() {
        if (i_mun == num - 1) {
            i_mun = -1
        }
        //大图切换
        $('.xs-slider li').eq(i_mun + 1).fadeIn('slow')
            .siblings('li').fadeOut('slow');
        //小图切换
        $('.ui-pager span').eq(i_mun + 1).addClass('active')
            .siblings('span').removeClass('active');

        i_mun++

    }

})

// 滑动动画
// $(document).ready(function() {
//     $('.control-prev').click(function(){
//         $('#div1').animate({left:"-1240px"},1000);
//     });
//     $('.control-next').click(function(){
//         $('#div1').animate({left:"0"},1000);
//     });
//     }
// )
// 小米明星产品滑动动画
$(function() {

        var moveul = $(".home-star-goods .goods-list");
        var prev = $(".home-star-goods .control-prev");
        var next = $(".home-star-goods .control-next");
        var interval = 5000;
        var a = 1;
        play();
        // function animate({offset},2000) {
        //     div1.style.left = parseInt(div1.style.left) + offset + 'px';
        //     return;
        // }
        next.click(function() {
            // debugger;
            var num = parseInt(moveul.css("left"));
            if (num > -1240)
                moveul.animate({ "left": "-1240px", }, 400);
            prev.css("cursor", "pointer");
            prev.css("color", "#FF6700");
            next.css("cursor", "default");
            next.css("color", "#9E9E9E");
        });
        prev.click(function() {
            var num = parseInt(moveul.css("left"));
            if (num < 0)
                moveul.animate({ "left": "0" }, 400);
            next.css("cursor", "pointer");
            next.css("color", "#FF6700");
            prev.css("cursor", "default");
            prev.css("color", "#9E9E9E");
        });
        var a = true;

        function play() {
            // debugger;
            var timer = setTimeout(function() {
                if (a) {
                    next.click();
                } else {
                    prev.click();
                }
                a = !a;
                play();
            }, 5000);
        }
    })
    // 鼠标放上去浮起效果
$(function() {
        $(".brick-item").mouseover(function() {
            $(this).find(".review-wrapper").css({
                "height": "80px ",
                "opacity": 1
            });
            $(this).addClass("brick-item-active");
        });
        $(".brick-item").mouseout(function() {
            $(this).find(".review-wrapper").css({
                "height": "0",
                "opacity": 0
            });
            $(this).removeClass("brick-item-active");
        });
    })
    // 搭配的菜单切换
$(function() {
        // 搭配
        $("#match .tab-list li").mouseover(function() {
                $(this).addClass("tab-active").siblings("li").removeClass("tab-active");
                var $index = $(this).index(".tab-list li");
                // eq()中是变量时没有引号，，，eq是查找目标索引元素，，index查找元素索引值
                $("#match #match-content ul").eq($index).removeClass("hide").siblings("ul").addClass("hide");

            })
            // 配件
        $("#accessories .tab-list li").mouseover(function() {
                $(this).addClass("tab-active").siblings("li").removeClass("tab-active");
                var $index = $(this).index("#accessories .tab-list li");
                // eq()中是变量时没有引号，，，eq是查找目标索引元素，，index查找元素索引值
                $("#accessories #match-content ul").eq($index).removeClass("hide").siblings("ul").addClass("hide");

            })
            // 周边
        $("#around .tab-list li").mouseover(function() {
            $(this).addClass("tab-active").siblings("li").removeClass("tab-active");
            var $index = $(this).index("#around .tab-list li");
            // eq()中是变量时没有引号，，，eq是查找目标索引元素，，index查找元素索引值
            $("#around #around-content ul").eq($index).removeClass("hide").siblings("ul").addClass("hide");

        })
    })
    // 为你推荐滑动动画
$(function() {

        var moveul = $(".xm-recommend ul");
        var prev = $("#recommend .control-prev");
        var next = $("#recommend .control-next");
        next.click(function() {
            var num = parseInt(moveul.css("margin-left"));
            if (num > -1240)
                moveul.animate({ "margin-left": "-1240px", }, 400);
            prev.css("cursor", "pointer");
            prev.css("color", "#FF6700");
            next.css("cursor", "default");
            next.css("color", "#9E9E9E");
            return false;
        })
        prev.click(function() {
            var num = parseInt(moveul.css("margin-left"));
            if (num < 0)
                moveul.animate({ "margin-left": "0" }, 400);
            next.css("cursor", "pointer");
            next.css("color", "#FF6700");
            prev.css("cursor", "default");
            prev.css("color", "#9E9E9E");
            return false;
        })
    })
    // 热评商品鼠标放上去浮起效果
$(function() {
        $(".review-item").mouseover(function() {
            $(this).addClass("review-item-active");
        });
        $(".review-item").mouseout(function() {
            $(this).removeClass("review-item-active");
        });
    })
    // 内容区的左右鼠标移上背景稍微显示
$(function() {
    $("#content .content-item").mouseover(function() {
        $(this).find(".xm-controls .control").css("opacity", "1").mouseover(function() {
            $(this).css("background-color", "rgba(66,66,66,0.6)");
        }).mouseout(function() {
            $(this).css("background-color", "rgba(66,66,66,0.2)");
        })
    }).mouseout(function() {
        $(this).find(".xm-controls .control").css("opacity", "0");
    })
})

// 内容区轮播，，，?还有bug。，，会超出范围
$(function() {
        // 获取索引
        var index = 0;
        $("#content .control-next").click(function() {
            var move = $(this).parent().siblings(".xm-carousel-wrapper").find(".item-list");
            // ul宽度
            var width = parseInt(move.css("width"));
            var mleft = parseInt(move.css("margin-left"));
            // 图片个数
            var size = move.children("li").index() + 1;

            // 每次移动的距离
            var num = width / size;
            mleft = mleft - num;
            // 控制左右的鼠标小手显示隐藏
            if ((-mleft) > 0) {
                $(this).siblings("a").removeClass("control-disabled");
            }
            if ((-mleft) >= (width - num)) {
                $(this).addClass("control-disabled");
            }
            // 利用倍数关系算下标圆圈索引
            index = -mleft / num;
            if ((-mleft) >= (width)) {
                return;
            }

            move.animate({ "margin-left": mleft }, 200);
            $(this).parent().siblings(".xm-pagers-wrapper").find("ul li").eq(index).addClass("pager-active").siblings("li").removeClass("pager-active");
        })
        $("#content .control-prev").click(function() {
            var move = $(this).parent().siblings(".xm-carousel-wrapper").find(".item-list");
            // ul宽度
            var width = parseInt(move.css("width"));
            var mleft = parseInt(move.css("margin-left"));
            // 图片个数
            var size = move.children("li").index() + 1;
            // 每次移动的距离
            var num = width / size;
            // 控制左右的鼠标小手显示隐藏
            if ((-mleft) > 0) {
                $(this).siblings("a").removeClass("control-disabled");
            }
            if ((-mleft) <= 0) {
                $(this).addClass("control-disabled");
            }
            mleft = mleft + num;
            // 利用倍数关系算下标圆圈索引
            index = -mleft / num;
            if ((-mleft) <= -num) {
                return;
            }

            move.animate({ "margin-left": mleft }, 200);
            $(this).parent().siblings(".xm-pagers-wrapper").find("ul li").eq(index).addClass("pager-active").siblings("li").removeClass("pager-active");
        })
    })
    // 内容区鼠标放上去浮起效果
$(function() {
    $(".content-item").mouseover(function() {
        $(this).addClass("review-item-active");
    });
    $(".content-item").mouseout(function() {
        $(this).removeClass("review-item-active");
    });
})
// 内容区鼠标放上去浮起效果
$(function() {
    $(".J_xm-recommend-list").mouseover(function() {
        $(this).addClass("J_xm-recommend-list-active");
    });
    $(".J_xm-recommend-list").mouseout(function() {
        $(this).removeClass("J_xm-recommend-list-active");
    });
})
// 视频播放按钮特效
$(function () {
    $(".video-list a img").mouseover(function () {
        $(this).siblings("span").addClass("play-active");
    }).mouseout(function () {
        $(this).siblings("span").removeClass("play-active");
    })
    $(".video-list a span").mouseover(function () {
        $(this).addClass("play-active");
    }).mouseout(function () {
        $(this).removeClass("play-active");
    })
})
// 视频区鼠标放上去浮起效果
$(function() {
    $(".video-item").mouseover(function() {
        $(this).addClass("review-item-active");
    }).mouseout(function() {
        $(this).removeClass("review-item-active");
    });
})