import type { FC } from 'react';
import type { Theme } from '@material-ui/core';
import type { RouteConfig } from '@/router';
import type { ModuleStore } from '@/modules';

import { createElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {
	ThemeProvider as MuiThemeProvider,
	CssBaseline
} from '@material-ui/core';
import { Routes } from '@/components/routes';
import { ModuleState } from '@/modules/sign_in_user';


/**
 * 属性
 */
export interface Props {
	/** 路由配置 */
	routes: RouteConfig[];

	/** 主题 */
	theme: Theme;

	is_sign_in?: ModuleState['sign_in_user']['is_sign_in'];
};

/**
 * 视图
 */
export const View: FC<Props> = ({
	routes,
	theme,
	is_sign_in
}) => (
	<Router>
		<MuiThemeProvider theme={ theme }>
			<ThemeProvider theme={ theme }>
				<CssBaseline />

				<Routes
					routes={ routes }
					is_sign_in={ is_sign_in }
					sign_in_path="/sign_in"
				/>
			</ThemeProvider>
		</MuiThemeProvider>
	</Router>
);
