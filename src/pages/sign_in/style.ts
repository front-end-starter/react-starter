import { default as Styled } from 'styled-components';
import { Grid, Paper, Button } from '@material-ui/core';


/**
 * 主栅格
 */
export const MainGrid = Styled(Grid)`
	height: 100vh;
`;

/**
 * 登录表容器
 */
export const SignInFormContainter = Styled(Paper)`
	padding: ${ ({ theme }) => theme.spacing(4) };
`;

/**
 * 登录按钮
 */
export const SignInButton = Styled(Button)`
	margin: ${ ({ theme }) => theme.spacing(4, 0) };
`;
