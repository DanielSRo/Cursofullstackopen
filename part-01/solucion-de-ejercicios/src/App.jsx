//Componente Heard: Nombre del curso 
const Header = (props) => {
  return(
    <>
      <h1>Curse Name: {props.name}</h1>
    </>
  )
}

// Componente Content: Contenido del curso sus partes y su ejercicios
const Content = (props) => {
  return(
    <>
    <p>Description: {props.content[0].title}: {props.content[0].exercise}</p>
    <p>Description: {props.content[1].title}: {props.content[1].exercise}</p>
    <p>Description: {props.content[2].title}: {props.content[2].exercise}</p>
    </>
  )
}

// Compoente Total: Numero total de ejercicios del curso
const Total = (props) =>{
  return(
    <>
    <p>Total number of exercises: {props.number}</p>
    </>
  )
}

//Componete principal App:
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  //
  const contentCurse=[{title:part1, exercise:exercises1}, {title:part2, exercise:exercises2}, {title:part3, exercise:exercises3}]
  const totalExercises= exercises1+exercises2+exercises3

  return (
    <div>
      <Header name={course}/>
      <Content content={contentCurse}/>
      <Total number={totalExercises}/>
    </div>
  )
}

export default App