import { useState } from 'react'
import questions from './data'
import Questions from './Questions'
const App = () => {
  const [qna, setQna] = useState(questions)
  console.log(qna)

  return (
    <main>
      <Questions questions={qna} />
    </main>
  )
}
export default App
