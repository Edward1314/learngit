$(function(){
	var iIndex = 0;
	    oTimer = null;
//鼠标进入box显示左右按钮
	$('#banner').mouseenter(function(){
		clearInterval(oTimer);
		$('#direction-btn').css('display','block');
	
});
//鼠标离开时隐藏左右按钮
    $('#banner').mouseleave(function(){
    	$('#direction-btn').css('display','none');
    	
    	//添加鼠标离开后自动轮播
    	oTimer = setInterval(function(){
		 iIndex++;
      if (iIndex > 7) {           			
          iIndex = 0;
         }
           	
           	
        //做动画
     	$('#img-list li').eq(iIndex).css({opacity: 0}).addClass('active').stop(true).animate({
     		opacity: 1
     	},300).siblings().animate({
     		opacity:0
     	},300,function(){
     		$(this).removeClass('active')
     	})

     	//给span添加.active属性
     	$('#btn-list span').eq(iIndex).addClass('active').siblings().removeClass('active');
  	
		},2000);
    	

    })
    
    
    
//给span添加移入事件，显示对应的图片
     $('#btn-list span').mouseenter(function(){
     	
     	//做判断鼠标再次进入span时是否已经有active
     	if (!$(this).hasClass('active')) {
     		iIndex = $(this).index();
     	

     	//做动画
     	$('#img-list li').eq(iIndex).css({opacity: 0}).addClass('active').stop(true).animate({
     		opacity: 1
     	},300).siblings().animate({
     		opacity:0
     	},300,function(){
     		$(this).removeClass('active')
     	})
     	
     	
     	//给span添加.active属性
     	$(this).addClass('active').siblings().removeClass('active');
     	
     	
     	
     	}
     });
    
    
    
//给右侧按钮添加点击事件
           $('#right-btn').click(function(){          	 
           	iIndex++;
           
           	if (iIndex > 7) {  
           		
           		iIndex = 0;
           		
           	}
           	
           	
        //做动画
        $('#Banner').addClass('Bgcolor'+ iIndex +'')
        
     	$('#img-list li').eq(iIndex).css({opacity: 0}).addClass('active').stop(true).animate({
     		opacity: 1
     	},300).siblings().animate({
     		opacity:0
     	},300,function(){
     		$(this).removeClass('active')
     	})
     	
     	
     	//给span添加.active属性
     	$('#btn-list span').eq(iIndex).addClass('active').siblings().removeClass('active');
           	
           
           	
        });
    
    
//给左侧按钮添加点击事件
       $('#left-btn').click(function(){          
           	iIndex--;
           	if (iIndex < 0) {           			
           		iIndex = 7;
           	}
           	
           	
        //做动画
     	$('#img-list li').eq(iIndex).css({opacity: 0}).addClass('active').stop(true).animate({
     		opacity: 1
     	},300).siblings().animate({
     		opacity:0
     	},300,function(){
     		$(this).removeClass('active')
     	})
     	
     	
     	//给span添加.active属性
     	$('#btn-list span').eq(iIndex).addClass('active').siblings().removeClass('active');
           	
           
           	
        });


//刷新页面后自动运行
	oTimer = setInterval(function(){
		 iIndex++;
      if (iIndex > 7) {           			
          iIndex = 0;
         }
           	
           	
        //做动画
     	$('#img-list li').eq(iIndex).css({opacity: 0}).addClass('active').stop(true).animate({
     		opacity: 1
     	},300).siblings().animate({
     		opacity:0
     	},300,function(){
     		$(this).removeClass('active')
     	})

     	//给span添加.active属性
     	$('#btn-list span').eq(iIndex).addClass('active').siblings().removeClass('active');
  	
		},2000);














    
});	


    
