import axios from 'axios';

export const FAILURE = "FAILURE"

export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_SMURFS_START});
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
    dispatch({
      type: FETCH_SMURFS_SUCCESS,
      payload: response.data
    })
  })
  .catch(error => {
    dispatch({
      type: FAILURE,
      payload: error
    })
  })
}

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"

export const postSmurf = smurf => dispatch => {
  dispatch({type: POST_SMURF_START});
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({
        type: POST_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: FAILURE,
        payload: error
      });
    })
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
