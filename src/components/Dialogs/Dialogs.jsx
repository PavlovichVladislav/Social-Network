import c from './Dialogs.module.css';

import DialogsPannel from './DialogsPannel/DialogsPannel';

const Dialogs = ({messages}) => {
    return (
        <div className={c.mesages}>
            <DialogsPannel/>
            {messages}
        </div>
    )
}

export default Dialogs;