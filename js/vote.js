// <script type="text/javascript">
	$(document).ready(function(){
		Parse.initialize("c4azxhlcBAObQPSxQ6jY4lf8dbFEPBD6y7zgIHD0", "2uGIxUaShVOXpBWyn4UwRoPK1Tali8MrKf4mp0Xp");
		var currentUser = Parse.User.current();
		if (currentUser) {
			var username=currentUser.attributes.username;
			$('.right').append('<a onclick="logOut()">Log out</a><span>Hi, '+username+' | </span>');
			//document.write('Hi, '+username);	
		} else {
    		//document.write('未登入');
    		$('.right').append('<a href="login.html">Log in | Sign up</a>');
		}
	});
// </script>

// <script type="text/javascript">
	function logOut(){
    	Parse.initialize("c4azxhlcBAObQPSxQ6jY4lf8dbFEPBD6y7zgIHD0", "2uGIxUaShVOXpBWyn4UwRoPK1Tali8MrKf4mp0Xp");
    	Parse.User.logOut();
    	var currentUser = Parse.User.current();
		if (!currentUser) {
			alert("你已成功登出");
			window.location.href = "index.html";
		}
	}

	function Vote(value){
		Parse.initialize("c4azxhlcBAObQPSxQ6jY4lf8dbFEPBD6y7zgIHD0", "2uGIxUaShVOXpBWyn4UwRoPK1Tali8MrKf4mp0Xp");
		
		var Today=new Date();
		var today=Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate(); //今天的日期

		var currentUser = Parse.User.current();
		
		var oji = "oji"+value; //投的歐吉桑號碼
		//alert(username);
		if (currentUser) { //確認是否登入
			var username=currentUser.attributes.username; //目前登入的user
			var vote = Parse.Object.extend("vote");
    		var query = new Parse.Query(vote);

    		query.equalTo("username", username);
    		query.count({
  				success: function(count) {
    				//document.write(count);
    				if(count>0){  //確認是否"曾"投過票(Parse.Query)
	    				query.descending("createdAt");
						query.find({
	  						success: function(results) { 
	    						var object = results[0];
	    						var date=object.createdAt;
	    						var vote_day=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
	    						if(vote_day==today){ //確認"今天"是否投過票
									alert(username+", 你今天已經投過票了!");
								}else{
									//alert(username+", you can vote today");
									//alert(oji);
									var vote = Parse.Object.extend("vote");
    								var vote = new vote();
									vote.set("Ojipockle", oji);
									vote.set("username", username);
									vote.save(null, {  //將投票內容寫進Parse
										success: function(vote) {
											alert('投票成功!');
											window.location.href = "index.html";
										},
										error: function(vote, error) {
											alert('fail');
										}
									});
								}
	  						},
	  						error: function(error) {
	   	 						alert("Error");
	  						}
						});
    				}else{
    					//alert(username+', you can vote');
    					//alert(oji);
    					var vote = Parse.Object.extend("vote");
    					var vote = new vote();
						vote.set("Ojipockle", oji);
						vote.set("username", username);
						vote.save(null, {  //將投票內容寫進Parse
							success: function(vote) {
								alert('投票成功!');
								window.location.href = "index.html";
							},
							error: function(vote, error) {
								alert('fail');
							}
						});
    				}
  				},
  				error: function(error) {
    				alert("Error");
  				}
			});
		} else {
    		alert("你尚未登入!");
    		window.location.href = "login.html";
		}
	}

	function vote_num(value){
		Parse.initialize("c4azxhlcBAObQPSxQ6jY4lf8dbFEPBD6y7zgIHD0", "2uGIxUaShVOXpBWyn4UwRoPK1Tali8MrKf4mp0Xp");
    	var vote = Parse.Object.extend("vote");
    	var query = new Parse.Query(vote);
    	var oji="oji"+value;
    	var count=null;
    	query.equalTo("Ojipockle", oji);
    	var index=value-1;
		query.count({
  			success: function(count) {
  				//alert(count);
  				
  				$('.box:eq('+index+')').find('span').append(count);  
  				//document.write(count);
  			},
  			error: function(error) {
    			alert("Error");
  			}
		});
		//console.log(count);
		//document.write(results.length);
	}

	// </script>
	// <script>
		vote_num(1);
		vote_num(2);
		vote_num(3);
		vote_num(4);
		vote_num(5);
		vote_num(6);
		vote_num(7);
		vote_num(8);
// </script>