import StoreContext from '../../Store/StoreContext';
import Dialogs from './Dialogs';

import DialogsItem from './DialogsItem/DialogsItem';

const DialogsContainer = () => {    
    return (
        <StoreContext.Consumer> 
        {
            (store) => {
                const state = store.getState();

                const messages = state.messagesPage.messageStore.map( message => 
                    <DialogsItem 
                        name={message.name} 
                        lastMessage={message.lastMessage} 
                        img={message.img} 
                        id={message.id}
                        time={message.time}
                        lastMessageImg={message.lastMessageImg}
                    /> 
                )

                return <Dialogs messages={messages}/>
            }   
        }    
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;