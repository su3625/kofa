$(document).ready(function(){

    //gnb에 마우스 오버시 sub올메뉴 나타남
    $(".gnb>li").mouseenter(function(){
        $(".gnb_depth1").slideDown();
    });
    $(".gnb_depth1").mouseleave(function(){
        $(this).hide();
    });

    $(".archive_list li").eq(0).mouseenter(function(){
        $(".archive_img a").hide();
        $(".archive_img a").eq(0).show();
    });
    $(".archive_list li").eq(1).mouseenter(function(){
        $(".archive_img a").hide();
        $(".archive_img a").eq(1).show();
    });
    $(".archive_list li").eq(2).mouseenter(function(){
        $(".archive_img a").hide();
        $(".archive_img a").eq(2).show();
    });


    //메뉴아이콘 클릭시 모바일메뉴나타남
    $(".menu_icon").click(function(){
        $(".m_menu").show();
    });
    //close아이콘 클릭시 모바일메뉴닫기
    $(".close").click(function(){
        $(".m_menu").hide();
    });

    //m_gnb누르면 m_sub펼쳐지기+아이콘 회전
    $(".m_gnb_wrap").eq(0).click(function(){
        $(".sub1").slideToggle();
        $(".down1").toggleClass("icon_rotate");
    });
    $(".m_gnb_wrap").eq(1).click(function(){
        $(".sub2").slideToggle();
        $(".down2").toggleClass("icon_rotate");
    });
    $(".m_gnb_wrap").eq(2).click(function(){
        $(".sub3").slideToggle();
        $(".down3").toggleClass("icon_rotate");
    });
    $(".m_gnb_wrap").eq(3).click(function(){
        $(".sub4").slideToggle();
        $(".down4").toggleClass("icon_rotate");
    });
    $(".m_gnb_wrap").eq(4).click(function(){
        $(".sub5").slideToggle();
        $(".down5").toggleClass("icon_rotate");
    });
    






	// swiper_showcase 슬라이드
	const swiper_showcase = new Swiper('.swiper_showcase', {
        // Optional parameters
        loop: true,

        slidesPerView: 1,         // 다단 배열
        spaceBetween: 0,         // 다단 갭
  
        //자동 실행
	    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },                        
      
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
      
        // Navigation arrows 
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // slideToClickedSlide: true,	//클릭 시 해당 슬라이드 위치로 이동
		// loopedSlides: swiperTopNum.length //loop 시 파라미터 duplicate 개수
      
    });

    // swiper_thumb 슬라이드 
	const swiper_thumb = new Swiper('.swiper_thumb', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,         // 다단 배열
        spaceBetween: 0,         // 다단 갭
        //반응형
        breakpoints: {
            768: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
            1024: {
            slidesPerView: 1,
            spaceBetween: 100,
            },
            1300: {
            slidesPerView: 2,
            spaceBetween: 100,
            },
            1620: {
            slidesPerView: 2,
            spaceBetween: 100,
            },
        },
        
          
        //자동 실행
	    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        }, 
        
        thumbs: {
            swiper: swiper_showcase,
        },
    });

   



    // swiper_main 슬라이드
	const swiper_main = new Swiper('.swiper_main', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,         // 다단 배열
        spaceBetween: 0,         // 다단 갭

        //자동 실행
	    autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // Swiper 슬라이드
	const swiper_sub = new Swiper('.swiper_sub', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,         // 다단 배열
        spaceBetween: 10,         // 다단 갭

        //자동 실행
	    autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }, 

        thumbs:{
            swiper: swiper_main 
        }
    });

    //sub1의 마우스오버시 레이어팝업
 

});