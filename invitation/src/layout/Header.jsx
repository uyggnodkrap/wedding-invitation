import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (<>
  <div className={classes.background}>

  <div className={classes.font}>
        <h1 >신랑  & 신부</h1> 
        <h2>| WE ARE GETTING MARRIED |</h2> 
        <h3>2022.01.03</h3>
      </div>
     
    <img className={classes.size} src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
    
  </div>
    </>
  )
}

export default Header