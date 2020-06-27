import * as React from 'react';
import {
	Grid,
	Paper,
	Typography,
	TextField,
	Button
} from '@material-ui/core';

import {
	MainGrid,
	SignInFormContainter,
	SignInButton
} from './style';


export const View: React.FC = () => (
	<MainGrid container direction="row" justify="center">
		<Grid item xs={ 8 }>
			<Typography variant="h5">基础系统</Typography>
		</Grid>

		<Grid item xs={ 4 }
			container direction="column" justify="center" alignItems="center"
			component={ SignInFormContainter } elevation={ 6 } square
		>
			<Typography variant="h5">登 录</Typography>

			<form noValidate>
				<TextField fullWidth required
					label="账号"
					type="text"
					variant="outlined"
					margin="normal"
				/>

				<TextField fullWidth required
					label="密码"
					type="password"
					variant="outlined"
					margin="normal"
				/>

				<SignInButton fullWidth
					type="submit"
					variant="contained"
					color="primary"
					size="medium"
				>登 录</SignInButton>
			</form>
		</Grid>
	</MainGrid>
);
