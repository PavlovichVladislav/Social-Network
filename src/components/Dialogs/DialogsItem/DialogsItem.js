import classes from './DialogsItem.module.css';

import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={classes.mesageItem}>
            <div className={classes.messagePhoto}>
                <img src={props.img} alt="messagePhoto"/>
            </div>
            <div className={classes.messageInfo}>
                <div className={classes.messageTitle}>{props.name}</div>
                <div className={classes.messageText}>
                    <img src={props.lastMessageImg} alt="authorImg" />
                    {props.lastMessage}
                </div>
            </div>
            <div className={classes.messageTime}>
                {props.time}
            </div>
        </div>
    )
}

{/* <NavLink to={path}>
{props.name}
</NavLink> */}

export default DialogsItem;