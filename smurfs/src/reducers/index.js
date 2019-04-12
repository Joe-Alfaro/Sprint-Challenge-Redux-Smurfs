import { 
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from '../actions';

const initialState ={
   smurfs: [],
   fetchingSmurfs: false,
   error: '' 
 }

const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS_START:
      return({
        ...state,
        fetchingSmurfs: true,
        error: ''
      })
    case FETCH_SMURFS_SUCCESS:
      return({
        ...state,
        fetchingSmurfs: false,
        error: '',
        smurfs: [...state.smurfs, ...action.payload]
      })
    case FETCH_SMURFS_FAILURE:
      return({
        ...state,
        fetchingSmurfs: false,
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
