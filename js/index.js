$(function(){
	
	$('#DIY_banner').click(function(){
		$('#mask').show();
		$('#roomDefinition').slideDown();
	});

	var myBanner = new Swiper ('#banner .swiper-container', {
		autoplay: {
			delay: 6000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
		},
		/*speed:1000,
		 loop:true,*/
		/*pagination: {
		 el: '#banner .swiper-pagination',
		 clickable: true,
		 },
		 navigation: {
		 nextEl: '#banner .swiper-button-next',
		 prevEl: '#banner .swiper-button-prev',
		 },*/
		on:{
			init: function(){
				swiperAnimateCache(this); //隐藏动画元素
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function(){
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			}
		}
	})
	myBanner.el.onmouseover = function(){
	  myBanner.autoplay.stop();
	}
	myBanner.el.onmouseout = function(){
	  myBanner.autoplay.start();
	}
	/*臻选产品*/
	var myProduct = new Swiper('.am-full .swiper-container', {
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 10,
	    navigation: {
			nextEl: '.am-full .swiper-button-next',
			prevEl: '.am-full .swiper-button-prev',
		},
		on:{
			init:function(swiper){
		      slide=this.slides.eq(1);
			    slide.addClass('ani-slide');
		    },
			transitionStart: function(){
			    for(i=0;i<this.slides.length;i++){
			    	slide=this.slides.eq(i);
			        slide.removeClass('ani-slide');
				}
		    },
			transitionEnd: function(){
				slide=this.slides.eq(this.activeIndex);
			    slide.addClass('ani-slide');
				
		    },
		}
    });
    document.querySelector('.jj_product_li1').addEventListener('click', function (e) {
      e.preventDefault();
      myProduct.slideTo(5, 0);
    });
    document.querySelector('.jj_product_li2').addEventListener('click', function (e) {
      e.preventDefault();
      myProduct.slideTo(1, 0);
    });
    document.querySelector('.jj_product_li3').addEventListener('click', function (e) {
      e.preventDefault();
      myProduct.slideTo(2, 0);
    });
    document.querySelector('.jj_product_li4').addEventListener('click', function (e) {
      e.preventDefault();
      myProduct.slideTo(3, 0);
    });
    document.querySelector('.jj_product_li5').addEventListener('click', function (e) {
      e.preventDefault();
      myProduct.slideTo(4, 0);
    });
    
    /*精选品牌*/
    var myBrand = new Swiper('.brand .swiper-container', {
      slidesPerView: 5,
      autoplay:true,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.brand .swiper-pagination',
        clickable: true,
      },
    });
    
   /* 体验中心*/
	var galleryTop = new Swiper('.gallery-top', {
		autoplay: {
			delay: 7000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		speed:1000,
        spaceBetween: 10,
        loop:true,
        pagination: {
      	  el: '.my-pagination-ul',
		  clickable: true,
      	  renderBullet: function (index, className) {
		  switch (index) {
		    case 0: name='整体家装区';break;
		    case 1: name='全屋定制区';break;
		    case 2: name='家居精品区';break;
		    case 3: name='休闲娱乐区';break;
		    default: name='';
		  }
		   return '<li class="' + className + '"><i class="i'+ ( index + 1 ) +'"></i>' + name + '</li>';
		}
      }
    });
    
 });