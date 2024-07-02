import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const apiUrl = process.env.REACT_APP_API_URL;

export const fetchTareas = createAsyncThunk('tareas/fetchTareas', async () => {
  const response = await axios.get(`${apiUrl}/tareas`);
  return response.data;
});

export const addTareaAsync = createAsyncThunk('tareas/addTarea', async (tarea, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${apiUrl}/tareas`, tarea);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteTareaAsync = createAsyncThunk('tareas/deleteTarea', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${apiUrl}/tareas/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const tareasSlice = createSlice({
  name: 'tareas',
  initialState: { items: [], error: null },
  reducers: {
    setTareas: (state, action) => {
      state.items = action.payload;
    },
    addTarea: (state, action) => {
      state.items.push(action.payload);
    },
    removeTarea: (state, action) => {
      state.items = state.items.filter(tarea => tarea.id !== action.payload);
    },
    updateTarea: (state, action) => {
      const index = state.items.findIndex(tarea => tarea.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTareas.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTareaAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addTareaAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteTareaAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(tarea => tarea.id !== action.payload);
      })
      .addCase(deleteTareaAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { setTareas, addTarea, removeTarea, updateTarea } = tareasSlice.actions;
export default tareasSlice.reducer;
