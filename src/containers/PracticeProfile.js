import React from 'react'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import RefreshIcon from '@material-ui/icons/Refresh';
import { CheckIcon } from '../assets/icons/'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { PickDate } from '../components'

const PracticeProfile = () => {
  return (
    <div className="practice-profile">
      <div className="profile">
        <MenuOutlinedIcon />
        <h1> Practice Profile </h1>
      </div>

      <div className="profile-select-range">
        <p className="update-status"> <img src={CheckIcon} />Last updated 03/01/2021 <RefreshIcon /> </p>
        <div className="select-ranges">

          <div className="select-container">
            <label htmlFor="time-range">Time Range In: </label>
            <div className="selects one">
              <select id="time-range">
                <option> Months </option> 
              </select>
              <ArrowDropDownOutlinedIcon />
            </div>
          </div>

          <div className="select-container">
            <label htmlFor="total-months">Total Months </label>
            <div className="selects two">
              <select id="total-months">
                <option> 24 </option> 
              </select>
              <ArrowDropDownOutlinedIcon />
            </div>
          </div>

          <div className="select-container">
            <label htmlFor="starting-from">Starting from </label>
            <div className="selects three">
              <PickDate />
              <CalendarTodayIcon />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PracticeProfile