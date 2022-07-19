import c from './Dialogs.module.css';

import DialogsItem from './DialogsItem/DialogsItem';
import DialogsPannel from './DialogsPannel/DialogsPannel';

const Dialogs = ({state}) => {
    const messages = state.messageStore.map( message => 
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
        <div className={c.mesages}>
            <DialogsPannel/>
            {messages}
        </div>
    )
}

export default Dialogs;