import type { FC } from 'react';
import type { RouteConfig } from '@/router';
import type { ModuleStore } from '@/modules';
import type { ModuleState as SignInUserModuleState } from '@/modules/sign_in_user';
import type { Props as ViewProps } from './view';

import { createElement, useMemo } from 'react';
import { Provider, connect } from 'react-redux';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { useMediaQuery, createMuiTheme } from '@material-ui/core';
import { lightBlue, pink } from '@material-ui/core/colors';

import { sign_in_user as sign_in_user_module } from '@/modules/sign_in_user';
import { View } from './view';

/**
 * 属性
 */
export interface Props {
	/** 路由配置 */
	routes: RouteConfig[];

	store: ModuleStore;
};

export const PageMain: React.FC<Props> = ({
	routes,
	store
}) => {
	const prefers_dark_mode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = useMemo(
		() => createMuiTheme({
			palette: {
				type: prefers_dark_mode ? 'dark' : 'light',
				primary: lightBlue,
				secondary: pink
			},
			props: {
				MuiButton: {
					size: 'small',
				},
				MuiFilledInput: {
					margin: 'dense',
				},
				MuiFormControl: {
					margin: 'dense',
				},
				MuiFormHelperText: {
					margin: 'dense',
				},
				MuiIconButton: {
					size: 'small',
				},
				MuiInputBase: {
					margin: 'dense',
				},
				MuiInputLabel: {
					margin: 'dense',
				},
				MuiListItem: {
					dense: true,
				},
				MuiOutlinedInput: {
					margin: 'dense',
				},
				MuiFab: {
					size: 'small',
				},
				MuiTable: {
					size: 'small',
				},
				MuiTextField: {
					margin: 'dense',
				},
				MuiToolbar: {
					variant: 'dense',
				},
			},
			overrides: {
				MuiIconButton: {
					sizeSmall: {
						marginLeft: 4,
						marginRight: 4,
						padding: 12,
					},
				}
			},
			spacing: factor => `${0.25 * factor}rem`
		}),
		[prefers_dark_mode],
	);


	const ConnectView = connect(
		(state: SignInUserModuleState) => ({
			routes,
			theme,
			is_sign_in: state.sign_in_user.is_sign_in
		})
	)(View);

	const DynamicModuleView = createElement(DynamicModuleLoader, {
		modules: [sign_in_user_module]
	}, createElement(ConnectView));

	return createElement(Provider, {
		store: store
	}, DynamicModuleView);
};

export default PageMain;
