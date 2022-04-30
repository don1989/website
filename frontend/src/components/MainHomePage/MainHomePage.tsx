import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import headshot from 'src/images/headshot.jpg';

export default function MainHomePage() {
	return (
		<Container>
			<Paper elevation={1}>
				<Grid container spacing={2}>
					<Grid item xs>
						<Avatar
							alt="Don Demetrius"
							src={headshot}
							sx={{ width: 132, height: 139 }}
							imgProps={{ width: 'auto', height: '200px' }}
						/>
					</Grid>
					<Grid item xs>
						<Box>
							{`Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the
                                release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of
                                Lorem Ipsum.`}
						</Box>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
}
