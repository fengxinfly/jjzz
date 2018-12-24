$(function(){
		
	//回到顶部
	$('.toTop').click(function(){
		//$(document).scrollTop(0);瞬间回到顶部
		$("html,body").animate({"scrollTop":0},800);//1秒回到顶部
	});
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop>400){
			$('.toTop').slideDown();
		}else{
			$('.toTop').slideUp();
		}
	});
	
	/*APP 下载*/
	$('#appDown').hover(function(){
		$('#appDown .appDownQRcode').stop().slideDown();
		$(this).css('background','#424242');
	},function(){
		$('#appDown .appDownQRcode').stop().slideUp();
		$(this).css('background','#333');
	});

	$('.live_right_count_li1 span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	/*个人中心 下拉*/
	
	$('.am-hoverDown').hover(function(){
		$('.am-hoverDown-caption').stop().slideDown();
		$(this).find('.am-hoverDown-title span').removeClass().addClass('am-icon-angle-up');
		$(this).css('background','#424242');
	},function(){
		$('.am-hoverDown-caption').stop().slideUp();
		$(this).find('.am-hoverDown-title span').removeClass().addClass('am-icon-angle-down');
		$(this).css('background','#333');
	});
	
	
		
		
		var navA = $('.nav-child ul li a');
		navA.each(function(){
			var aWidth = $(this).outerWidth();
			$(this).find('i').css('marginLeft',(aWidth-40)/2);
		});
		//var oWidth = $(window).width();
		/*$('.nav-child ul').width($('.nav-child ul li').outerWidth()*$('.nav-child ul li').size());*/
		
		$('.nav-child').css('display','none');
		
		$('.jj-dropdown').hover(function(){
			$(this).find('.nav-child').stop().show();
		},function(){
			$(this).find('.nav-child').stop().hide();
		});
		
		
		$('.otherRoom span').click(function(){
			if(!$(this).hasClass('active')){
				$(this).addClass('active');
				$(this).find('input').val('1');
			}else{
				$(this).removeClass('active');
				$(this).find('input').val('0');
			}
		});
		
		$('.A_package span').click(function(){
			var _index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			if( _index ==0 ){
				$('#fixture_tree_id').val(1);
			}else if( _index ==1 ){
				$('#fixture_tree_id').val(2);
			}else if(_index ==2){
				$('#fixture_tree_id').val(3);
			}
		});
		
		$('#roomDefinition p.decorate3').click(function(){
			$('#roomDefinition').slideUp();
			$('#mask').hide();
		});
});

/*弹出层*/
function popup(pContent,flag,fn){
    $('.popup').remove();
    $("#greybackground").remove();
    //追加一个层，使背景变灰
    $("body").append("<div id='greybackground'></div>");
    $("#greybackground").css({"zIndex":"9998","opacity": "0.4", "background": "#000","position":"fixed","top":"0px","left":"0px","width":"100%","height":"100%" });
    //创建弹出内容
    var pop = '';
    pop += "<div class='popup'>";
    pop += "<div class='popup_header clearfix'><span class='title'>温馨提示</span><i class='close'>×</i></div>";
    pop += "<div class='popup_content'>"+ pContent +"</div>";
    if(flag){
        pop += "<div class='popup_btn'><button class='popup_btn1'>确定</button><button class='popup_btn2'>取消</button></div>";
        style();
        $('.popup_btn button.popup_btn1').click(function(){
            fn();
            $('.popup').fadeOut();
            $("#greybackground").fadeOut();
        });
        $('.popup_btn button.popup_btn2').css({"background":"#f1f1f1"});
        $('.popup_btn button.popup_btn2').click(function(){
            $('.popup').fadeOut();
            $("#greybackground").fadeOut();
        });
    }else{
        pop += "<div class='popup_btn'><button class='popup_btn1'>确定</button></div>";
        style();
        $('.popup_btn button.popup_btn1').click(function(){
            $('.popup').fadeOut();
            $("#greybackground").fadeOut();
        });
    }
    function style(){
        pop += "</div>";
        $('body').append(pop);
        $('.popup').css({"zIndex":"9999","position":"fixed","background":"#fff","top":"50%","left":"50%","width":"300px","boxShadow":"1px 1px 50px rgba(0,0,0,.3)","webkitTransform":"translate(-50%,-50%)","oTransform":"translate(-50%,-50%)","msTransform":"translate(-50%,-50%)","mozTransform":"translate(-50%,-50%)","transform":"translate(-50%,-50%)"});
        $('.popup_header').css({"background":"#f8f8f8","borderBottom":"1px solid #eee","padding":"6px 8px"});
        $('.title').css({"float":"left","fontSize":"14px","color":"#333","display":"inline-block","height":"24px","paddingLeft":"12px","lineHeight":"24px"});
        $('.close').css({"float":"right","fontSize":"18px","color":"#333","cursor":"pointer","fontStyle":"normal"});
        $('.close').hover(function(){
            $(this).css({"color":"#999"});
        },function(){
            $(this).css({"color":"#333"});
        });
        $('.close').click(function(){
            $(this).parents('.popup').fadeOut();
            $("#greybackground").fadeOut();
        });
        $('.popup_content').css({"padding":"40px 0","textAlign":"center","lineHeight":"24px","fontSize":"16px","color":"#333"});
        $('.popup_btn').css({"padding":"0px 10px 12px","textAlign":"center"});
        $('.popup_btn button').css({"padding":"6px 15px","margin":"0px 6px","border":"1px solid #dedede","borderRadius":"2px"});
        $('.popup_btn button.popup_btn1').css({"background":"#f05815","borderColor":"#f05815","color":"#fff"});
    }
};
	function countDown(years,months,days,hours,minutes,seconds,obj){
		var dateFinal = new Date(years,months-1,days,hours,minutes,seconds);  //设置倒计时到达时间
		var dateNow = new Date();  //获取系统当前时间
		var dateSub = dateFinal - dateNow;  //计算差值，单位毫秒

		var day = hour = minute = second = dayBase = hourBase = minuteBase = secondBase = 0;  //初始化各个数值
		var timeHtml = '';
		/* timeHtml += '距离' + years + '年' + toDouble(months + 1) + '月' + toDouble(days) + '日' + toDouble(hours) + '时' + toDouble(minutes) + '分还剩下';*/
		dayBase = 24 * 60 * 60 * 1000;  //计算天数的基数，单位毫秒。1天等于24*60*60*1000毫秒
		hourBase = 60 * 60 * 1000;  //计算小时的基数，单位毫秒。1小时等于60*60*1000毫秒
		minuteBase = 60 * 1000;  //计算分钟的基数，单位毫秒。1分钟等于60*1000毫秒
		secondBase = 1000;  //计算秒钟的基数，单位毫秒。1秒钟等于1000毫秒
		day = Math.floor(dateSub / dayBase);  //计算天数，并取下限值。如 5.9天 = 5天
		hour = Math.floor(dateSub % dayBase / hourBase);  //计算小时，并取下限值。如 20.59小时 = 20小时
		minute = Math.floor(dateSub % dayBase % hourBase / minuteBase);  //计算分钟，并取下限值。如 20.59分钟 = 20分钟
		second = Math.floor(dateSub % dayBase % hourBase % minuteBase / secondBase);  //计算秒钟，并取下限值。如 20.59秒 = 20秒
		//当天数小于等于0时，就不用显示
		if(day <= 0){
			timeHtml = '000天' + toDouble(hour)+'时' + toDouble(minute)+'分' + toDouble(second)+'秒';
		}else{
			timeHtml = toThree(day)+'天' + toDouble(hour)+'时' + toDouble(minute)+'分' + toDouble(second)+'秒';
		}
		$(obj).html(timeHtml);
	}
//当小时，分钟和秒钟小于 10 的时候会显示为个位数，比较难看，需要在前面加 0。
function toDouble(num){
	if(num < 10){
		return '0'+ num;
	}else{
		return '' + num;
	}
}
function toThree(num){
	if(num < 100 && num >=10){
		return '0'+ num;
	}else if(num < 10){
		return '00'+ num;
	}else{
		return '' + num;
	}
}

/*星星打分封装*/
function star(obj){
	var stepW = 24;
	var description = new Array("1分","2分","3分","4分","5分");
	var stars = $(obj);
	var descriptionTemp;
	$(".showb").css("width",0);
	stars.each(function(){
		$(this).click(function(e){
			var i = $(this).index();
			var n = i+1;
			$(this).parent().next().css({"width":stepW*n});
			descriptionTemp = description[i];
			$(this).find('a').blur();
			return stopDefault(e);
			return descriptionTemp;
		});
	});
	stars.each(function(){
		$(this).hover(function(){
			var i = $(this).index();
			$(this).parent().parent().next().text(description[i]);
		},function(){
			if(descriptionTemp != null){
				$(this).parent().parent().next().text(descriptionTemp);
			}else{
				$(this).parent().parent().next().text("0分");
			}
		});
	});
};
function stopDefault(e){
	if(e && e.preventDefault)
		e.preventDefault();
	else
		window.event.returnValue = false;
	return false;
};


/*图片上传*/
$(function(){
	var delParent;
	var defaults = {
		fileType         : ["jpg","png","bmp","jpeg"],   // 上传文件的类型
		fileSize         : 1024 * 1024 * 10                  // 上传文件的大小 10M
	};
	/*点击图片的文本框*/
	$(".file").change(function(){
		var idFile = $(this).attr("id");
		var file = document.getElementById(idFile);
		var imgContainer = $(this).parents(".z_photo").find('#passBox'); //存放图片的父亲元素
		var fileList = file.files; //获取的图片文件
		var input = $(this).parent();//文本框的父亲元素
		var imgArr = [];
		//遍历得到的图片文件
		var numUp = imgContainer.find(".up-section").length;

		var totalNum = numUp + fileList.length;  //总的数量
		//alert(numUp+"-"+totalNum);
		if(fileList.length > 9 || totalNum > 9 ){
			alert("上传图片数目不可以超过9个，请重新选择");  //一次选择上传超过5个 或者是已经上传和这次上传的到的总数也不可以超过5个
		}
		else if(numUp < 9){

			fileList = validateUp(fileList);

			for(var i = 0;i<fileList.length;i++){
				var imgUrl = window.URL.createObjectURL(fileList[i]);
				imgArr.push(imgUrl);
				var $section = $("<div class='up-section left loading'></div>");
				imgContainer.prepend($section);
				var $span = $("<span class='up-span'></span>");
				$span.appendTo($section);

				var $img0 = $("<img class='close-upimg'>").on("click",function(event){
					event.preventDefault();
					event.stopPropagation();
					$(".works-mask").show();
					delParent = $(this).parent();
				});
				$img0.attr("src","img/a7.png").appendTo($section);
				var $img = $("<img class='up-img up-opcity'>");
				$img.attr("src",imgArr[i]);
				$img.appendTo($section);
				var $p = $("<p class='img-name-p'>");
				$p.html(fileList[i].name).appendTo($section);
				var $input = $("<input id='taglocation' name='taglocation' value='' type='hidden'>");
				$input.appendTo($section);
				var $input2 = $("<input id='tags' name='tags' value='' type='hidden'/>");
				$input2.appendTo($section);
			}
		}
		setTimeout(function(){
			$(".up-section").removeClass("loading");
			$(".up-img").removeClass("up-opcity");
		},450);
		numUp = imgContainer.find(".up-section").length;
	});



	$(".z_photo").delegate(".close-upimg","click",function(){
		$(".works-mask").show();
		delParent = $(this).parent();
	});

	$(".wsdel-ok").click(function(){
		$(".works-mask").hide();
		delParent.remove();
	});

	$(".wsdel-no").click(function(){
		$(".works-mask").hide();
	});

	function validateUp(files){
		var arrFiles = [];//替换的文件数组
		for(var i = 0, file; file = files[i]; i++){
			//获取文件上传的后缀名
			var newStr = file.name.split("").reverse().join("");
			if(newStr.split(".")[0] != null){
				var type = newStr.split(".")[0].split("").reverse().join("");
				console.log(type+"===type===");
				if(jQuery.inArray(type, defaults.fileType) > -1){
					// 类型符合，可以上传
					if (file.size >= defaults.fileSize) {
						alert(file.size);
						alert('您这个"'+ file.name +'"文件大小过大');
					} else {
						// 在这里需要判断当前所有文件中
						arrFiles.push(file);
					}
				}else{
					alert('您这个"'+ file.name +'"上传类型不符合');
				}
			}else{
				alert('您这个"'+ file.name +'"没有类型, 无法识别');
			}
		}
		return arrFiles;

	}

})

/*发票*/
$(function(){
	/*$('.fapiaoPopup_bd_list1 div span').click(function(){
	 $('.personalFillName').remove();
	 $('.companyInput').remove();
	 $('.companyAdd').remove();
	 var _index = $(this).index();
	 var oHTML = '';
	$(this).addClass('active').siblings().removeClass('active');
	if( _index == 0 ){
		oHTML += '<div class="fapiaoPopup_bd_list personalFillName"><span onclick="oInput(this)">请填写姓名</span><b>非必填</b></div>';
		$('.fapiaoPopup_bd_list1').after(oHTML);
		$('.companyBox').hide();
		$('.plainInvoice').addClass('active');
		$('.VAT_invoice').removeClass('active');
		$('.VAT_invoice').css({'color':'#ccc'});
		$('.fapiaoPopup_bd_list4 div span').unbind();
	}else if( _index == 1 ){
		oHTML += '<div class="companyBox"></div><div class="fapiaoPopup_bd_list companyAdd"><span onclick="oInput1(this)">新增单位发票</span></div>';
		oHTML += '<div class="fapiaoPopup_bd_list companyInput"><label>纳税人识别号</label><input type="text"></div>';
		$('.fapiaoPopup_bd_list1').after(oHTML);
		$('.plainInvoice').removeClass('active');
		$('.VAT_invoice').css({'color':'#666'});
		$('.fapiaoPopup_bd_list4 div span').bind('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	}
 });*/
	// $('.fapiaoPopup_bd_list3 div span').click(function(){
	// 	$(this).addClass('active').siblings().removeClass('active');
	// });

	$('.fapiaoPopup_bd').delegate('div.companyBox_list','click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	/*$('.fapiao .modify').click(function(){
		$('#mask').show();
		$('.fapiaoPopup').show();
	});
	$('.fapiaoPopup_hd i').click(function(){
		$(this).parent().parent().hide();
		$('#mask').hide();
	});*/

	/*$('.fapiaoPopup_bd_list2 div span').click(function(){
		$('.fapiaoPopup_bd_list5').remove();
		var i = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		if( i==0 ){
			$(this).parent().parent().siblings().find('span').css({'color':'#ccc','cursor':'not-allowed'});
			$(this).parent().parent().siblings().find('span').unbind();
			$(this).parent().parent().siblings().find('span').removeClass('active');
			$(this).parent().parent().siblings().find('input').prop('readonly',true);
		}else if( i==1 ){
			var str = '';
			str += '<div class="clearfix fapiaoPopup_bd_list fapiaoPopup_bd_list5"><label class="left"><i class="am-icon-asterisk am-text-sm am-text-danger"></i>收票人手机</label><div class="left"><input type="text" /></div></div>';
			str += '<div class="clearfix fapiaoPopup_bd_list fapiaoPopup_bd_list5"><label class="left">收票人邮箱</label><div class="left"><input type="text" /></div></div>';
			$('.fapiaoPopup_bd_list6').before(str);
			$(this).parent().parent().siblings().find('span').css({'color':'#666','cursor':'pointer'});
			$(this).parent().parent().siblings().find('input').prop('readonly',false);
			$('.fapiaoPopup_bd_list4 div span').bind('click',function(){
				$(this).addClass('active').siblings().removeClass('active');
			});
			$('.fapiaoPopup_bd_list3 div span').bind('click',function(){
				$(this).addClass('active').siblings().removeClass('active');
			});
			$('.fapiaoPopup_bd_list1 div span').bind('click',function(){
				$('.personalFillName').remove();
				$('.companyInput').remove();
				$('.companyAdd').remove();
				var _index = $(this).index();
				var oHTML = '';
				$(this).addClass('active').siblings().removeClass('active');
				if( _index == 0 ){
					oHTML += '<div class="fapiaoPopup_bd_list personalFillName"><span onclick="oInput(this)">请填写姓名</span><b>非必填</b></div>';
					$('.fapiaoPopup_bd_list1').after(oHTML);
					$('.companyBox').hide();
					$('.plainInvoice').addClass('active');
					$('.VAT_invoice').removeClass('active');
					$('.VAT_invoice').css({'color':'#ccc'});
					$('.fapiaoPopup_bd_list4 div span').unbind();
				}else if( _index == 1 ){
					oHTML += '<div class="companyBox"></div><div class="fapiaoPopup_bd_list companyAdd"><span onclick="oInput1(this)">新增单位发票</span></div>';
					oHTML += '<div class="fapiaoPopup_bd_list companyInput"><label>纳税人识别号</label><input type="text"></div>';
					$('.fapiaoPopup_bd_list1').after(oHTML);
					$('.plainInvoice').removeClass('active');
					$('.VAT_invoice').css({'color':'#666'});
					$('.fapiaoPopup_bd_list4 div span').bind('click',function(){
						$(this).addClass('active').siblings().removeClass('active');
					});
				}
			})
		}
	});*/
});
