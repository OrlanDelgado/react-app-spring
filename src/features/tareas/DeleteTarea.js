import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTareaAsync } from './tareasSlice';
import { TextField, Button, Box, Snackbar, Alert } from '@mui/material';

export const DeleteTarea = () => {
  const [id, setId] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteTareaAsync(id)).unwrap();
      setOpen(true);
      setId('');
    } catch (err) {
      console.error('Failed to delete the task: ', err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <TextField
        label="ID de la Tarea"
        variant="outlined"
        value={id}
        onChange={(e) => setId(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Eliminar Tarea
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Tarea eliminada correctamente!
        </Alert>
      </Snackbar>
    </Box>
  );
};