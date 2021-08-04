import React from 'react'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import '@progress/kendo-theme-default/dist/all.css';
import { ChartContainer } from '../components';

const GraphContainer = () => {
  return (
    <div className="graph-container">
      <div className="graph-adjust">
        <div className="graph-selects">
          <div className="select-container">
            <select>
              <option>Adjusted Production</option>
            </select>
            <ArrowDropDownOutlinedIcon />
          </div>
          <p> To </p>
          <div className="select-container">
            <select>
              <option>Patients Seen</option>
            </select>
            <ArrowDropDownOutlinedIcon />
          </div>
        </div>
        <div className="graph-zoom">
          {/* Zoom in, Zoom out */}
          <ZoomInIcon />
          <ZoomOutIcon />
        </div>
      </div>

      {/* Graph here */}
      <ChartContainer />

    </div>
  )
}

export default GraphContainer