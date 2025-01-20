//Componente Heard: Nombre del curso 
const Header = (props) => {
  return (
    <>
      <h1>Curse Name: {props.name}</h1>
    </>
  )
}

// Componente Content: Contenido del curso
const Content = (props) => {
  return (
    <>
      <Part title={props.content[0].name} exercise={props.content[0].exercises} />
      <Part title={props.content[1].name} exercise={props.content[1].exercises} />
      <Part title={props.content[2].name} exercise={props.content[2].exercises} />
    </>
  )
}
// Componete Part: descripcion de cada parte del curso (nombre y numero de ejercicios)
const Part = (props) => {
  return (
    <>
      <p>Description: {props.title}: {props.exercise}</p>
    </>
  )
}

// Compoente Total: Numero total de ejercicios del curso
const Total = (props) => {
  return (
    <>
      <p>Total number of exercises: {props.number}</p>
    </>
  )
}

//Componete principal App:
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  //
  const totalExercises = course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises


  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
      <Total number={totalExercises} />
    </div>
  )
}

export default App