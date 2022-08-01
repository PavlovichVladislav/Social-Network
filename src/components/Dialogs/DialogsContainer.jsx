import { connect } from 'react-redux';
import Dialogs from './Dialogs';

import DialogsItem from './DialogsItem/DialogsItem';

const mapStateToProps = (state) => {
    const messages = state.messagesPage.messageStore.map( message => 
        <DialogsItem 
            name={message.name} 
            lastMessage={message.lastMessage} 
            img={message.img} 
            id={message.id}
            time={message.time}
            lastMessageImg={message.lastMessageImg}
            key={message.id}
        /> 
    )

    return {
        messages
    }
}

const DialogsContainer = connect(mapStateToProps, null)(Dialogs);

export default DialogsContainer;