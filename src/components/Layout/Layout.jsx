import { AppBar, Box, Toolbar, styled, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import hrNetLogo from '../../images/hr_net_logo.svg';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Layout = ({ children }) => {
  return (
    <>
      <AppBar sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Box component="img" src={hrNetLogo} alt="" sx={{ maxHeight: 48, m: 1 }} />
          <Typography variant="h1" style={visuallyHidden}>
            HR Net
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
      <Box component="main" sx={{ p: 5 }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
