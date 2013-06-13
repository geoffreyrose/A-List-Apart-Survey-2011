var barChartData = {
			labels : ["18 and under","19-29","30-44","45-64","65 and over"],
			datasets : [
				{
					fillColor : "#fde340",
					strokeColor : "rgba(0,0,0,1)",
					data : [1.1,44.3,47.6,6.7,0.3]
				}
			]
			
		};

var myLine = new Chart(document.getElementById("age").getContext("2d")).Bar(barChartData);



var doughnutData = [
				{
					value: 18, //female
					color:"#da4fe3"
				},
				{
					value : 81.6, //male
					color : "#2782fa"
				},
				{
					value : 0.5, //other
					color : "#fde340"
				},
			
			];

var myDoughnut = new Chart(document.getElementById("gender").getContext("2d")).Doughnut(doughnutData);

		var doughnutData = [
				{
					value: 4.6, 
					color:"#2782fa"
				},
				{
					value : 1.2,
					color : "#fff"
				},
				{
					value : 4.0, 
					color : "#fde340"
				},
				{
					value: 0.3, 
					color:"#fa921b"
				},
				{
					value : 87.1,
					color : "#5def3c"
				},
				{
					value : 2.8, 
					color : "#ffffc3"
				},
			
			];

var myDoughnut = new Chart(document.getElementById("ethnicity").getContext("2d")).Doughnut(doughnutData);
	
	
		var pieData = [
				{
					value: 39.4,
					color:"#2782fa"
				},
				{
					value : 10.9,
					color : "#fff"
				},
				{
					value : 10.8,
					color : "#fde340"
				},
				{
					value: 7.8,
					color:"#fa921b"
				},
				{
					value : 6.4,
					color : "#5def3c"
				},
				{
					value : 3.9,
					color : "#ffffc3"
				},
				{
					value: 3.6,
					color:"#da4fe3"
				},
				{
					value : 3.3,
					color : "#000"
				},
				{
					value : 3,
					color : "#8f19ba"
				},
				{
					value: 2.3,
					color:"#67beff"
				},
				{
					value : 1.9,
					color : "#5e117a"
				},
				{
					value : 1.7,
					color : "#1b7100"
				},
				{
					value: 1.4,
					color:"#5d3d00"
				},
				{
					value : 1,
					color : "#444"
				},
				{
					value : .8,
					color : "#aaa"
				},
				{
					value:  .8,
					color:"#ff00b8"
				},
				{
					value : .7,
					color : "#d7c398"
				},
				{
					value : .2,
					color : "#f00"
				}
			
			];

	var myPie = new Chart(document.getElementById("jobs").getContext("2d")).Pie(pieData);
	
		var chartData = [
			{
				value : 0.7,
				color: "#2782fa"
			},
			{
				value : 6.8,
				color: "#8f19ba"
			},
			{
				value : 19.4,
				color: "#fde340"
			},
			{
				value : 58.1,
				color: "#fa921b"
			},
			{
				value : 14.1,
				color: "#5def3c"
			},
			{
				value : 0.9,
				color: "#f00"
			}
		];
	var myPolarArea = new Chart(document.getElementById("education").getContext("2d")).PolarArea(chartData);
	
	var lineChartData = {
			labels : ["A lot","Some","A little","Not at all"],
			datasets : [
				{
					fillColor : "#2782fa",
					strokeColor : "rgba(0,0,0,1)",
					pointColor : "rgba(0,0,0,1)",

					pointStrokeColor : "#fff",
					data : [16.8,37.4,29.3,16.6]
				},

			]
			
		};

	var myLine = new Chart(document.getElementById("relevanceedu").getContext("2d")).Line(lineChartData);
	
	var lineChartData = {
			labels : ["A lot","Some","A little","Not at all"],
			datasets : [
				{
					fillColor : "#fa921b",
					strokeColor : "rgba(0,0,0,1)",
					pointColor : "rgba(0,0,0,1)",

					pointStrokeColor : "#fff",
					data : [44.4,41.5,11.1,2.9]
				}
			]
		};

	var myLine = new Chart(document.getElementById("excitedfield").getContext("2d")).Line(lineChartData);
	
	var lineChartData = {
			labels : ["A lot","Some","A little","Not at all"],
			datasets : [
				{
					fillColor : "rgba(39,130,250,0.5)",
					strokeColor : "rgba(0,0,0,1)",
					pointColor : "rgba(0,0,0,1)",

					pointStrokeColor : "#fff",
					data : [16.8,37.4,29.3,16.6]
				},
				{
					fillColor : "rgba(250,130,27,0.5)",
					strokeColor : "rgba(0,0,0,1)",
					pointColor : "rgba(0,0,0,1)",

					pointStrokeColor : "#fff",
					data : [44.4,41.5,11.1,2.9]
				}
			]
			
		};

	var myLine = new Chart(document.getElementById("relevancevexc").getContext("2d")).Line(lineChartData);
	
	
	var radarChartData = {
			labels : ["Less then a year","1 year","2 years","3 years","4 years","5 years","6 years","7 years","8 years","9 years","10 or more years"],
			datasets : [
				{
					fillColor : "#5def3c",
					strokeColor : "rgba(0,0,0,1)",
					pointColor : "rgba(0,0,0,1)",
					pointStrokeColor : "#fff",
					data : [7.3,6.4,10.8,1.3,9.1,11.0,7.3,5.8,5.4,2.5,23.2]
				},
			]
			
		}

	var myRadar = new Chart(document.getElementById("timeblogsite").getContext("2d")).Radar(radarChartData,{scaleShowLabels : false, pointLabelFontSize : 10});
	
	var pieData = [
				{
					value: 71.8,
					color:"#fa921b"
				},
				{
					value : 28.2,
					color : "#f00"
				},
			
			];

	var myPie = new Chart(document.getElementById("siteyn").getContext("2d")).Pie(pieData);

	

	
