import type { SwitchProps } from 'react-router';
import type { RouteConfig } from '@/router';

import * as React from 'react';

import { View } from './view';


/**
 * 路由属性
 */
export interface Props {
	routes: RouteConfig[];

	extra_props?: any;

	switch_props?: SwitchProps;

	/** 是否登录 */
	is_sign_in?: boolean;

	/** 登录地址 */
	sign_in_path?: string;
}

/**
 * 路由
 */
export const Routes: React.FC<Props> = (props) => {
	return React.createElement(View, { ...props }, null);
};

