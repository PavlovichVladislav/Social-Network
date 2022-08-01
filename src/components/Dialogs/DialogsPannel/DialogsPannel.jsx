import c from "./DialogsPannel.module.css";

const DialogsPannel = ({sendMessage, changeRecipient, changeMessage, recipient, message}) => {
    return (
        <div className={c.dialogsPannel}>
            <input 
                value={recipient} 
                type="text" 
                placeholder="Кому?" 
                onChange={(e) => {changeRecipient(e.target.value)}}
            />
            <textarea 
                value={message} 
                name="message" 
                placeholder="Напишите сообщение..." 
                onChange={(e) => {changeMessage(e.target.value)}}
            />
            <button onClick={sendMessage}>New message</button>
        </div>
    )
}

export default DialogsPannel;