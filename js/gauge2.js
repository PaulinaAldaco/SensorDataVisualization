var opts = {
    angle: 0.04, // The span of the gauge arc
    lineWidth: 0.3, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#35b59d' // Fill color
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
    percentColors: [[0.0, "#0ee827" ], [50, "#e8dd0e"], [80, "#9e213e"]]   // Make color react according to the position of the needle
    
  };
  
 //Gauge 2
 var target2 = document.getElementById('myGauge2'); // your canvas element
 var gauge2 = new Gauge(target2).setOptions(opts); // create sexy gauge!

 gauge2.maxValue = 100; // set max gauge value
 gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
 gauge2.animationSpeed = 57; // set animation speed (32 is default value)