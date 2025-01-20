import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)  

  const totalOpinion = good + neutral + bad
  const average = ((good*1)+(bad*(-1)))/totalOpinion
  const positive = (good*100)/totalOpinion

  return (
    <div>
      <h1>Customer Opinion</h1>

      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <h2>Statistics</h2>
      <p>Good Opinion: {good}</p>
      <p>Neutral Opinion: {neutral}</p>
      <p>Bad Opinion: {bad}</p>

      <p>Total: {totalOpinion}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} </p>

    </div>
  )
}

export default App