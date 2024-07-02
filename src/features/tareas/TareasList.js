// src/features/tareas/TareasList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTareas, deleteTareaAsync  } from './tareasSlice';
import { Box, Card, CardContent, Typography, Grid , CircularProgress, Alert, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const TareasList = () => {
  const dispatch = useDispatch();
  const { items: tareas, error } = useSelector((state) => state.tareas);
  const isLoading = useSelector((state) => state.tareas.loading);

  useEffect(() => {
    dispatch(fetchTareas());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTareaAsync(id));
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Error fetching tareas: {error.message}</Alert>;
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Tareas
      </Typography>
      <Grid container spacing={2}>
        {tareas.map((tarea) => (
          <Grid item xs={12} sm={6} md={4} key={tarea.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{tarea.titulo}</Typography>
                <Typography variant="body2">{tarea.descripcion}</Typography>
                <IconButton aria-label="delete" onClick={() => handleDelete(tarea.id)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
