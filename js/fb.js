function postToFeed() {
 var obj = {
  method: 'share',
  name: '標題',
  caption: '子標題',
  description: '描述',
  link: '../index.html',
  picture: '../images/logo2.png'
 }; 
 function callback(response) {console.log(response); }
 FB.ui(obj, callback);
}


//    function login_success(uid){
	
// 	/*var body = '測試一下測試一下測試一下測試一下';
// 	FB.api('/me/feed', 'post', { message: body }, function(response) {
// 	  if (!response || response.error) {
// 		alert('Error occured');
// 	  } else {
// 		alert('Post ID: ' + response.id);
// 	  }
// 	}); */

// 	FB.ui(
// 	  {
// 		method: 'feed',
// 		name: 'Facebook Dialogs',
// 		link: 'http://www.suncolor.com.tw',
// 		picture: 'http://fbrell.com/f8.jpg',
// 		caption: '測試一下',
// 		description: '測試兩下測試兩下測試兩下'
// 	  },
// 	  function(response) {
// 		if (response && response.post_id) {
// 		  alert('Post was published.');
// 		} else {
// 		  alert('Post was not published.');
// 		}
// 	  }
// 	);
// }

