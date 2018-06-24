// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .



// Pie Charts


const PieChart = (container, title, series) => {
  return new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: title
    },
    series: series
  })
}

const pieCharts = [
  {
    title: 'Income vs Expenditure - Last 30 Days',
    data: [
      {
        name: 'Income',
        color: 'black',
        y: 3713.79
      },
      {
        name: 'Expenditure',
        color: 'red',
        y: 4062.45
      }
    ]
  },
  {
    title: 'Income vs Expenditure - Last 90 Days',
    data: [
      {
        name: 'Income',
        color: 'black',
        y: 9056.58
      },
      {
        name: 'Expenditure',
        color: 'red',
        y: 8650.44
      }
    ]
  }
]

const generateOverviewPieCharts = (pieCharts) => {
  pieCharts.forEach((chart, index) => {
    createPieChart(chart.data, index, chart.title, 'overview-charts-container')
  })
}

const createPieChart = (data, index, title, parentId) => {
  const id = `pie-chart-${index}`
  const className = 'pie-chart'
  const chartDiv = createDiv(id, className)
  const parent = document.getElementById(parentId)
  parent.appendChild(chartDiv)

  const container = document.querySelector('#' + id)
  const series = [{
    name: title,
    data: []
  }]
  data.forEach((item) => {
    series[0].data.push(item)
  })
  return PieChart(container, title, series)
}

var createDiv = function (id, className, divText) {
  var newDiv = document.createElement('div')
  newDiv.classList.add(className)
  newDiv.id = id
  newDiv.innerText = divText
  return newDiv
}


// Line Charts


const LineChart = (container, title, subtitle, yAxis, series, maxWidth = 500) => {
  return new Highcharts.Chart(container, {
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: yAxis
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        // pointStart: pointStart
      }
    },
    series: series,
    // series: [
    //   {
    //     name: 'Installation',
    //     data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    //   },
    // ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: maxWidth
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  });
}

const lineCharts = [
  {
    title: 'Income vs Expenditure',
    subtitle: 'Since January 2018',
    yAxis: 'GBP (£)',
    series: [
      {
        name: 'Income',
        data: [ 1934, 1903, 1877, 1858, 1831, 1931, 1833 ],
        color: 'black',
      },
      {
        name: 'Expenditure',
        data: [ 1416, 1864, 2042, 1551, 1490, 1682, 1721 ],
        color: 'red',
      },
      {
        name: 'Disposable',
        data: [ 1934-1416, 1903-1864, 1877-2042, 1858-1551, 1831-1490, 1931-1682, 1833-1721 ],
        color: 'blue',
      },
    ],
    // pointStart: 'Jan',
  }
]

const generateOverviewLineCharts = (lineCharts) => {
  lineCharts.forEach((chart, index) => {
      createLineChart(chart, index, 'overview-charts-container')
  })
}

const createLineChart = (chart, index, parentId) => {
  const id = `line-chart-${index}`
  const className = 'line-chart'
  const chartDiv = createDiv(id, className)
  const parent = document.getElementById(parentId)
  parent.appendChild(chartDiv)

  const container = document.querySelector('#' + id)
  const { title, subtitle, yAxis, series } = chart;
  return LineChart(container, title, subtitle, yAxis, series)
}

// const createLineChart = () => {
//   Highcharts.chart('line-chart-container', {
//
//     title: {
//       text: 'Solar Employment Growth by Sector, 2010-2016'
//     },
//
//     subtitle: {
//       text: 'Source: thesolarfoundation.com'
//     },
//
//     yAxis: {
//       title: {
//         text: 'Number of Employees'
//       }
//     },
//     legend: {
//       layout: 'vertical',
//       align: 'right',
//       verticalAlign: 'middle'
//     },
//
//     plotOptions: {
//       series: {
//         label: {
//           connectorAllowed: false
//         },
//         pointStart: 2010
//       }
//     },
//
//     series: [{
//       name: 'Installation',
//       data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
//     }, {
//       name: 'Manufacturing',
//       data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
//     }, {
//       name: 'Sales & Distribution',
//       data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//     }, {
//       name: 'Project Development',
//       data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
//     }, {
//       name: 'Other',
//       data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
//     }],
//
//     responsive: {
//       rules: [{
//         condition: {
//           maxWidth: 500
//         },
//         chartOptions: {
//           legend: {
//             layout: 'horizontal',
//             align: 'center',
//             verticalAlign: 'bottom'
//           }
//         }
//       }]
//     }
//
//   });
// }


// Bar charts


const BarChart = (container, title, series, yAxis) => {
  return new Highcharts.chart(container, {
    chart: {
        type: 'column'
    },
    title: {
        text: title
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: yAxis
      }
    },
    credits: {
        enabled: false
    },
    series: series
  });
}

const barCharts = [
  {
    title: 'Income vs Expenditure',
    subtitle: 'Since January 2018',
    yAxis: 'GBP (£)',
    series: [
      {
        name: 'Income',
        data: [ 1934, 1903, 1877, 1858, 1831, 1931, 1833 ],
        color: 'black',
      },
      {
        name: 'Expenditure',
        data: [ 1416, 1864, 2042, 1551, 1490, 1682, 1721 ],
        color: 'red',
      },
      {
        name: 'Disposable',
        data: [ 1934-1416, 1903-1864, 1877-2042, 1858-1551, 1831-1490, 1931-1682, 1833-1721 ],
        color: 'blue',
      },
    ],
  }
]

const generateOverviewBarCharts = (barCharts) => {
  barCharts.forEach((chart, index) => {
      createBarChart(chart, index, 'overview-charts-container')
  })
}

const createBarChart = (chart, index, parentId) => {
  const id = `bar-chart-${index}`
  const className = 'bar-chart'
  const chartDiv = createDiv(id, className)
  const parent = document.getElementById(parentId)
  parent.appendChild(chartDiv)

  const container = document.querySelector('#' + id)
  const { title, series, yAxis } = chart;
  return BarChart(container, title, series, yAxis)
}


var app = function () {
  generateOverviewPieCharts(pieCharts)
  generateOverviewLineCharts(lineCharts)
  generateOverviewBarCharts(barCharts)
}

window.addEventListener('load', app)
