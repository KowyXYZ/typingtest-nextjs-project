"use client"


import React, { useEffect, useRef, useState } from 'react'

const HomePage = () => {

const maxTime = 60;
const [timeLeft, setTimeLeft] = useState(maxTime)
const [mistakes, setMistakes] = useState(0)
const [WPM, setWPM] = useState(0)
const [CPM, setCPM] = useState(0)
const [charIndex, setCharIndex] = useState(0)
const [isTyping, setIsTyping] = useState(false)


const inputRef = useRef(null)
const charRefs = useRef([])

useEffect(() => {
  inputRef.current.focus()
}, [])

const handleChange = (e) => {
  const characters = charRefs.current;
  let currentChar = charRefs.current[charIndex]
  let typedChar = e.target.value.slice(-1)

  if(charIndex < characters.length && timeLeft > 0 ) {
    if(!isTyping) {
      setIsTyping(true)
    }

    if(typedChar === currentChar.textContent) {
      setCharIndex(charIndex + 1)
    } else {
      setCharIndex(charIndex + 1)
      setMistakes(mistakes + 1)
    }

    if(charIndex === characters.length -1) setIsTyping(false)
  } else {
    setIsTyping(false)
  }

}


const paragraph = "Why painful the sixteen how minuter looking nor. Subject but why ten earnest husband imagine sixteen brandon. Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they. Stuff at avoid of sense small fully it whose an. Ten scarcely distance moreover handsome age although. As when have find fine or said no mile. He in dispatched in imprudence dissimilar be possession unreserved insensible. She evil face fine calm have now. Separate screened he outweigh of distance landlord."

  return (
    <div className='w-full py-24'>
        <div className='flex justify-center items-center flex-col'>

              <div className='w-[800px] mb-5 text-[18px]'>
                <input type="text" className='opacity-0 z-10 absolute' ref={inputRef} onChange={handleChange}/>
                {paragraph.split("").map((char, index) => {
                  return(
                    <span className={``} key={index} ref={(e) => charRefs.current[index] = e}>
                      {char}
                    </span>
                  )
                })}
              </div>

            <div className='flex gap-8 justify-center items-center text-[20px] border-t-2 w-[800px]  pt-5'>
                <p>Time Left: {timeLeft}</p>
                <p>Mistakes: {mistakes}</p>
                <p>WPM: {WPM}</p>
                <p>CPM: {CPM}</p>
                <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Restart</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage