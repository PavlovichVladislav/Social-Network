const toggleFollow = 'TOGGLE_FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SET_USERS';
const setCurPage = 'SET_CURRENT_PAGE';
const toggleLoading = 'TOGGLE_LOADING';

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
    ],
    pageSize: 5,
    currentPage: 1,
    loading: false
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
        case setUsers: {
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        }
        case setCurPage: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case toggleLoading: {
            return {
                ...state,
                loading: !state.loading
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
    return {
        type: setUsers,
        payload: users
    }
}

export const setCurPageAC = (curPage) => {
    return {
        type: setCurPage,
        payload: curPage
    }
}

export const toggleLoadingAC = () => ({type: toggleLoading})

