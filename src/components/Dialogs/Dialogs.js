import classes from './dialogs.module.css';

import DialogsItem from './DialogsItem/DialogsItem';

const Dialogs = (props) => {

    let messages = props.state.messageStore.map( message => 
        <DialogsItem 
            name={message.name} 
            lastMessage={message.lastMessage} 
            img={message.img} 
            id={message.id}
            time={message.time}
            lastMessageImg={message.lastMessageImg}
        /> 
    )

    return (
        <div className={classes.mesages}>
            <div className={classes.mesages_items}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;