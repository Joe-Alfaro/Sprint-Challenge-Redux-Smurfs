import { 
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  FAILURE
} from '../actions';

const initialState ={
  smurfs: [],
  fetchingSmurfs: false,
  postingSmurf: false,
  error: '' 
}

const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS_START:
      return({
        ...state,
        fetchingSmurfs: true,
      })
    case FETCH_SMURFS_SUCCESS:
      return({
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      })
    case POST_SMURF_START:
      return({
        ...state,
        postingSmurf: true
      })
    case POST_SMURF_SUCCESS:
      return({
        ...state,
        postingSmurf: false,
        smurfs: action.payload
      })
    case FAILURE:
      return({
        ...state,
        fetchingSmurfs: false,
        postingSmurf: false,
        error: action.payload
      })
    default:
      return state;
  }
}

export default smurfReducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
