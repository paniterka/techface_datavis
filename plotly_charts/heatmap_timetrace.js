data = [
    {
      "colorbar": {
        "len": 0.5,
        "thickness": 10,
        "y": 0.25,
        "ypad": 0
      },
      "colorscale": "YlGnBu",
      "reversescale": true,
      "type": "heatmap",
      "zmin": 0
    }
  ]


  layout = {
    "font": {
      "color": "darkgrey"
    },
    "paper_bgcolor": "rgba(0,0,0,0)",
    "plot_bgcolor": "rgba(0,0,0,0)",
    "margin": {
      "t": 10,
      "b": 40,
      "l": 150
    },
    "xaxis": {
      "type": "date"
    },
    "modebar": {
      "bgcolor": "white",
      "orientation": "v"
    },
    "yaxis": {
      "tickfont": {
        "size": 8
      }
    }
  }

config = {
    "displayModeBar": true,
    "displaylogo": false,
    "modeBarButtonsToRemove": [
      "select2d",
      "lasso2d",
      "zoomIn2d",
      "zoomOut2d",
      "autoScale2d",
      "hoverClosestCartesian",
      "hoverCompareCartesian",
      "zoom3d",
      "pan3d",
      "hoverClosest3d",
      "orbitRotation",
      "tableRotation",
      "zoomInGeo",
      "zoomOutGeo",
      "hoverClosestGeo",
      "sendDataToCloud",
      "hoverClosestGl2d",
      "hoverClosestPie",
      "toggleHover",
      "toggleSpikelines"
    ],
    "toImageButtonOptions": {
      "height": 750,
      "scale": 4,
      "width": 1500
    }
  }

  // script 

  //console.log(data.series);
//var num_series = data.series.length;
//var trs = [];
var x = [], y = [], z = [];
for (s in data.series){
  x.push(data.series[s].fields[0].values.buffer);
  y.push(data.series[s].name);
  z.push(data.series[s].fields[1].values.buffer);
};
//console.log(x);

var trace = {
  x: data.series[0].fields[0].values.buffer,
  y: y,
  z: z
};
//console.log(trace)
return {data:[trace],layout:{title:''}};



