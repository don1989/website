import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MainAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="sticky">
				<Toolbar
					sx={{
						justifyContent: 'space-between',
					}}
				>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Typography
							variant="h4"
							component="span"
							sx={{ flexGrow: 1 }}
						>
							Don Demetrius
						</Typography>
						<Typography
							variant="subtitle1"
							component="span"
							sx={{ flexGrow: 1 }}
						>
							Lead Software Engineer
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
