$(function(){
	$('.quanbu').on('mouseenter',function(){
		$('.quanbu .left-list').css('display','block');	
	});
	
	$('.quanbu').on('mouseleave',function(){
		$('.quanbu .left-list').css('display','none');	
	});
	
	

	
$('#thumb-box img').on('mouseenter',function(){
	
	$(this).addClass('pt-active').siblings().removeClass('pt-active');
	//改变中型图片的位置
	$('#middle-img').attr('src',$(this)[0].src);
	//改变大型图片的位置
	$('#big-img').attr('src',$(this)[0].src);
    
});
	
//给中型box中的shadow添加移动事件
      $('#middle-box').on('mouseenter',function(){     	
      	$('#shadow').css('display','block');
        $('#big-box').css('display','block');
      });
	
	
//给中型box中的shadow添加移动事件
     $('body').on('mousemove',function(ev){
	    var 
	       ev = ev || window.event;
	       iL = ev.clientX - $('#shadow').width()/2 - $('#middle-box').offset().left;
	       iT = ev.clientY - $('#shadow').height()/2 - $('#middle-box').offset().top + $(document).scrollTop();
	       	       
	       
	       if (iL < 0) {
	       	iL = 0;
	       }
	       if (iT < 0) {
	       	iT = 0;
	       }
	       if (iL > $('#middle-box').width()/2) {
	       	   iL = $('#middle-box').width()/2;
	       }
	        if (iT > $('#middle-box').height()/2) {
	       	   iT = $('#middle-box').height()/2;
	       }
	       
	       //指定遮罩层的位置
	      $('#shadow').css('left',iL + 'px'); 
	      $('#shadow').css('top',iT + 'px'); 
	      
	      
	      //大型图片移动的位置
	      var
	         iBigL = -iL * $('#big-img').width()/$('#middle-box').width();
	         iBigT = -iT * $('#big-img').height()/$('#middle-box').height();
	       
	       
	       //指定大型图片的移动位置
	       
	       $('#big-img').css('left',iBigL + 'px'); 
	       $('#big-img').css('top',iBigT + 'px'); 
       
     });	
	//给中型box添加移出事件
	$('#middle-box').on('mouseleave',function(){
		
		$('#shadow').css('display','none');
		$('#big-box').css('display','none');
		
		
	})
	
	
	
	//选项卡
	$('#p-v-e #p-c-r').on('click',function(){
		var iIndex = $(this).index();
		var str = $(this).attr('rel');
		$('#p-v-e #p-c-r').eq(iIndex).addClass('active-s').siblings().removeClass('active-s');
		
		     for(var i = 0;i < $('#p-o-u .infor-price').length;i++){
						if (str == $('#p-o-u .infor-price:eq('+i+')').attr('rel')) {
						$('#p-o-u .infor-price:eq('+i+')').css('display','block').siblings().css('display','none');
							
						}
					};	
					
					
			for(var i = 0;i < $('#p-r-l font').length;i++){
						if (str == $('#p-r-l font:eq('+i+')').attr('rel')) {
						$('#p-r-l font:eq('+i+')').css('display','block').siblings().css('display','none');
							
						}
					};	
		
		
	})
	
	
	//商品简介
	$('#detail-hd').on('click',function(){
		$('#romantic').toggleClass('styleB');
        $('#detail-info').toggle();
	
	})
	
	
	
	//点击事件
	$('#pro-all-list li').on('click',function(){
		var iIndex = $(this).index();
		
		$('#pro-all-list li').eq(iIndex).addClass('active-3').siblings().removeClass('active-3');
    		
		
	})
	
	//选项卡
	$('#pro-all-list li').on('click',function(){
		var iIndex = $(this).index();
		
		var str = $(this).attr('rel');
		for(var i = 0;i < $('#dp-infotab .thesame').length;i++){
			if(str == $('#dp-infotab .thesame:eq('+i+')').attr('rel')){
				
				$('#dp-infotab .thesame:eq('+i+')').toggleClass('active-5').siblings().removeClass('active-5');

				
			}
		}
	
	})
	

   //购物车添加
   $('#Wrap-input').find('.btn-add').click(function(){
   	  var num = $(this).next().val();
   	      num++;  	
         $(this).next().val(num);
   });
   
   //购物车取消商品
   $('#Wrap-input').find('.btn-reduce').click(function(){
   	  var num = $(this).nextAll('input').val();
   	  if (num <= 1) {
   	  	num = 1;
   	  	return num;
   	  } 
   	      num--;  	
         $(this).nextAll('input').val(num);
   });

})





















