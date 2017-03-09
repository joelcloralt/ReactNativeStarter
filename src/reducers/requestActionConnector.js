'use strict';
/*
 * requestActionCreator.js
 *
 * Creates default actions for the request cycle, REQUEST, SUCCESS, FAILURE
 *
 * Use this if you just need the request action to pass nothing, the success
 * action to pass the data, and the failure action to pass the error.
 *
 * EXAMPLE USAGE
 *
 * // create default request/success/failure actions for GET_EMPLOYEE cycle
 * const getEmployeeActions = createDefaultRequestActions('GET_EMPLOYEE');
 *
 * // and usage in the request
 * export function getEmployee(){
 *   return dispatch => {
 *     dispatch(getEmployeeActions.request());             // here
 *     return Api().getEmployee()
 *     .then((response)=>{
 *       dispatch(getEmployeeActions.success(response));   // here
 *     })
 *     .catch((error)=>{
 *       dispatch(getEmployeeActions.failure(error));      // and here
 *     });
 *   }
 * }
 *
 *
 *
 * @param  {string} name - format `{action}_{endpoint}` all uppercase i.e. 'GET_USER', 'ADD_EMPLOYEE'
 * @return {object}      - an object containing the cycle action methods
 */
export function createDefaultRequestActions(name) {
  let actions = {
    request: () => {return {type: `${name}_REQUEST`}},
    success: (data) => {return {type: `${name}_SUCCESS`, payload: data}},
    failure: (error) => {return {type: `${name}_FAILURE`, payload: error}}
  }
  return actions
}
