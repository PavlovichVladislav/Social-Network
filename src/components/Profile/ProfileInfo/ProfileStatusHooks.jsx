import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusHooks = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setStatus] = useState(status);

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(localStatus);
    }

    useEffect(() => {
        setStatus(status);
    }, [status])

    return (
        <>
            {editMode
                ?<input 
                    autoFocus={true} 
                    onChange={(e) => {setStatus(e.target.value)}} 
                    onBlur={() => {deactivateEditMode()}} 
                    value={localStatus}/>
                :<span 
                    onDoubleClick={() => {setEditMode(true)}}
                > {status} </span>
            }
        </>
    )
}

export default ProfileStatusHooks;