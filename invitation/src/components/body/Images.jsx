import React from 'react'
import classes from './Images.module.css'

const Images = (props) => {

  // const [mouseOver, setmouseOver] = useState(false)
  const images = props.images
  

  return (
    <div className={classes.container}>
      
      <img className={classes.padding} onClick = {props.modal} src= {images.a} alt="intro"/>
      <img className={classes.padding} onClick = {props.modal} src= {images.b} alt="run"/>
      <img className={classes.padding} onClick = {props.modal} src= {images.c} alt="chew"/>
      <img className={classes.padding} onClick = {props.modal} src= {images.d} alt="stainding"/>
      <img className={classes.padding} onClick = {props.modal} src= {images.e} alt="stare"/>
      <img className={classes.padding} onClick = {props.modal} src= {images.f} alt="eye"/>
      <img className={classes.padding} onClick = {props.modal} src= {images.g} alt="husband"/>
      <img className={classes.padding} onClick = {props.modal} src= {images.h} alt="bride 전신"/>
      <img className={classes.padding} onClick = {props.modal} src= {images.i} alt="bride 상반신"/>
      
    </div>
  )
}

export default Images