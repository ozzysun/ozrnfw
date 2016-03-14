'use strict';
var RNRF = require('react-native-router-flux');
var {Actions} = RNRF;
export default function reducer(state = {}, action) {
    switch (action.type) {
        case Actions.BEFORE_ROUTE:
            //console.log("BEFORE_ROUTE:", action);
            return state;
        case Actions.AFTER_ROUTE:
            //console.log("AFTER_ROUTE:", action);
            return state;
        case Actions.AFTER_POP:
            //console.log("AFTER_POP:", action);
            return state;
        case Actions.BEFORE_POP:
            //console.log("BEFORE_POP:", action);
            return state;
        case Actions.AFTER_DISMISS:
            //console.log("AFTER_DISMISS:", action);
            return state;
        case Actions.BEFORE_DISMISS:
            //console.log("BEFORE_DISMISS:", action);
            return state;
        default:
            return state;
    }

}


import { NEXT, PREV, CURRENT,SHOW,HIDE } from "../actions/actions";
//every function is a state.xxx ,this is state.page 
/*
export function red_player(state={},action) {
	console.log("...in red_player now state is")
	console.table(state)
	
	switch (action.type) {
		case CURRENT:
			return {
				...state,
				nowIndex:action.current
			};
		case NEXT:
			return {
				...state,
				nowIndex:state.nowIndex+1
			}
		case PREV:
			return{
				...state,
				nowIndex:state.nowIndex-1
			}
		default:
			return state;
	}

};
*/
/*
export function red_pageInfo(state="empty",action) {
	console.log("...in red_pageInfo now state is")
	console.table(state)
	switch (action.type) {
		case SHOW:
			return "show page="+action.info;
		case HIDE:
			return "hide page";
		default:
			return state;
	}
};
*/

