import React from 'react'
import useStyles from "./style";

import {
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
	const classes = useStyles()
    return (
			<Grid className={ classes.root }>
						<Box className={ classes.footer }>

								<Box >
								<Typography  className={ classes.centerAlign } fontWeight="fontWeightBold" color="initial" variant="h5" component="legend">
								Follow us
          		</Typography>
										<Box className={ classes.centerAlign } >
												<TwitterIcon fontSize="large" style={{ padding: 16 }}/>
												<LinkedInIcon fontSize="large"  style={{ padding: 16 }} />
												<InstagramIcon fontSize="large"  style={{ padding: 16 }}/>
												<FacebookIcon  fontSize="large" style={{ padding: 16 }}/>
										</Box>
								</Box>
								<Typography className={ classes.centerAlign } color="initial" variant="subtitle1" component="legend">
								&#169; 2021 All right reserved
          		</Typography>
					</Box>
        </Grid>
    )
}

export default Footer
