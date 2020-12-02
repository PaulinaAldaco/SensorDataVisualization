
// Create Chart with no data
var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],         // Labels are empty
        datasets: [{
            label: 'Distance [mm]',
            data: [],       // Data is empty Adding it later, allows to see a pretty animation!
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',     
            borderWidth: 1,
            lineTension: 0
        }]
    },
    options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
            display: true,
            text: 'Distancia'
        },
        scales: {
        }
    }
});

// Function to add new data to a chart
function addData(chart, label, data) 
{
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => 
    {
        dataset.data.push(data);
    });
    chart.update();
}

// Plot all the data at the database
$.ajax(
    '../data/all_temp_3.php',
    {
        success: function(data) {
            var jsonData = JSON.parse(data);
            var sensor1Data ;    // equivalent to sensor1Value
            var sensor2Data ;    // equivalent to sensor2Value
            var sensorTime ;    // converts timestamp to time (used as label)
            for(row in jsonData){
                // Extract sensor1Data
                sensor1Data = jsonData[row]['sensor1Value'];
                sensor2Data = jsonData[row]['sensor2Value'];
                // Extract time from timestamp
                sensorTime = new Date(jsonData[row]['timestamp']).toLocaleTimeString();
                // Add data to chart
                addData(myChart3, sensorTime, sensor1Data);
            }
            gauge.set(sensor2Data); // set value of the gauge to the last value of sensor2Value
        },
        error: function() {
          console.log('There was some error performing the AJAX call!');
        }
     }
  );
  

  // Every 0.5s check for new data
  function fetchLastData(){
    $.ajax(
        '../data/last_temp_3.php',
        {
            success: function(data) {
                var jsonData = JSON.parse(data);
                var sensor1Data = jsonData[0]['sensor1Value']; 
                var sensor2Data = jsonData[0]['sensor2Value']; 
                var sensorTime = new Date(jsonData[0]['timestamp']).toLocaleTimeString();   
                /* 
                Use the last time the sensor was updated, and compare that time with
                last record time. If different, update table.
    
                This technique is for demonstration purposes. A better way, should be 
                add another field at the database and update it when data was added to chart.
                */
                if(myChart3.data.labels[myChart3.data.labels.length - 1] === sensorTime)
                {
                    // Do nothing
                    console.log('No new data');
                }
                else
                {
                    // Add new record to chart
                    addData(myChart3, sensorTime, sensor1Data);
                    gauge.set(sensor2Data); // set actual value
                }
    
            },
            error: function() {
              console.log('There was some error performing the AJAX call!');
            }
        }
    );
  }
  
setInterval(function(){ 
    fetchLastData(); 
}, 500);
