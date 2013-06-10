var lineChartData={labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{fillColor:"rgba(255, 0, 0, 0.55)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",data:[32.7,39.8,51.1,64.1,70.3,77.2,84.4,84.9,74.9,61.2,43.9,33.6]},{fillColor:" rgba(255, 255, 0, 0.55)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",data:[27.3,33,41.9,50.9,59.9,66.4,72.5,72.6,63.1,50.9,37.9,28.8]},{fillColor:" rgba(0, 0, 255, 0.75)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",data:[21.9,26.1,32.7,40.3,48.4,55.6,60.6,60.3,51.2,40.5,31.9,24]}]},myLine=(new Chart(document.getElementById("tempavgmon").getContext("2d"))).Line(lineChartData),doughnutData=[{value:25,color:"#F7464A"},{value:156,color:"#46BFBD"},{value:180,color:"#FDB45C"},{value:4,color:"#949FB1"}],myDoughnut=(new Chart(document.getElementById("freezeornot").getContext("2d"))).Doughnut(doughnutData),barChartData={labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,1)",data:[13,10,9,7,7,7,3,3,4,7,11,11]}]},myLine=(new Chart(document.getElementById("daysofprec").getContext("2d"))).Bar(barChartData);