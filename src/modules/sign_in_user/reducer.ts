import { createReducer } from '@reduxjs/toolkit';

import * as actions from './actions';


/**
 * 状态
 */
export interface State {
	/** 令牌 */
	token: string;

	/** 是否登录 */
	is_sign_in: boolean;
};

/**
 * 默认状态
 */
export const initial_state: State = {
	token: '',
	is_sign_in: false
};

export const reducer = createReducer(initial_state, builder => builder

	/**
	 * 登录
	 */
	.addCase(actions.sign_in, (state, action) => {
		state.is_sign_in = true;

		return state;
	})

);
