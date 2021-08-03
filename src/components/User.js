import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

const User = () => {
  return (
    <div className="user-container">
      <FavoriteBorderIcon />
      <NotificationsOutlinedIcon />
      <AccountCircleOutlinedIcon />
      <p> Your Dental Practice </p>
      <ArrowDropDownOutlinedIcon />
    </div>
  )
}

export default User 