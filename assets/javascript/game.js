$( document ).ready(function(){
	
    var randomNumber= Math.floor(Math.random()*101+19) //selects random number 19-120
	
	$('#randomNumber').text(randomNumber);
	
	var number1= Math.floor(Math.random()*11+1)
	var number2= Math.floor(Math.random()*11+1)
	var number3= Math.floor(Math.random()*11+1)
	var number4= Math.floor(Math.random()*11+1)
	//numbers for the jewels 1-12
	var userTotal=0;
	var wins=0;
	var losses=0;
	// varibles for the stats
	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);
	$('#finalScore').text(userTotal);
	function reset() {
	randomNumber= Math.floor(Math.random()*101+19);	
		$('#randomNumber').text(randomNumber);
		number1= Math.floor(Math.random()*11+1);
		number2= Math.floor(Math.random()*11+1);
		number3= Math.floor(Math.random()*11+1);
		number4= Math.floor(Math.random()*11+1);
		userTotal=0;
	$('#displayNum1').text("");
	$('#displayNum2').text("");
	$('#displayNum3').text("");
	$('#displayNum4').text("");
	$('#finalScore').text(userTotal);
	}
function win(){
	alert("winner winner chicken dinner!");
		wins++;
		$('#numberWins').text(wins);
		reset();
	}
function loss(){
	alert("you lose try again!");
		losses++;
		$('#numberLosses').text(losses);
		reset();
	}
$('#blueOne').on ('click', function(){
	$('#displayNum1').text(number1);
	userTotal= userTotal + number1;
	console.log("New total=" + userTotal);
	$('#finalScore').text(userTotal);
	
	if (userTotal==randomNumber){
		win();
		}
	else if (userTotal>randomNumber){
		loss();
		}
	})
$('#greenTwo').on ('click', function(){
	$('#displayNum2').text(number2);
	userTotal= userTotal + number2;
	console.log("New total=" + userTotal);
	$('#finalScore').text(userTotal);
	
	if (userTotal==randomNumber){
		win();
		}
	else if (userTotal>randomNumber){
		loss();
		}
	})
$('#redThree').on ('click', function(){
	$('#displayNum3').text(number3);
	userTotal= userTotal + number3;
	console.log("New total=" + userTotal);
	$('#finalScore').text(userTotal);
	
	if (userTotal==randomNumber){
		win();
		}
	else if (userTotal>randomNumber){
		loss();
		}
	})
$('#yellowFour').on ('click', function(){
	$('#displayNum4').text(number4);
	userTotal= userTotal + number4;
	console.log("New total=" + userTotal);
	$('#finalScore').text(userTotal);
	
	if (userTotal==randomNumber){
		win();
		}
	else if (userTotal>randomNumber){
		loss();
		}
	});
});