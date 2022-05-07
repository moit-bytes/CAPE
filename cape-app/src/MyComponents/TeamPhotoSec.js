import React from 'react'

export default function TeamPhotoSec() {
  let st = {width: "30vw",
   height: "30vh",
  }
   let sp = {
    textAlign: 'center'
   }
   return (
    <div><div className="card-group m-4">
    <div className="card m-2 p-2">
      
      <div className="card-body">
      <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_WdTEui.json"  background="transparent"  speed="1"  style={st}  loop  autoplay></lottie-player>
        <h5 className="card-title" style={sp}>Mohit Kumar</h5>
        
      </div>
    </div>
    <div className="card m-2 p-2">
    
      <div className="card-body">
      <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_omixcbvz.json"  background="transparent"  speed="1"  style={st}  loop  autoplay></lottie-player>
        <h5 className="card-title" style={sp}>Sahithi Priya</h5>
       
        
      </div>
    </div>
    <div className="card m-2 p-2">
    
      <div className="card-body">
      <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_gljfnvqz.json"  background="transparent"  speed="1"  style={st}  loop  autoplay></lottie-player>
        <h5 className="card-title" style={sp}>Praneeth Gadipudi</h5>
      </div>
    </div>
  </div>
  </div>
  )
}