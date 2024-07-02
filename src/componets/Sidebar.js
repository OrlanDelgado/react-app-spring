import React from 'react';
import { Drawer, List, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    


    return (
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          <Link to="/agregar">
            <ListItemText primary="Agregar Tarea" />
          </Link>
          <Link to="/editar">
            <ListItemText primary="Editar Tarea" />
          </Link>
          <Link to="/eliminar">
            <ListItemText primary="Eliminar Tarea" />
          </Link>
          <Link to="/">
            <ListItemText primary="Lista de Tareas" />
          </Link>
        </List>
      </Drawer>
    );
  };
  
  export default Sidebar;