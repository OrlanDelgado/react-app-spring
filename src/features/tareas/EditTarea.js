import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTarea } from './tareasSlice';
import { TextField, Button, Box } from '@mui/material';

const EditTarea = ({ tarea }) => {
  const [titulo, setTitulo] = useState(tarea ? tarea.titulo : '');
  const [descripcion, setDescripcion] = useState(tarea ? tarea.descripcion : '');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTarea({ ...tarea, titulo, descripcion }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mb: 2 }}>
      <TextField
        label="Título"
        variant="outlined"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Descripción"
        variant="outlined"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Actualizar
      </Button>
    </Box>
  );
};

export default EditTarea