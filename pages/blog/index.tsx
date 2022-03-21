import { Card, CardActionArea, CardContent, Container, Grid, Typography, Box, Chip } from '@mui/material'
import data from '../../data/articles';
import dateTimeOptions from '../../utils/dateTimeOptions'

function Blog() {
  return (
    <>
      <Container component="section" sx={{ pt: 5 }}>
        <Typography variant="h5" component="h2" align="center">Blog</Typography>
        <Typography variant="h2" component="h1" align="center" sx={{ fontWeight: 'bold' }}>See whats happening to the web</Typography>
      </Container>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2} component="section" wrap="wrap">
          {data.map((article, index) => (
            <Grid item md={6} xs={12} key={article.slug + index}>
              <Card>
                <CardActionArea href={"/blog/" + article.slug}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: '100%' }}>
                      <Box sx={{ display: 'flex' }}>
                        {article.tags?.map((tag, i) => (<Chip label={tag} sx={{ mr: 1, textTransform: 'lowercase' }} size="small" key={tag + i} />))}
                      </Box>
                      <Typography gutterBottom variant="h5" component="h2">{article.title}</Typography>
                      <Typography gutterBottom variant="caption" component="p">{article.date.toLocaleDateString('en-us', dateTimeOptions)}</Typography>
                    </Box>
                    <Typography gutterBottom variant="body1" color="text.secondary">{article.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Blog