import type { IModule } from 'redux-dynamic-modules';
import type { State } from './reducer';

import { reducer } from './reducer';


export interface ModuleState {
	/** 登录用户 */
	sign_in_user: State
};

export type Module = IModule<ModuleState>;

export const sign_in_user: Module = {
	id: 'sign_in_user',

	reducerMap: {
		sign_in_user: reducer
	}
};
