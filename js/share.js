<script type="text/javascript">
FB.init({
    appId: '538493282919996',
    status: true,
    cookie: true,
    xfbml: true,
    channelURL: 'http://dingpachan.github.io/test/', //
    oauth: true
});
function fbshare(v1,img){
	var cap=" 大家好！我是【"+v1+"】";
	FB.getLoginStatus(function (response) {
		if (response.status === 'connected') {
			sd(cap,img);
		} else {
			FB.login(function (response) {
				if (response.authResponse) {
							var uid = response.authResponse.userID;
							var accessToken = response.authResponse.accessToken;
					sd(cap,img);
				} else {
					alert('登入失敗!');
				}
			}, {
				scope: 'email,publish_stream'
			});
		}
	});	
}

function sd(cap,img){
	FB.ui(
		{ 
			method: 'feed',
			name: '票選年度最佳人氣小小歐吉桑',
			link: 'http://dingpachan.github.io/test/',
			picture: 'https://github.com/dingpachan/test/tree/gh-pages'+img,
			caption: cap, 
			description: ' 快點進來投我一票吧! 讓我成為最佳人氣的歐吉桑!! ', 
		}, 
			function(response) { 
			if (response && response.post_id) {
				alert('分享成功'); 
			} else { 
				alert('分享失敗');
			}
			FB.logout(function(response) {
			});
		} 
	);
}
</script>