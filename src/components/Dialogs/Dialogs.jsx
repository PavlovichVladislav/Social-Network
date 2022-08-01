import c from './Dialogs.module.css';

import DialogsPannelContainer from './DialogsPannel/DialogsPannelContainer';

const Dialogs = ({messages}) => {
    return (
        <div className={c.mesages}>
            <DialogsPannelContainer/>
            {messages}
        </div>
    )
}

export default Dialogs;