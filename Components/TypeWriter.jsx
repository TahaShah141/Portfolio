import { useEffect, useState } from "react"

export const TypeWriter = ({words, textStyling, keySpeed=100, pause=750}) => {

  const [delay, setDelay] = useState(keySpeed)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[currentIndex])

  const [displayText, setDisplayText] = useState("")
  const [direction, setDirection] = useState(1)

  const nextWord = () => {
    setDirection(1)
    const newIndex = (currentIndex + 1) % words.length 
    setCurrentIndex(newIndex)
    setCurrentWord(words[newIndex])
    setDelay(pause/3)
  }
  
  const type = () => {
    if (direction === 1) {
      if (currentWord.length === displayText.length) {
        setDirection(-1)
        setDelay(pause)
      }
      else setDisplayText(displayText+currentWord[displayText.length])
    }
    else if (direction === -1) {
      if (displayText.length === 0) nextWord()
      else setDisplayText(displayText.slice(0, -1))     
    }
  }

  useEffect(() => {
    setTimeout(type, delay)
  }, [displayText, currentWord, direction])

  useEffect(() => {
    if (delay !== keySpeed) {
      if (direction === 1) {
        setDelay(keySpeed)
      } else setDelay(keySpeed)
    } 
  }, [delay])

  return (
    <span className={textStyling}>
      <span>
        {displayText}
      </span>
      |
    </span>
  )
}
