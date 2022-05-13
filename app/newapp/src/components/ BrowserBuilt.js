
import '../stylesheets/test.css'
import React,{useState,useEffect, useRef} from "react";
import { BsArrowUpRight } from 'react-icons/bs'


function  BrowserBuilt({setHeight}) {
    const useBtnRef = useRef()

    const [grad, setGrad] = useState(5)



useEffect(() => {
    
     setInterval(() => {
        
        setGrad((current) => {
            
            const res = current === 359 ? 5 : current + 0.2
           
            return res
        })
    }, 10)


   window.addEventListener('scroll', toggleButtonHandler)
  
    return () => {
        clearInterval()
        window.removeEventListener('scroll', toggleButtonHandler)
    }
}, [])





const toggleButtonHandler = () => {
    setHeight(useBtnRef.current.getBoundingClientRect().y)
  }
  

const divStyle={
    transform: `rotate(${grad+0.2}deg)`
  }


    return(<>
      <div className="BrowserBuilt">
         <div  style={divStyle}  className="animeshonDiv">       
        </div> 
        <div style={divStyle} className='smalAnimeshonDiv'></div>
         <div className='mian'>
             <img  className='chrome-logo' src='./img/chrome-logo.svg' alt=''/>
             <p ref={useBtnRef}  className='textBrowser'>The browser built by Google</p>
             <button className='chrombtn'>Download Chrome</button>
              <div className='Iwantto'>
                <a href='#' className='Iwantto_text'>I want to update Chrome</a>
                <BsArrowUpRight className='arrow'/> 
             </div> 
               <img className='laptop_desktop' 
               src='https://www.google.com/chrome/static/images/homepage/laptop_desktop.png' alt=''/>
         </div>
      </div>
    </>)
    
}

export default BrowserBuilt