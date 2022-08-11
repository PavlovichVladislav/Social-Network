import { Component } from "react";

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false, 
        });
        this.props.updateStatus(this.state.status);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (newStatus) => {
        this.setState({
            status: newStatus, 
        });
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ?<input autoFocus={true} onChange={(e) => {this.onStatusChange(e.target.value)}} onBlur={() => {this.deactivateEditMode()}} value={this.state.status}/>
                    :<span onDoubleClick={() => {this.activateEditMode()}}>{this.props.status}</span>
                }
            </>
        )
    }
}

export default ProfileStatus;