import { Box } from '@mui/material'
const Footer = () => {
  return (
    <Box component="footer" sx={{borderTop: 1, borderColor: 'grey.300', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1}}>Copyright © {new Date().getFullYear()} Destroy All Web. </Box>
  );
};

export default Footer