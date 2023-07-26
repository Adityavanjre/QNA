import { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const SingleQuestions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
      <header>
        <h5> {title} </h5>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </header>
      {showInfo && <p> {info} </p>}
    </article>
  )
}
export default SingleQuestions
