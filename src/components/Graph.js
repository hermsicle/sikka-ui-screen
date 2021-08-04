import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const yAxis = ["0", "500", "1,000", "1,500", "2,000", "2,500", "3,000", "3,500"]
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

      <div className="graph-center"></div>

      {/* Create the Bubble Data  */}
      <div className="top-bubble-set">
        <p className="bubble one">Affinity Dental</p>
        <p className="bubble two">Bugs Bunny Dental</p>
        <p className="bubble three">Awesome Smiles</p>
      </div>
      <div className="bottom-bubble-set">
        <p className="bubble four">Ferengi Teeth</p>
        <p className="bubble five">Klingon Smiles</p>
        <p className="bubble six">Bluetooth Dental</p>
      </div>
    </div>
  </>
)

export default ChartContainer