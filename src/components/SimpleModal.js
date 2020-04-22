import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { TextField, Grow, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    boxShadow: 'inset 0px 0px 12px 1px rgba(79,79,79,1)',
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    margin: 10
  },
  textField: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10
  },
  send: {
    fontSize: 15,
  }
}));

export default function TransitionsModal({ handleClose, open }) {
  const classes = useStyles();

  const [formName, setFormName] = useState('');
  const [formTel, setFormTel] = useState('');

  const getForm = (e) => {
    const formData = new FormData()
    formData.append('name', formName)
    formData.append('tel', formTel)
    fetch('post.php', {
      method: 'POST',
      body: formData
    })
      .then(r => r.json())
      .then(data => {
        console.log(data)
      })
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grow in>
              <Typography variant='h6'>
                Заказать обратный звонок
              </Typography>
            </Grow>
            <TextField onChange={(event) => setFormName(event.target.value)} className={classes.textField} id="standard-secondary" label="Ваше имя" />
            <TextField onChange={(event) => setFormTel(event.target.value)} className={classes.textField} id="standard-secondary" label="Номер телефона" />
            <Button onClick={getForm} style={{
              backgroundColor: '#eed731',
              marginTop: 10
            }}>
              < Typography className={classes.send} >
                Отправить
              </Typography>
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}