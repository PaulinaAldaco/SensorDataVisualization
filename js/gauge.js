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
      labels: [0, 100, 200, 300, 400, 500],  // Print labels at these values
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
  percentColors: [[0.0, "#a9d70b" ], [200, "#f9c802"], [400, "#ff0000"]]   // Make color react according to the position of the needle
  
};

var target = document.getElementById('myGauge'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!

gauge.maxValue = 500; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 57; // set animation speed (32 is default value)



