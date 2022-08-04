const toggleFollow = 'TOGGLE_FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SET_USERS'

const initialState = {
    users: [
        {
            id: 1, 
            name: 'Павлович Владислав',
            status: 'Новосибирск',
            photo: '',
            followed: true,

        },
        {
            id: 2, 
            name: 'Саакян Георгий',
            status: 'НГС',
            photo: '',
            followed: true,
        },
        {
            id: 3, 
            name: 'Зубань Ярослав',
            status: 'В поиске шаловливых ощущений',
            photo: '',
            followed: true,
        },
        {
            id: 4, 
            name: 'Белов Ярослав',
            status: '',
            photo: '',
            followed: true,
        }
    ]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case toggleFollow: {
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            }

        }
        // case unfollow: {
        //     return {
        //         ...state, 
        //         users: state.users.map(user => {
        //             if (user.id === action.payload) {
        //                 return {...user, followed: false}
        //             }
        //             return user;
        //         })
        //     }
        // }
        case setUsers: {
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        }
        default:
            return state;
    }

}

export default usersReducer;

export const toggleFollowAC = (userId) => {
    return {
        type: toggleFollow,
        payload: userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: unfollow,
        payload: userId
    }
}

export const setUsersAC = (users) => {
    console.log('hello')
    return {
        type: setUsers,
        payload: users
    }
}