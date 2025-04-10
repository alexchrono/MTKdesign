// constants
const SET_JOBS = 'indeeds/SET_INDEEDS';

// Action creators
const setJobs = (indeeds) => {
    const allIds= Object.keys(indeeds)



    return {
    type: SET_JOBS,
    payload: {allIds,indeeds},
}};

const initialState = { allJobs: [],jobs: {} };

// Thunk action
export const ThunkGetJobs = () => async (dispatch) => {
    const response = await fetch('/api/interact/get-jobs', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(setJobs(data.allJobs));
    } else {
        // Handle errors or empty data as needed
        console.error('Failed to fetch Indeed jobs');
    }
};

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_JOBS:
            return { ...state, allJobs: action.payload.allIds, jobs: action.payload.indeeds };
        default:
            return state;
    }
}
