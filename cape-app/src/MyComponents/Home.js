import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { CodeBlock, solarizedDark } from "react-code-blocks";

export const Home = () => {
  localStorage.clear();
  localStorage.setItem("show", false);
  let code = `class CAPE:
  def __init__(self, user):
      self.user = user

  def fetchCodingAnalysis(self):
      print("Hello Mr." + self.user)
      return "Your Coding Analysis"

user = CAPE("Programmer")
user.fetchCodingAnalysis()`;

  let lottie = {
    width: '45vw',
    height: '60vh'
  }
  let cont1 = {
    width: '50vw',
    height: '60vh'
  }

  const { text } = useTypewriter({
    words: ['< Welcome To CAPE />', 'Coding Analysis For', 'Programming Enthusiast!'],
    loop: 100,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  return (
    <div className='d-flex p-3 my-4 flex-wrap my-5'>
      <div className='d-flex flex-column flex-wrap' style={cont1}>
        <div className='ms-5'>
          <h1 className='display-3'>
            <span>{text}</span>
            <Cursor />
          </h1>
          <br />
          <p className='fs-6'>


            <CodeBlock
              text={code}
              language={'Python'}
              showLineNumbers={true}
              theme={solarizedDark}
            />
          </p>
          <br />
          <button type="button" className="btn btn-success">Get Started</button>
          <button type="button" className="btn btn-outline-primary ms-3">Know About Us</button>

        </div>
      </div>
      <div className="container my-5" style={lottie} >
        <div>
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_3ntisyac.json" background="transparent" speed="1" style={lottie} loop autoplay></lottie-player>
        </div>
      </div>
    </div>
  )
}
