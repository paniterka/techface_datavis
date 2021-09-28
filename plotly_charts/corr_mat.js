var data = [
    {
      "reversescale": true,
      "type": "heatmap",
      "xgap": 0.5,
      "ygap": 0.5,
      "zmax": 1,
      "zmin": -1
    }
  ]

var layout = {
    "font": {
      "color": "darkgrey"
    },
    "paper_bgcolor": "rgba(0,0,0,0)",
    "plot_bgcolor": "rgba(0,0,0,0)",
    "margin": {
      "t": 30,
      "b": 140,
      "l": 140
    },
    "xaxis": {
      "type": "category",
      "constraintoward": "left",
      "scaleanchor": "y",
      "showgrid": false,
      "tickfont": {
        "size": 8
      }
    },
    "yaxis": {
      "autorange": "reversed",
      "showgrid": false,
      "side": "left",
      "tickfont": {
        "size": 8
      },
      "type": "category"
    }
  }

  var config = {
    "displayModeBar": false
  }



const pcorr = (x, y) => {
  var sumX = 0,
    sumY = 0,
    sumXY = 0,
    sumX2 = 0,
    sumY2 = 0;
  const minLength = x.length = y.length = Math.min(x.length, y.length),
    reduce = (xi, idx) => {
      const yi = y[idx];
      sumX += xi;
      sumY += yi;
      sumXY += xi * yi;
      sumX2 += xi * xi;
      sumY2 += yi * yi;
    }
  x.forEach(reduce);
  return (minLength * sumXY - sumX * sumY) / Math.sqrt((minLength * sumX2 - sumX * sumX) * (minLength * sumY2 - sumY * sumY));
};

var thr = 0.5;

var x = [], y = [], z = [];

var corrmatrix = [];
var row = [];
var v1 = [], v2 = [];
var corrval = 0;
for (s1 in data.series){
  var row = [];
  v1 = data.series[s1].fields[1].values.buffer;
  for (s2 in data.series){
      v2 = data.series[s2].fields[1].values.buffer;
      corrval = pcorr(v1, v2);
      if (Math.abs(corrval)>=thr){
        row.push(corrval);
      } else {
        row.push(0);
      };
    };
  corrmatrix.push(row);
  y.push(data.series[s1].name);
  };
//console.log(corrmatrix);


var trace = {
  x: y,
  y: y,
  z: corrmatrix
};
//console.log(trace)
return {data:[trace],layout:{title:''}};
  
