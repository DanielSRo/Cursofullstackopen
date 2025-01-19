//Componente Heard: Nombre del curso 
const Header = (props) => {
  return(
    <>
      <h1>Curse Name: {props.name}</h1>
    </>
  )
}

// Componente Content: Contenido del curso
const Content = (props) => {
  return(
    <>
    <Part title={props.content[0].title} exercise={props.content[0].exercise}/>
    <Part title={props.content[1].title} exercise={props.content[1].exercise}/>
    <Part title={props.content[2].title} exercise={props.content[2].exercise}/>
    </>
  )
}
// Componete Part: descripcion de cada parte del curso (nombre y numero de ejercicios)
const Part = (props) => {
  return(
     <>
     <p>Description: {props.title}: {props.exercise}</p>
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