data = [
    {
      "line": {
        "color": "red",
        "width": 2
      },
      "marker": {
        "color": "rgba(255,0,0,0.35)",
        "line": {
          "color": "red",
          "width": 0.5
        },
        "size": 5
      },
      "mode": "markers",
      "type": "scatter"
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
      "r": 35
    },
    "xaxis": {
      "type": "linear",
      "mirror": "all",
      "showline": true,
      "ticks": "inside"
    },
    "automargin": false,
    "hovermode": "closest",
    "modebar": {
      "bgcolor": "white",
      "orientation": "v"
    },
    "yaxis": {
      "mirror": "all",
      "showline": true,
      "ticks": "inside",
      "type": "linear"
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
    ]
  }


  console.log(data)
//var format1 = d3.timeFormat("%A");
//console.log(data.series[0].fields[0].values.buffer.map(x => new Date(x).toUTCString()))


var trace = {
  x: data.series[0].fields[2].values.buffer,
  y: data.series[0].fields[1].values.buffer,
  text: data.series[0].fields[0].values.buffer.map(x => new Date(x).toUTCString()),
  hovertemplate: "(%{x}, %{y})<br>%{text}<extra></extra>",
  hoverinfo: "x+y"
};
//  hovertemplate: "(%{x}, %{y})<br>%{text|%Y-%m-%d %H:%M:%S%Z}<extra></extra>",


var layout_props = {
  title: '',
  xaxis: {
    title: data.series[0].fields[2].labels.name
  },
  yaxis: {
    title: data.series[0].fields[1].labels.name
  }

}

return {data:[trace],layout:layout_props};
