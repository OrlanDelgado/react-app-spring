// src/App.js
import React, {useState} from 'react';
import { CssBaseline, Box, Toolbar, Button, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';

//SideBar
import Header from './componets/Header';

//Componentes

import {TareasList}  from './features/tareas/TareasList';
import {AddTarea} from './features/tareas/AddTarea';
import EditTarea from './features/tareas/EditTarea';
import {DeleteTarea} from './features/tareas/DeleteTarea';

const App = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={Link} to="/agregar">
          <ListItemText primary="Agregar Tarea" />
        </ListItem>
        <ListItem button component={Link} to="/eliminar">
          <ListItemText primary="Eliminar Tarea" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Lista de Tareas" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header onMenuClick={toggleDrawer('left', true)} />
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<TareasList />} />
          <Route path="/agregar" element={<AddTarea />} />
          <Route path="/editar" element={<EditTarea />} />
          <Route path="/eliminar" element={<DeleteTarea />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;