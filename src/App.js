
import './App.css';
import React from 'react';
import { Vega  } from 'react-vega';


class App extends React.Component {
  constructor() {
    super();
    
    this._handleNewDataClick = this._handleNewDataClick.bind(this);

    this.state={selectValue:'stacked'}
  }

  componentWillMount() {
    
  }


  // handler to change the chart data to a new set of random numbers
  _handleNewDataClick() {
    // const { actions } = this.props;
    // actions.setChartData(this._generateData());
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({selectValue:event.target.value});
  }
  
  handleSignals(...args){
    console.log(args[1]['Month'][0])
    // console.log(args[1]._vgsid_[0]); // Inverse engeneering
  }
  

  render() {
    return (
      <div className="App">
        <h1>Dashboard</h1>
        <h2>
          Line Chart
        </h2>
        <Vega spec="http://localhost:8000/"/>
      </div>
    );
  };
  
}


// const stacked={
//   "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
//   "config": {
//     "view": {
//       "continuousHeight": 300,
//       "continuousWidth": 400
//     }
//   },
//   "data": {
//     "name": "data-e60d506bc4a17d2c711c95d9f5450163"
//   },
//   "datasets": {
//     "data-e60d506bc4a17d2c711c95d9f5450163": [
//       {
//         "Area": "Membership",
//         "Month": "Jan",
//         "Net Sales": 100
//       },
//       {
//         "Area": "Membership",
//         "Month": "Feb",
//         "Net Sales": 120
//       },
//       {
//         "Area": "Membership",
//         "Month": "Mar",
//         "Net Sales": 110
//       },
//       {
//         "Area": "Membership",
//         "Month": "Apr",
//         "Net Sales": 115
//       },
//       {
//         "Area": "Membership",
//         "Month": "May",
//         "Net Sales": 130
//       },
//       {
//         "Area": "Membership",
//         "Month": "Jun",
//         "Net Sales": 120
//       },
//       {
//         "Area": "Membership",
//         "Month": "Jul",
//         "Net Sales": 110
//       },
//       {
//         "Area": "Membership",
//         "Month": "Aug",
//         "Net Sales": 100
//       },
//       {
//         "Area": "Membership",
//         "Month": "Sep",
//         "Net Sales": 120
//       },
//       {
//         "Area": "Membership",
//         "Month": "Oct",
//         "Net Sales": 110
//       },
//       {
//         "Area": "Membership",
//         "Month": "Nov",
//         "Net Sales": 115
//       },
//       {
//         "Area": "Membership",
//         "Month": "Dec",
//         "Net Sales": 130
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Jan",
//         "Net Sales": 50
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Feb",
//         "Net Sales": 60
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Mar",
//         "Net Sales": 75
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Apr",
//         "Net Sales": 40
//       },
//       {
//         "Area": "Marketing",
//         "Month": "May",
//         "Net Sales": 55
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Jun",
//         "Net Sales": 60
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Jul",
//         "Net Sales": 70
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Aug",
//         "Net Sales": 75
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Sep",
//         "Net Sales": 40
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Oct",
//         "Net Sales": 55
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Nov",
//         "Net Sales": 75
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Dec",
//         "Net Sales": 40
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Jan",
//         "Net Sales": 100
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Feb",
//         "Net Sales": 120
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Mar",
//         "Net Sales": 110
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Apr",
//         "Net Sales": 110
//       },
//       {
//         "Area": "SNAP",
//         "Month": "May",
//         "Net Sales": 100
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Jun",
//         "Net Sales": 120
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Jul",
//         "Net Sales": 110
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Aug",
//         "Net Sales": 115
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Sep",
//         "Net Sales": 110
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Oct",
//         "Net Sales": 100
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Nov",
//         "Net Sales": 120
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Dec",
//         "Net Sales": 110
//       },
//       {
//         "Area": "others",
//         "Month": "Jan",
//         "Net Sales": 0
//       },
//       {
//         "Area": "others",
//         "Month": "Feb",
//         "Net Sales": 30
//       },
//       {
//         "Area": "others",
//         "Month": "Mar",
//         "Net Sales": 20
//       },
//       {
//         "Area": "others",
//         "Month": "Apr",
//         "Net Sales": 10
//       },
//       {
//         "Area": "others",
//         "Month": "May",
//         "Net Sales": 30
//       },
//       {
//         "Area": "others",
//         "Month": "Jun",
//         "Net Sales": 40
//       },
//       {
//         "Area": "others",
//         "Month": "Jul",
//         "Net Sales": 50
//       },
//       {
//         "Area": "others",
//         "Month": "Aug",
//         "Net Sales": 20
//       },
//       {
//         "Area": "others",
//         "Month": "Sep",
//         "Net Sales": 20
//       },
//       {
//         "Area": "others",
//         "Month": "Oct",
//         "Net Sales": 20
//       },
//       {
//         "Area": "others",
//         "Month": "Nov",
//         "Net Sales": 30
//       },
//       {
//         "Area": "others",
//         "Month": "Dec",
//         "Net Sales": 10
//       }
//     ]
//   },
//   "encoding": {
//     "color": {
//       "field": "Area",
//       "type": "nominal"
//     },
//     "x": {
//       "field": "Month",
//       "sort": [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec"
//       ],
//       "type": "nominal"
//     },
//     "y": {
//       "aggregate": "sum",
//       "field": "Net Sales",
//       "type": "quantitative"
//     }
//   },
//   "height": 250,
//   "mark": {
//     "size": 20,
//     "type": "bar",
//     "tooltip": true
//   },
//   "selection": {
//     "selector001": {
//       "bind": "scales",
//       "encodings": [
//         "x",
//         "y"
//       ],
//       "type": "interval"
//     }
//   },
//   "width": 1000
// }

// const bar = {
//   "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
//   "config": {
//     "view": {
//       "continuousHeight": 300,
//       "continuousWidth": 400
//     }
//   },
//   "data": {
//     "name": "data-e60d506bc4a17d2c711c95d9f5450163"
//   },
//   "datasets": {
//     "data-e60d506bc4a17d2c711c95d9f5450163": [
//       {
//         "Area": "Membership",
//         "Month": "Jan",
//         "Net Sales": 100
//       },
//       {
//         "Area": "Membership",
//         "Month": "Feb",
//         "Net Sales": 120
//       },
//       {
//         "Area": "Membership",
//         "Month": "Mar",
//         "Net Sales": 110
//       },
//       {
//         "Area": "Membership",
//         "Month": "Apr",
//         "Net Sales": 115
//       },
//       {
//         "Area": "Membership",
//         "Month": "May",
//         "Net Sales": 130
//       },
//       {
//         "Area": "Membership",
//         "Month": "Jun",
//         "Net Sales": 120
//       },
//       {
//         "Area": "Membership",
//         "Month": "Jul",
//         "Net Sales": 110
//       },
//       {
//         "Area": "Membership",
//         "Month": "Aug",
//         "Net Sales": 100
//       },
//       {
//         "Area": "Membership",
//         "Month": "Sep",
//         "Net Sales": 120
//       },
//       {
//         "Area": "Membership",
//         "Month": "Oct",
//         "Net Sales": 110
//       },
//       {
//         "Area": "Membership",
//         "Month": "Nov",
//         "Net Sales": 115
//       },
//       {
//         "Area": "Membership",
//         "Month": "Dec",
//         "Net Sales": 130
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Jan",
//         "Net Sales": 50
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Feb",
//         "Net Sales": 60
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Mar",
//         "Net Sales": 75
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Apr",
//         "Net Sales": 40
//       },
//       {
//         "Area": "Marketing",
//         "Month": "May",
//         "Net Sales": 55
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Jun",
//         "Net Sales": 60
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Jul",
//         "Net Sales": 70
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Aug",
//         "Net Sales": 75
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Sep",
//         "Net Sales": 40
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Oct",
//         "Net Sales": 55
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Nov",
//         "Net Sales": 75
//       },
//       {
//         "Area": "Marketing",
//         "Month": "Dec",
//         "Net Sales": 40
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Jan",
//         "Net Sales": 100
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Feb",
//         "Net Sales": 120
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Mar",
//         "Net Sales": 110
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Apr",
//         "Net Sales": 110
//       },
//       {
//         "Area": "SNAP",
//         "Month": "May",
//         "Net Sales": 100
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Jun",
//         "Net Sales": 120
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Jul",
//         "Net Sales": 110
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Aug",
//         "Net Sales": 115
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Sep",
//         "Net Sales": 110
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Oct",
//         "Net Sales": 100
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Nov",
//         "Net Sales": 120
//       },
//       {
//         "Area": "SNAP",
//         "Month": "Dec",
//         "Net Sales": 110
//       },
//       {
//         "Area": "others",
//         "Month": "Jan",
//         "Net Sales": 0
//       },
//       {
//         "Area": "others",
//         "Month": "Feb",
//         "Net Sales": 30
//       },
//       {
//         "Area": "others",
//         "Month": "Mar",
//         "Net Sales": 20
//       },
//       {
//         "Area": "others",
//         "Month": "Apr",
//         "Net Sales": 10
//       },
//       {
//         "Area": "others",
//         "Month": "May",
//         "Net Sales": 30
//       },
//       {
//         "Area": "others",
//         "Month": "Jun",
//         "Net Sales": 40
//       },
//       {
//         "Area": "others",
//         "Month": "Jul",
//         "Net Sales": 50
//       },
//       {
//         "Area": "others",
//         "Month": "Aug",
//         "Net Sales": 20
//       },
//       {
//         "Area": "others",
//         "Month": "Sep",
//         "Net Sales": 20
//       },
//       {
//         "Area": "others",
//         "Month": "Oct",
//         "Net Sales": 20
//       },
//       {
//         "Area": "others",
//         "Month": "Nov",
//         "Net Sales": 30
//       },
//       {
//         "Area": "others",
//         "Month": "Dec",
//         "Net Sales": 10
//       }
//     ]
//   },
//   "encoding": {
//     "color": {
//       "field": "Area",
//       "type": "nominal"
//     },
//     "column": {
//       "field": "Month",
//       "sort": [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec"
//       ],
//       "type": "nominal"
//     },
//     "x": {
//       "field": "Area",
//       "title": "",
//       "type": "nominal"
//     },
//     "y": {
//       "aggregate": "sum",
//       "field": "Net Sales",
//       "type": "quantitative"
//     }
//   },
//   "mark": {
//     "type": "bar",
//     "tooltip": true
//   },
//   "selection": {
//     "selector001": {
//       "bind": "scales",
//       "encodings": [
//         "x",
//         "y"
//       ],
//       "type": "interval"
//     }
//   }
// }


// const line = {
//   "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
//   "config": {
//     "view": {
//       "continuousHeight": 300,
//       "continuousWidth": 400
//     }
//   },
//   "data": {
//     "name": "data-9dd71d66887bb596e5ae3e1268deb798"
//   },
//   "datasets": {
//     "data-9dd71d66887bb596e5ae3e1268deb798": [
//       {
//         "Budget": 260,
//         "LY ": 255,
//         "Month": "Jan",
//         "NetSales": 250,
//         "index_col": 0
//       },
//       {
//         "Budget": 340,
//         "LY ": 335,
//         "Month": "Feb",
//         "NetSales": 330,
//         "index_col": 1
//       },
//       {
//         "Budget": 325,
//         "LY ": 320,
//         "Month": "Mar",
//         "NetSales": 315,
//         "index_col": 2
//       },
//       {
//         "Budget": 260,
//         "LY ": 250,
//         "Month": "Apr",
//         "NetSales": 275,
//         "index_col": 3
//       },
//       {
//         "Budget": 320,
//         "LY ": 325,
//         "Month": "May",
//         "NetSales": 315,
//         "index_col": 4
//       },
//       {
//         "Budget": 335,
//         "LY ": 320,
//         "Month": "Jun",
//         "NetSales": 340,
//         "index_col": 5
//       },
//       {
//         "Budget": 345,
//         "LY ": 340,
//         "Month": "Jul",
//         "NetSales": 340,
//         "index_col": 6
//       },
//       {
//         "Budget": 310,
//         "LY ": 315,
//         "Month": "Aug",
//         "NetSales": 310,
//         "index_col": 7
//       },
//       {
//         "Budget": 300,
//         "LY ": 300,
//         "Month": "Sep",
//         "NetSales": 290,
//         "index_col": 8
//       },
//       {
//         "Budget": 295,
//         "LY ": 285,
//         "Month": "Oct",
//         "NetSales": 285,
//         "index_col": 9
//       },
//       {
//         "Budget": 350,
//         "LY ": 345,
//         "Month": "Nov",
//         "NetSales": 340,
//         "index_col": 10
//       },
//       {
//         "Budget": 385,
//         "LY ": 340,
//         "Month": "Dec",
//         "NetSales": 290,
//         "index_col": 11
//       }
//     ]
//   },
//   "layer": [
//     {
//       "encoding": {
//         "color": {
//           "value": "blue"
//         },
//         "order": {
//           "field": "index_col",
//           "type": "quantitative"
//         },
//         "x": {
//           "field": "Month",
//           "sort": null,
//           "type": "nominal"
//         },
//         "y": {
//           "field": "NetSales",
//           "type": "quantitative"
//         }
//       },
//       "height": 250,
//       "mark": {
//         "point": true,
//         "type": "line",
//         "tooltip": true
//       },
//       "selection": {
//         "selector001": {
//           "bind": "scales",
//           "encodings": [
//             "x",
//             "y"
//           ],
//           "type": "interval"
//         }
//       },
//       "title": "Mem Mix Vs Base Line",
//       "width": 1000
//     },
//     {
//       "encoding": {
//         "color": {
//           "value": "green"
//         },
//         "order": {
//           "field": "index_col",
//           "type": "quantitative"
//         },
//         "x": {
//           "field": "Month",
//           "sort": null,
//           "type": "nominal"
//         },
//         "y": {
//           "field": "Budget",
//           "type": "quantitative"
//         }
//       },
//       "height": 250,
//       "mark": {
//         "point": true,
//         "type": "line",
//         "tooltip": true
//       },
//       "selection": {
//         "selector002": {
//           "bind": "scales",
//           "encodings": [
//             "x",
//             "y"
//           ],
//           "type": "interval"
//         }
//       },
//       "width": 500
//     },
//     {
//       "encoding": {
//         "color": {
//           "value": "red"
//         },
//         "order": {
//           "field": "index_col",
//           "type": "quantitative"
//         },
//         "x": {
//           "field": "Month",
//           "sort": null,
//           "type": "nominal"
//         },
//         "y": {
//           "field": "LY ",
//           "type": "quantitative"
//         }
//       },
//       "mark": {
//         "point": true,
//         "type": "line",
//         "tooltip": true
//       },
//       "selection": {
//         "selector003": {
//           "bind": "scales",
//           "encodings": [
//             "x",
//             "y"
//           ],
//           "type": "interval"
//         }
//       }
//     }
//   ]
// }
export default App;
