import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const totalOpinion = good + neutral + bad
  const average = ((good * 1) + (bad * (-1))) / totalOpinion
  const positive = (good * 100) / totalOpinion

  if (totalOpinion === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text={'Good Opinion:'} value={good} />
          <StatisticsLine text={'Neutral Opinion:'} value={neutral} />
          <StatisticsLine text={'Bad Opinion:'} value={bad} />

          <StatisticsLine text={'Total:'} value={totalOpinion} />
          <StatisticsLine text={'Average:'} value={average} />
          <StatisticsLine text={'Positive:'} value={positive} />
        </tbody>
      </table>
    </>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Customer Opinion</h1>
      <Button handleClick={handleGoodClick} text={'Good'} />
      <Button handleClick={handleNeutralClick} text={'Neutral'} />
      <Button handleClick={handleBadClick} text={'Bad'} />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App