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
      }
    },
    series: series,
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
