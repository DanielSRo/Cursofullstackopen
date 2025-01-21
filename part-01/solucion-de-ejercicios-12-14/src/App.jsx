import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Anecdote = ({ votes, anecdotes, selected, favorite }) => {
  return (
    <>
      <p><b>Score of the anecdote: </b> {votes[selected]}</p>
      <p>{anecdotes[selected]}</p>

      <h3>Anecdote with the most votes</h3>
      <p><b>Has: {votes[favorite]} </b></p>
      <p>{anecdotes[favorite]}</p>
      <p></p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const votes = [2, 2, 5, 6, 9, 2, 3, 8]

  const [selected, setSelected] = useState(0)
  const [copyVotes, setCopyVotes] = useState([...votes])

  const favoriteAnecdote = copyVotes.indexOf(Math.max(...copyVotes))

  const changeAnecdote = () => {
    const number = Math.floor(Math.random() * anecdotes.length)
    setSelected(number)
  }

  const scoreAnecdote = () => {
    const copy = [...copyVotes]
    copy[selected] += 1
    setCopyVotes(copy)
  }

  return (
    <div>
      <h1>Anecdotes</h1>
      <Button handleClick={changeAnecdote} text={'Change Anecdote'} />
      <Button handleClick={scoreAnecdote} text={'vote'} />

      <Anecdote anecdotes={anecdotes} votes={copyVotes} selected={selected} favorite={favoriteAnecdote} />
    </div>
  )
}

export default App