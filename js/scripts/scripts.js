var lineChartData = {
			labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
			datasets : [
				
				//high
				{
					fillColor : "rgba(255, 0, 0, 0.55)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [32.7,39.8,51.1,64.1,70.3,77.2,84.4,84.9,74.9,61.2,43.9,33.6]
				},
				
				
				//average 
				{
					fillColor : " rgba(255, 255, 0, 0.55)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [27.3,33,41.9,50.9,59.9,66.4,72.5,72.6,63.1,50.9,37.9,28.8]
				},
				
				
				//low
				{
					fillColor : "rgba(0, 0, 255, 0.75)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [21.9,26.1,32.7,40.3,48.4,55.6,60.6,60.3,51.2,40.5,31.9,24]
				},
			]
			
		};
		

	var myLine = new Chart(document.getElementById("tempavgmon").getContext("2d")).Line(lineChartData);
	
	var doughnutData = [
				{
					value: 25, //above 90
					color:"rgba(255, 0, 0, 1)"
				},
				
				{
					value : 180, //inbetween
					color : "rgba(255, 255, 0, 1)"
				},
				
				{
					value : 156, //below 32
					color : "rgba(0, 0, 255, 1)"

				},
				
				{
					value : 4, //below 0
					color : "rgba(0, 0, 0, 1)",

				},
				
				
				
			];

	var myDoughnut = new Chart(document.getElementById("freezeornot").getContext("2d")).Doughnut(doughnutData);
	
	
		var barChartData = {
			labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
			datasets : [
				{
					fillColor : "rgba(0, 0, 0, 1)",
					strokeColor : "rgba(220,220,220,1)",
					data : [13,10,9,7,7,7,3,3,4,7,11,11]
				},
			]
			
		}

	var myLine = new Chart(document.getElementById("daysofprec").getContext("2d")).Bar(barChartData);