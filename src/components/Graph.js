import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const yAxis = ["0", "500", "1,500", "2,000", "2,500", "3,000", "3,500"]
const xAxis = ["$1M", "$1.5M", "$2M", "$2.5M", "$3M", "$3.5M", "$4M", "$4.5M", "$5M"]

const ChartContainer = () => (
  <>
  
    <div className="chart-container">
      <ArrowBackIosIcon className="top-arrow"/>
      <ArrowForwardIosIcon />
      <div className="x-axis">
        {
          xAxis.map((x) => <p> {x} </p>)
        }
      </div>

      <div className="y-axis">
        {
          yAxis.map((y) => <p> {y} </p>)
        }
      </div>
    </div>
  </>
)

export default ChartContainer