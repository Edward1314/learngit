$(function(){
	 $('#shouqi').on('click',function(){
	 	$('.top').animate({height: 60,},1000);
	 	$('.top-mid').animate({height: 60,},1000,function(){
	 		$('#bg2').css('display','block');
	 		$('#bg1').css('display','none');
	 		$('#shouqi').css('display','none');
	 		$('#zhankai').css('display','block');
	 		
	 	})
	
	 })
	 
	 $('#zhankai').on('click',function(){
	 	$('#bg1').css('display','block');
	 	$('#bg2').css('display','none');
	 	$('.top').animate({height: 300,},1000);
	 	$('.top-mid').animate({height: 300,},1000)
	    $('#shouqi').css('display','block');
	    $('#zhankai').css('display','none');
	 })
	 
	$('#close').on('click',function(){
		$('.top').css('display','none');
		
		
	})
	
	
	//选项卡
	$('.list1f li').on('mouseenter',function(){
		
		var str = $(this).attr('rel');
		for(var i = 0;i < $('.f1-content .j-pannel').length;i++){
			if(str == $('.f1-content .j-pannel:eq('+i+')').attr('rel')){
				
				$('.f1-content .j-pannel:eq('+i+')').addClass('iopty').siblings().removeClass('iopty');
				
				
				
			}
		}
		
		
		
	})
	
	
	//侧边栏
	$('.cebian-right-top .j-sbd-tab').on('mouseenter',function(){
       var iIndex = $(this).index()-1;
	$('.cebian-right-top .tip').eq(iIndex).stop(true).animate({left: -90},500);		
	});
	$('.cebian-right-top .j-sbd-tab').on('mouseleave',function(){
       var iIndex = $(this).index()-1;
	$('.cebian-right-top .tip').eq(iIndex).stop(true).animate({left: 35},350);		
	});
	
	
	
	$('.cebian-right-bottom .j-sbd-tab').on('mouseenter',function(){
       var iIndex = $(this).index();
	$('.cebian-right-bottom .tip').css('backgroungColor','#C20053').eq(iIndex).stop(true).animate({left: -90},500);
		console.log(iIndex);
	});
	$('.cebian-right-bottom .j-sbd-tab').on('mouseleave',function(){
       var iIndex = $(this).index();
	$('.cebian-right-bottom .tip').eq(iIndex).stop(true).animate({left: 35},350);		
	});
	
	
	//回到顶部

	$('.j_go_top').on('click',function(){
		
		$('body,html').animate({
			scrollTop: 0
		},800);
		return false;
	})
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
