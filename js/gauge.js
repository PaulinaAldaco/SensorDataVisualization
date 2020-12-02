var opts = {
  angle: 0.04, // The span of the gauge arc
  lineWidth: 0.3, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  staticLabels: {
      font: "10px sans-serif",  // Specifies font
      labels: [0, 20, 40, 60, 80, 100],  // Print labels at these values
      color: "#000000",  // Optional: Label text color
      fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  percentColors: [[0.0, "#a9d70b" ], [50, "#f9c802"], [80, "#ff0000"]]   // Make color react according to the position of the needle
  
};

//Gauge 1
var target1 = document.getElementById('myGauge1'); // your canvas element
var gauge1 = new Gauge(target1).setOptions(opts); // create sexy gauge!

gauge1.maxValue = 100; // set max gauge value
gauge1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 57; // set animation speed (32 is default value)


// //Gauge 2
// var target2 = document.getElementById('myGauge2'); // your canvas element
// var gauge2 = new Gauge(target2).setOptions(opts); // create sexy gauge!

// gauge2.maxValue = 100; // set max gauge value
// gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
// gauge2.animationSpeed = 57; // set animation speed (32 is default value)


// //Gauge 3
// var target3 = document.getElementById('myGauge3'); // your canvas element
// var gauge3 = new Gauge(target3).setOptions(opts); // create sexy gauge!

// gauge3.maxValue = 100; // set max gauge value
// gauge3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
// gauge3.animationSpeed = 57; // set animation speed (32 is default value)