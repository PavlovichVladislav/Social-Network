import { connect } from "react-redux";

import DialogsPannel from "./DialogsPannel";

import { changeRecipientActionCreator, sendMessageActionCreator, changeMessageActionCreator } from "../../../Store/Reducers/messageReducer";

const mapStateToProps = (state) => {
    return {
        recipient: state.messagesPage.newMessageRecipient,
        message: state.messagesPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        changeRecipient: (recipient) => {
            dispatch(changeRecipientActionCreator(recipient))
        },
        changeMessage: (message) => {
            dispatch(changeMessageActionCreator(message))
        }
    }
}

const DialogsPannelContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPannel);

export default DialogsPannelContainer;