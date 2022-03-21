import { Box, Button, Typography } from '@mui/material'

const Home = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '90vh' }}>
      <Typography component="h1" variant="h1" align="center" sx={{ fontWeight: 'bold' }} gutterBottom>Welcome to <Typography component="span" variant="inherit" color="primary.main">Destroy All Web</Typography></Typography>
      <Button variant="contained" href="blog">Go to blog</Button>
    </Box>
  )
}

export default Home
