import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTareaAsync } from './tareasSlice';
import { TextField, Button, Box, Snackbar, Alert } from '@mui/material';

export const AddTarea = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.tareas);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addTareaAsync({ id: Date.now(), titulo, descripcion, completado: false })).unwrap();
      setOpen(true);
      setTitulo('');
      setDescripcion('');
    } catch (err) {
      console.error('Failed to save the task: ', err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mb: 2 }}>
      <TextField
        label="Título"
        variant="outlined"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Descripción"
        variant="outlined"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Agregar Tarea
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Tarea guardada correctamente!
        </Alert>
      </Snackbar>
      {error && (
        <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Error al guardar la tarea: {error.message}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};
