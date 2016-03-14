'use strict';
//import fetch from "isomorphic-fetch";
export const CURRENT = "CURRENT";
export const NEXT = "NEXT";
export const PREV = "PREV";
export const SHOW = "SHOW";
export const HIDE = "HIDE";

export function cmd_setCurrent (nowIndex) {
	return {
		type: CURRENT,
		current:nowIndex
	};
}
export function cmd_next (nowIndex) {
	return {
		type: NEXT,
		current:nowIndex
	};
}
export function cmd_prev (nowIndex) {
	return {
		type: PREV,
		current:nowIndex
	};
}
export function cmd_show (_info) {
	return {
		type: SHOW,
		info:_info
	};
}
export function cmd_hide () {
	return {
		type: HIDE,
		info:""
	};
}