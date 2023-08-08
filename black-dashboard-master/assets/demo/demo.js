type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Fan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

  initDashboardPageCharts: function() {

    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
    

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    var ctx = document.getElementById("chartLinePurple").getContext("2d");

var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(0,123,255,0.2)'); // light blue
gradientStroke.addColorStop(0.2, 'rgba(0,123,255,0.0)'); // light blue
gradientStroke.addColorStop(0, 'rgba(30,144,255,0)'); // blue

var data = {
  labels: ['Political Stability', 'Security Risk', 'Regulatory Risk', 'Infrastructure Quality', 'Al-Shabaab Risk'],
  datasets: [{
    label: "Data",
    backgroundColor: gradientStroke,
    borderColor: '#007bff', // blue
    pointBackgroundColor: '#1e90ff', // blue
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: '#1e90ff', // blue
    data: [56, 89, 76, 75, 95],
  }]
};

var myChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: {
    scale: {
      pointLabels: {
        fontSize: 12
      },
      angleLines: {
        display: false
      },
      ticks: {
        display: false,
        suggestedMin: 50,
        suggestedMax: 100
      }
    },
    legend: {
      display: false
    },
    tooltips: gradientChartOptionsConfigurationWithTooltipPurple.tooltips,
    responsive: true
  }
});;


var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

var gradientStroke = ctxGreen.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(66,134,121,0.2)'); // green color
gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); // green color
gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); // green color

var data = {
  labels: ['Al-Shabaab', 'Islamic State', 'SNA', 'Individual Crime(s)'],
  datasets: [{
    label: "By Initiating Actor",
    backgroundColor: ['rgba(66,134,121,0.2)', 'rgba(66,134,121,0.4)', 'rgba(66,134,121,0.6)', 'rgba(66,134,121,0.8)'],
    hoverBackgroundColor: gradientStroke,
    borderColor: '#00d6b4',
    borderWidth: 2,
    data: [90, 27, 60, 12], // Update this array with the actual data
  }]
};

var myChart = new Chart(ctxGreen, {
  type: 'pie',
  data: data,
  options: {
    plugins: {
      datalabels: {
        color: '#fff',
        display: 'auto',  // This will always display the labels
        font: {
          weight: 'bold'
        },
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex];
        }
      }
    
    },
    layout: {
      padding: {
        left: 26,  // Add space to the left
        right: 26,  // Add space to the right
      }
    },
    scales: {
      xAxes: [{
        display: false // This will hide x axis
      }],
      yAxes: [{
        display: false // This will hide y axis
      }]
    },
    legend: {
      display: false // This will hide the legend
    }
  }
});



    var chart_labels = ['MAY', 'JUN', 'JUL', 'SEP', 'OCT', 'NOV', 'DEC||', 'JAN', 'FEB', 'MAR', 'APR', 'MAY','JUN', "JUL"];
    var chart_data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100, 120, 100];


    var ctx = document.getElementById("chartBig1").getContext('2d');

var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(0,123,255,0.1)'); // light blue
gradientStroke.addColorStop(0.4, 'rgba(0,123,255,0.0)'); // light blue
gradientStroke.addColorStop(0, 'rgba(30,144,255,0)'); // blue

// Replace hardcoded data with randomly generated data that trends upwards
// Use Math.round to ensure all values are integers
var monthlyData = Array.from({length: 12}, (_, i) => Math.round(100 * Math.pow(1.05, i) + Math.floor(Math.random() * 50)));
var monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', '|Aug|', 'Sep', 'Oct', 'Nov', 'Dec'];

var weeklyData = Array.from({length: 52}, (_, i) => Math.round(30 * Math.pow(1.02, i) + Math.floor(Math.random() * 30)));
var weeklyLabels = [...Array(52)].map((_, i) => `Week ${i + 1}`);

var dailyData = Array.from({length: 30}, (_, i) => Math.round(10 * Math.pow(1.01, i) + Math.floor(Math.random() * 10)));
var dailyLabels = [...Array(30)].map((_, i) => `Day ${i + 1}`);







var config = {
  type: 'line',
  data: {
    labels: monthlyLabels,  // Initially display the monthly labels
    datasets: [{
      label: "Incidents",
      fill: true,
      backgroundColor: gradientStroke,
      borderColor: '#007bff', // blue
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: '#007bff', // blue
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: '#007bff', // blue
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: monthlyData,  // Initially display the monthly data
    }]
  },
  options: gradientChartOptionsConfigurationWithTooltipPurple
};

var myChartData = new Chart(ctx, config);

// Update the chart's data and labels when each button is clicked
$("#0").click(function() {
  var data = myChartData.config.data;
  data.datasets[0].data = monthlyData;
  data.labels = monthlyLabels;
  // Update min and max
  myChartData.options.scales.yAxes[0].ticks.min = Math.min(...monthlyData);
  myChartData.options.scales.yAxes[0].ticks.max = Math.max(...monthlyData);
  myChartData.update();

  // update title
  document.getElementById("chartTitle").innerHTML = "Monthly Incidents in 2023";
});

$("#1").click(function() {
  var data = myChartData.config.data;
  data.datasets[0].data = weeklyData;
  data.labels = weeklyLabels;
  // Update min and max
  myChartData.options.scales.yAxes[0].ticks.min = Math.min(...weeklyData);
  myChartData.options.scales.yAxes[0].ticks.max = Math.max(...weeklyData);
  myChartData.update();

  // update title
  document.getElementById("chartTitle").innerHTML = "Weekly Incidents in 2023";
});

$("#2").click(function() {
  var data = myChartData.config.data;
  data.datasets[0].data = dailyData;
  data.labels = dailyLabels;
  // Update min and max
  myChartData.options.scales.yAxes[0].ticks.min = Math.min(...dailyData);
  myChartData.options.scales.yAxes[0].ticks.max = Math.max(...dailyData);
  myChartData.update();

  // update title
  document.getElementById("chartTitle").innerHTML = "Daily Incidents in December 2023";
});

    

    var ctx = document.getElementById("CountryChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(255,0,0,0.2)'); // red color
    gradientStroke.addColorStop(0.4, 'rgba(255,0,0,0.0)'); // red color
    gradientStroke.addColorStop(0, 'rgba(255,0,0,0)'); // red color


    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['SA & Light Weapons', 'Explosives', 'IED', 'Arrest'].slice(0, 4),
        datasets: [{
          label: "Incident Type",
          backgroundColor: ['rgba(255,0,0,0.2)', 'rgba(255,0,0,0.4)', 'rgba(255,0,0,0.6)', 'rgba(255,0,0,0.8)'].slice(0, 4),
          hoverBackgroundColor: gradientStroke,
          borderColor: 'red',
          borderWidth: 2,
          data: [90, 20, 10, 30].slice(0, 4),
        }]
      },
      options: {
        layout: {
          padding: {
            left: 26,  // Add space to the left
            right: 26,  // Add space to the right
          }
        },
        legend: {
          display: false // This will hide the legend
        },
        scales: {
          xAxes: [{
            display: false // This will hide x axis
          }],
          yAxes: [{
            display: false // This will hide y axis
          }]
        }
      }
    });

   
    
  },

  

  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8ec3b9"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1a3646"
          }]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#64779e"
          }]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#334e87"
          }]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6f9ba5"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3C7680"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#304a7d"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#2c6675"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#b0d5ce"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3a4762"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#0e1626"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#4e6d70"
          }]
        }
      ]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  showNotification: function(from, align) {
    color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "tim-icons icon-bell-55",
      message: "Welcome to <b>BDI Dashboard</b> - Business Operating System."

    }, {
      type: type[color],
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};

