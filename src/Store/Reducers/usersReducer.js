import user0 from '../../img/profile_img.jpg'
import user1 from '../../img/user1.jpg'
import user2 from '../../img/user2.jpg'

const _toggleFollow = 'TOGGLE_FOLLOW';
const _setUsers = 'SET_USERS';
const _setCurPage = 'SET_CURRENT_PAGE';
const _toggleLoading = 'TOGGLE_LOADING';
const _toggleFollowing = "TOGGLE_FOLLOWING";

const initialState = {
    users: [
        {
            id: 1, 
            name: 'Павлович Владислав',
            status: 'Новосибирск',
            photos: {small: user0},
            followed: true,

        },
        {
            id: 2, 
            name: 'Саакян Георгий',
            status: 'Саскян из НГСОХИ',
            photos: {small: user2},
            followed: true,
        },
        {
            id: 3, 
            name: 'Зубань Ярослав',
            status: 'В поиске шаловливых ощущений',
            photos: {small: user1},
            followed: true,
        },
        {
            id: 4, 
            name: 'Белов Ярослав',
            status: '',
            photos: {small: null},
            followed: true,
        }
    ],
    pageSize: 5,
    currentPage: 1,
    loading: false,
    following: [],
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case _toggleFollow: {
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
        case _setUsers: {
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        }
        case _setCurPage: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case _toggleLoading: {
            return {
                ...state,
                loading: !state.loading
            }
        }
        case _toggleFollowing: {
            return {
                ...state,
                following: state.following.includes(action.payload)
                ? state.following.filter(id => id !== action.payload)
                : [...state.following, action.payload]
            }
        }
        default:
            return state;
    }

}

export default usersReducer;

export const toggleFollow = (userId) => {
    return {
        type: _toggleFollow,
        payload: userId
    }
}

export const setUsers = (users) => {
    return {
        type: _setUsers,
        payload: users
    }
}

export const setCurPage = (curPage) => {
    return {
        type: _setCurPage,
        payload: curPage
    }
}

export const toggleLoading = () => ({type: _toggleLoading})
export const toggleFollowingProcess = (userId) => ({type: _toggleFollowing, payload: userId})

