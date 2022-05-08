import React, { useState } from 'react'
import Modal from '../components/body/Modal.jsx'
import IntroMessage from '../components/body/IntroMessage.jsx'
import Images from '../components/body/Images.jsx'
const Body = (props) => {
  
  const [modal, setModal] = useState(false)
  const [pick, setPick] = useState(0)

  const modalHandler = (props) => {
    setModal(!modal)
    

  }



  const imgSCR = {
    a: "https://images.pexels.com/photos/11965828/pexels-photo-11965828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    b: "https://images.pexels.com/photos/11965827/pexels-photo-11965827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    c: "https://images.pexels.com/photos/11965821/pexels-photo-11965821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    d: "https://images.pexels.com/photos/11965604/pexels-photo-11965604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    e: "https://images.pexels.com/photos/11965608/pexels-photo-11965608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    f: "https://images.pexels.com/photos/11965605/pexels-photo-11965605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    g: "https://images.pexels.com/photos/11965610/pexels-photo-11965610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    h: "https://images.pexels.com/photos/9252715/pexels-photo-9252715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    i: "https://images.pexels.com/photos/9252718/pexels-photo-9252718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  

  return (
    <>
      
    <IntroMessage></IntroMessage>
    {modal ? <Modal modal = {modalHandler} images = {imgSCR} pick = {pick}/> : <></>}
    
    <Images modal = {modalHandler} images = {imgSCR} setPick = {setPick}></Images>
    
    </>
  )
}

export default Body