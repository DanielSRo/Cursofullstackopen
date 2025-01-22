/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Header = ({ name }) => {
    return (
        <>
            <h1>Curse Name: {name}</h1>
        </>
    )
}

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Content = ({ parts }) => {
    return (
        <>
            {parts.map(line =>
                <Part title={line.name} exercise={line.exercises} key={line.id} />
            )}
        </>
    )
}

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Part = ({ title, exercise }) => {
    return (
        <>
            <p> - Description: {title} / exercises: {exercise}</p>
        </>
    )
}

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Total = ({ number }) => {
    const total = number.reduce((sum, item) => sum + item.exercises, 0)
    return (
        <>
            <p>Total number of exercises: <b>{total}</b></p>
        </>
    )
}

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
const Course = ({ content }) => {
    return (
        <>
            <Header name={content.name} />
            <Content parts={content.parts} />
            <Total number={content.parts} />
        </>
    )
}
export default Course