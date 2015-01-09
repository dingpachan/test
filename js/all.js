var thickbox = document.getElementById("thickbox").value;

function check(){
	if(thickbox.value==""){
		alert("小淘氣，投票前要先登入喔!");
	}else{
		window.location.href('vote.html?keepThis=true&TB_iframe=true&height=400&width=600');
		//document.diary.submit();
	}
}