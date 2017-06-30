window.onload=function(){
	
	var iIndex = 0;	    
	   oRightpinpai = document.getElementById('right-pinpai');
	 oDirectionbtn1 = document.getElementById('direction-btn1');
		 oRightbtn1 = document.getElementById('right-btn1'); 
		  oLeftbtn1 = document.getElementById('left-btn1');
	          oList1 = document.getElementById('list');
	         oFirst =  oList1.firstElementChild;    
	    oList1.innerHTML += oFirst.outerHTML;
	   //鼠标移入是显示
	   
	oRightpinpai.onmouseenter=function(){
		console.log(111)
		oDirectionbtn1.style.display = 'block';
	}
	oRightpinpai.onmouseleave=function(){
		oDirectionbtn1.style.display = 'none';
	}
	
	//添加右侧点击事件
	
	oRightbtn1.onclick=function(){
		if (iIndex === 4) {
			iIndex = 0;
			oList1.style.left = 0;
		}
		
		iIndex++;
	    bufferMove(oList1,{left:-iIndex*1000});
	}
	
	//添加左侧点击事件
	oLeftbtn1.onclick=function(){
		iIndex--;
		if (iIndex < 0) {
			iIndex = 3;
			oList1.style.left = '-4000px';
		}
		
		
	    bufferMove(oList1,{left:-iIndex*1000});
	}
	
	
	
	
	//轮播图
	
	
	var    oLunboA = $('lunboA');
	     oBtnlistA = $('btn-list-A');
	oDirectionbtnA = $('direction-btn-A');
	     oLeftbtnA = $('left-btn-A');
	     oReftbtnA = $('right-btn-A');
	     oImglistA = $('img-list-A');
	         oSpan = Array.from(oBtnlistA.getElementsByTagName('span'));
	         iIndex = 0;
	
	oFirstA = oImglistA.firstElementChild;
	oImglistA.innerHTML += oFirstA.outerHTML;
	
	
	oLunboA.onmouseenter=function(){
	    	clearInterval(oTimer);
	    	oDirectionbtnA.style.display = 'block';
	    	
	    }
	    
	    //鼠标移出是按钮隐藏
	    oLunboA.onmouseleave=function(){
	    	oDirectionbtnA.style.display = 'none';	    	
	    	oTimer = setInterval(function(){
	    		if (iIndex === 4) {
	    			//iIndex重新置0
	    			iIndex = 0;
	    			oImglistA.style.left = 0;	    			
	    		}	    		
	    		iIndex++;
	    		var l = iIndex;
	    	 if(l===4){l=0};
	    		bufferMove(oImglistA,{left: -iIndex*399});
                  oSpan.forEach(function(m){	            		
	            	m.className = '';	
	            	oSpan[l].className = 'apple';	
	            })
	    	},2000);   	
	    };
	    
	    
	    
	    oSpan.forEach(function(v, k){
	    	        v.index = k;
	    			v.onmouseenter = function(){
	    				oSpan.forEach(function(m){
	    					
	    					m.className = '';
	    						    					
	    				})
	    				iIndex = k;
	    				this.className = 'apple';
	    				
	    				bufferMove(oImglistA,{left: -k*399});
	    			}
	
	    		})
	
	    //左侧按钮添加点击事件
	   oLeftbtnA.onclick=function(){
	        iIndex--;
	    	if (iIndex < 0) {
	    	iIndex = 3;
	    	console.log(iIndex)	
	    	oImglistA.style.left = '-1596px';	
	    		
	    	}	    	
	    	var l = iIndex;
	    	 if(l===4){l=0};
	    	bufferMove(oImglistA,{left:-iIndex*399});
	         oSpan.forEach(function(m){
	            		
	            	m.className = '';	
	            		
	            		
	            	
	            	
	            	oSpan[l].className = 'apple';
	            	
	            	
	            })
	       }
	
	    //右侧添加点击事件
	    
	     oReftbtnA.onclick=function(){
	   
	    	if (iIndex === 4) {
	    	iIndex = 0;
	    		
	    	oImglistA.style.left = 0;	
	    		
	    	}
	    	
	    	iIndex++;
	    	console.log(iIndex)
	    	 var l = iIndex;
	    	 
	    	 if(l===4){l=0};
	    	 
	    	 oSpan.forEach(function(m){
	            		
	            	m.className = '';	
	            		
	            		
	            	
	            	
	            	oSpan[l].className = 'apple';
	            	
	            	
	            })
	       
	    	bufferMove(oImglistA,{left:-iIndex*399});
	
	      }
	    
	    
	    
	    
	    
	//定时运动
	     oTimer = setInterval(function(){
	    		if (iIndex === 4) {
	    			//iIndex重新置0
	    			iIndex = 0;
	    			oImglistA.style.left = 0;
	    			
	    		}
	    				iIndex++;
	    		var l = iIndex;
	    	 if(l===4){l=0};
	    		oSpan.forEach(function(m){
	            		
	            	m.className = '';	
	            		
	            		
	            	
	            	
	            	oSpan[l].className = 'apple';
	            	
	            	
	            })
	    
	    		
	    		bufferMove(oImglistA,{left: -iIndex*399});
	    		
	            
	            
	            	
	            
	    	},2000);         
    	
	
	
	function $(id){
		return document.getElementById(id);
	}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


	
	
}
