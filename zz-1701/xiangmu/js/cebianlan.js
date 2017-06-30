$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > $('#header').outerHeight(true)) {
		    $('#cebian-right').fadeIn()
			$('.aside-list').fadeIn()//让楼层淡入
		} else{
			$('#cebian-right').fadeOut()
			$('.aside-list').fadeOut()//让楼层淡出
		}
		
		
		
		$('#main li').each(function(){
			
			var iIndex = $(this).index();
			
			var _height = $(this).offset().top + $(this).height()/2;
			    _top    = $(window).scrollTop();
			if (_height > _top) {
				$('.omg li').eq(iIndex).find('a').css('display','none');
				$('.omg li').eq(iIndex).siblings().find('a').css('display','block');
				$('.omg li').eq(iIndex).find('span').addClass('title');
				$('.omg li').eq(iIndex).siblings().find('span').removeClass('title');
				
				return false;
			}
			
			
			
		})
		
		
		
		
	});
		
		//划过变字
		$('.omg li').hover(function(){
			$(this).addClass('hover');	
		},function(){
			$(this).removeClass('hover');	
	
		});
		
		$('.omg li').click(function(){
			var iIndex = $(this).index();
			  var   Top   = $('.Louceng .floor-list').eq(iIndex).offset().top;
			console.log(iIndex);
			$('body,html').animate({scrollTop: Top});
			
			
			//$(this).find('span').addClass('title').end().siblings().find('span').removeClass('title');
			
		})
		
	
		
		
	
	
	
	
	
	
	
	
	
	
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

