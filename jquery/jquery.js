$(function(){
	var timer=null,
		index=0,
		len=$('.bloc').length;

//定时器每隔2秒切换图片
	function startChange(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			changeImg();
		},2000)
	}
	startChange();

// 清除定时器
	function stopChange(){
		if(timer){
			clearInterval(timer);
		}
	}

//滑过main清除定时器，离开main定时器继续
	function slidImg(){
		$('#main').mouseover(function(){
			stopChange();
		}).mouseout(function(){
			startChange();
		})
	}
	slidImg();

// 点击next(左)箭头切换图片
	$('#next').click(function(){
		index--;
		if(index<0){
			index=len-1;
		}
		changeImg();
	})

// 点击prev(右)箭头切换图片
	$('#prev').click(function(){
		index++;
		if(index>=len){
			index=0;
		}
		changeImg();
	})

// 点击圆点切换图片
	$('.dot').click(function(){
		index=$(this).index();
		changeImg();
	})

// 图片和圆点切换样式
function changeImg(){
	$('.bloc').eq(index).addClass('pics-active').siblings().removeClass('pics-active');
	$('.dot').eq(index).addClass('dots-active').siblings().removeClass('dots-active');
}

})