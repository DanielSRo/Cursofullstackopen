import '../css/Notification.css'

const Notificaction = ({ notification, typeMessage }) => {

    if (notification === null) {
        return (
            <></>
        )
    }

    return (
        <div className='notification' style={typeMessage ? { color: 'green' } : { color: 'red' }}>
            <em>{notification}</em>
        </div>
    )
}

export default Notificaction