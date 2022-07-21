import React from 'react';

import SubmitBox from './SubmitBox';

import { addPostActionCreator, changePostActionCreator } from '../../../../Store/Reducers/profileReducer';
import StoreContext from '../../../../Store/StoreContext';

const SubmitBoxContainer = () => {
    
    // 
    // dispatch={store.dispatch}

    return (
        <StoreContext.Consumer> 
        {
            (store) => {
                let newPostText = store.getState().profilePage.newPostText;

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
            
                let changePost = (e) => {
                    store.dispatch(changePostActionCreator(e.target.value));
                }

                return <SubmitBox 
                            addPost={addPost} 
                            changePost={changePost} 
                            newPostText={newPostText}
                        />
            }
        }      
        </StoreContext.Consumer>
    )
}

export default SubmitBoxContainer;