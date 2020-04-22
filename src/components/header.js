import React, { useState } from "react";
import { AppBar, Toolbar, Grow, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TransitionsModal from './SimpleModal';
import { useWindowSize } from './size';
import './layout.css';

const useStyles = makeStyles((theme) => ({
  desktop: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  mobile: {
    fontSize: 13,
    padding: 0,
    margin: 0,
    color: 'white',
    lineHeight: 1.4,
    fontWeight: 'bold',
  }
}));

const Header = () => {
  const [width, height] = useWindowSize();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(width)
  return (
    <AppBar position="sticky">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box style={{ textAlign: 'center' }}>

          <a style={{ textDecoration: 'none', color: 'inherit' }} href="tel:+79252397970">
            <Typography variant="h4" >+79252397970</Typography>
          </a>

          <Typography style={{ fontSize: '14px' }} variant="h6" >
            КРУГЛОСУТОЧНО
              </Typography>
        </Box>
        {width > 920 ? <Box>

          <Typography variant='h4'>
            Маски от производителя!
            </Typography>

        </Box> : null}
        <Box style={{ marginLeft: '10px' }}>
          {open && <TransitionsModal
            handleClose={handleClose}
            open={open}
          />}

          <Button onClick={handleOpen} style={{
            backgroundColor: '#eed731'
          }}>
            < Typography className={width < 500 ? classes.mobile : classes.desktop} variant="h6" >
              Заказать звонок
          </Typography>
          </Button>

        </Box>
      </Toolbar >
    </AppBar >
  )
}


export default Header
