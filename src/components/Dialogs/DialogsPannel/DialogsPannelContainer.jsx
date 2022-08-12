import { connect } from "react-redux";

import DialogsPannel from "./DialogsPannel";

import { sendMessage } from "../../../Store/Reducers/messageReducer";

const mapStateToProps = (state) => {
    return {
        recipient: state.messagesPage.newMessageRecipient,
        message: state.messagesPage.newMessageText,
    }
}

const DialogsPannelContainer = connect(mapStateToProps, { sendMessage })(DialogsPannel);

export default DialogsPannelContainer;