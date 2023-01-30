const GithubReducer = (state, action) => {

    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                Loading: false
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                Loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                Loading: true,
            }
        case 'CLEAR_USERS':
            return {...state, users: [], Loading: false}
        default: 
            return state
    }

}

export default GithubReducer