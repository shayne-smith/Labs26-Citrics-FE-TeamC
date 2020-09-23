import React from "react";
import Plot from "react-plotly.js";

import CityCard from "./CityCard.js";

const ComparisonViz = props => {
  return (
    <>
      <div className="comparison-container">
        <h3 id="comparison-header">City Comparison</h3>
        <div className="card-list">
          <Plot
            data={props.data}
            layout={{ width: 320, height: 240, title: "Housing Data" }}
          />
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" }
              },
              { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
            ]}
            layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
          />
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" }
              },
              { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
            ]}
            layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
          />
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" }
              },
              { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
            ]}
            layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
          />
        </div>
      </div>
    </>
  );
};

export default ComparisonViz;
