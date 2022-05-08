import React from 'react'
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider.jsx'

import classes from './Modal.module.css'





const Background = props => {
  return <div className={classes.background} onClick = {props.close}/>
}

const ModalWindow = props => {
  

  return (<>
  <div className={classes.modal}>
  <ImageSlider images = {props.images}></ImageSlider>
  </div>
  </>
    
       
      );


}

const portalElement = document.getElementById('modal-window');





const Swipe = (props) => {
  return (
  <>
    {ReactDOM.createPortal(<Background close = {props.modal}></Background>, portalElement)}
    <div>
    {ReactDOM.createPortal(<ModalWindow images = {props.images} pick = {props.pick}></ModalWindow>, portalElement)}
    </div>
  </>
  );

    
}

export default Swipe