data = [
    {}
  ]

  layout = 
  {
    "font": {
      "color": "darkgrey"
    },
    "paper_bgcolor": "rgba(0,0,0,0)",
    "plot_bgcolor": "rgba(0,0,0,0)",
    "margin": {
      "t": 10,
      "b": 40,
      "l": 40,
      "r": 10
    },
    "xaxis": {
      "type": "date",
      "domain": [
        0,
        0.92
      ],
      "showline": false,
      "zeroline": false
    },
    "bargap": 0.05,
    "grid": {
      "columns": 2,
      "pattern": "coupled",
      "rows": 1
    },
    "hoverinfo": "xy",
    "legend": {
      "orientation": "h",
      "x": 0.92,
      "xanchor": "right",
      "y": 1.2
    },
    "xaxis2": {
      "domain": [
        0.95,
        1
      ],
      "nticks": 3,
      "showgrid": false,
      "showline": false,
      "type": "linear",
      "zeroline": false,
      "zerolinecolor": "rgba(200,200,200,1)"
    },
    "yaxis": {
      "showline": false,
      "type": "linear",
      "zeroline": true
    }
  }

config = {
    "displayModeBar": false
  }


//console.log(data);
var trace_data = [];
var trace_data_dict = {};

var trace_hist = {
  y: data.series[0].fields[0].values.buffer,
  x: data.series[0].fields[1].values.buffer, 
  name: "histogram",
  hoverinfo: "x",
  type: "bar",
  orientation: "h", 
  xaxis: 'x2',
  yaxis: 'y1', 
  marker: {color: 'rgb(0,165,255)'}, 
  showlegend: false
};
var stepshape = 'hvh';
var tracecolors = {
  avg: {color: 'rgb(0,165,255)', width: 1, shape: stepshape}, 
  min: {color: 'rgb(168,224,255)', width: 0.5, shape: stepshape},
  max: {color: 'rgb(168,224,255)', width: 0.5, shape: stepshape}};

var idx = [1,2,3];
idx.forEach(s => {
  //console.log(s);
  var trace_time = {
    x: data.series[s].fields[0].values.buffer,
    y: data.series[s].fields[1].values.buffer, 
    name: data.series[s].name,
    line: tracecolors[data.series[s].name],
    xaxis: 'x1',
    yaxis: 'y1'
  };
  console.log(trace_time);
  trace_data_dict[data.series[s].name] = trace_time;
  //trace_data.push(trace_time);
});

trace_data_dict['max']['fill'] = "tonexty";
trace_data_dict['max']['name'] = "min-max";
trace_data_dict['min']['showlegend'] = false;
console.log(trace_data_dict);

trace_data.push(trace_data_dict['min']);
trace_data.push(trace_data_dict['max']);
trace_data.push(trace_data_dict['avg']);

trace_data.push(trace_hist);

return {data:trace_data,layout:{title:''}};
