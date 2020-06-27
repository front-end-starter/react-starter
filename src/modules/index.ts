import type { IModuleStore } from 'redux-dynamic-modules';

import { createStore } from 'redux-dynamic-modules';


export type ModuleStore = IModuleStore<any>;

export const store: ModuleStore = createStore({});
