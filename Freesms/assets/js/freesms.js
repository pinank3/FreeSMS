$(document).ready(function(){
	$(".btn-login").click(function(){
		alert(111)
		record = $('#login_form').serialize();
		$.post("../controllers/login-action.php",record).success(
			function(response){
				console.log(response)
				if(response == "ok"){
					window.location.href="index.php";
				}
				else{
				$(".msg_login").html(response);
				}
			})
	})

	$(".btn-register").click(function(){
		alert(111)
		record = $('#register_form').serialize();
		$.post("../controllers/register-action.php",record).success(
			function(response){
				$(".msg_register").html(response);
			})
	})
	$(".btn-update").click(function(){
		records =$("#update_form").serialize();
		$.post("../controllers/password-action.php",records).success(function(res){
			$(".msg_update").html(res);
		})
	})
})