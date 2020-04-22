import React, { useState } from "react"
import Header from "./header"
import SimpleModal from '../components/SimpleModal'
import image from '../images/whitemask.jpg'
import image2 from '../images/mask1.jpg'
import image3 from '../images/mask2.jpg'
import image4 from '../images/envato-4966946_1920.jpg'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import { text1, text2, text3 } from './text';
import { CardContent, Typography, Box, Card, Paper, Container, Grid, makeStyles, CardMedia } from '@material-ui/core';
import "./layout.css"

import { useWindowSize } from './size';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 380,
    margin: 2,
  },
  paper: {
    height: 260,
  },
  control: {
    padding: 2,
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    minHeight: 700,
  },
  container: {
    padding: 0
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 1,
  },
  mainCaption: {
    padding: 1,
  },
  mainCard: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: 600,
  },
  mainCardMobile: {
    width: 450,
    opacity: .7,
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const renderPopUp = (event) => {
    setOpen(true)
  }
  const [width, height] = useWindowSize();
  return (
    <>
      <Header renderPopUp={renderPopUp} />
      <Container maxWidth={false} component='main' className={classes.container}>
        <Box className={classes.box}>
          <Card className={width < 600 ? classes.mainCardMobile : classes.mainCard}>
            <Typography variant="h4" component="h2" className={classes.mainCaption}>
              Цены на маски: от 100 штук - 30р.
             </Typography>
            <Typography variant="h4" component="h2" className={classes.mainCaption}>
              Цены на маски: от 1000 штук - 28р.
             </Typography>
            <Typography variant="h5" component="h5" className={classes.mainCaption}>
              Всегда можно обсудить цену с менеджером, гибкий подход!
              </Typography>
            <Typography variant="h5" className={classes.control}>
              Мы открыли своё производство в городе Реутов, так же у нас имеются маски производства Китай!
            </Typography>
            <Box className={classes.icon}>
              <object type="image/svg+xml" data={icon1} width="99" height="99" >Whatsap</object>
              <object type="image/svg+xml" data={icon2} width="99" height="99" >Vhiber</object>
              <object type="image/svg+xml" data={icon3} width="99" height="99" >VK</object>
              {width > 430 && <object type="image/svg+xml" data={icon4} width="99" height="99" >Telegramm</object>}
            </Box>
          </Card>
        </Box>
        <Box className={classes.card}>
          {open && <SimpleModal handleOpen={open} />}
          <Grid className={classes.root}>
            <Paper elevation={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Маски на лицо"
                  height={250}
                  width={50}
                  image={image2}
                  title="Маска на лицо"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.paper}>{text2}</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid className={classes.root}>
            <Paper elevation={3}>
              <Card >
                <CardMedia
                  component="img"
                  alt="Маска на лицо"
                  height={250}
                  width={50}
                  image={image3}
                  title="Маска на лицо"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.paper}>{text3}</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid className={classes.root}>
            <Paper elevation={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Маска на лицо"
                  height={250}
                  width={50}
                  image={image4}
                  title="Маска на лицо"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.paper}>{text1}</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Box>
      </Container>
      <footer>
      </footer>
    </>
  )
}

export default Layout
