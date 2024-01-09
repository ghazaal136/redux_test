import Layout from "@/components/layout";
import useStore from "@/store";
import { Box, Button, TextField, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

const Home = () => {
  const theme = useTheme();
  const store = useStore();
  const todoList = useStore(useShallow((state) => state.todoList))
  const setNewTodo = useStore(useShallow((state) => state.setNewTodo))
  
  const fetchTodoList = async () => {
    const response = await axios.get(
      "https://659d0c2b633f9aee79087930.mockapi.io/api/v1/todo"
    );
    store.fetchTodoList(response.data)
  };
  useEffect(() => {
    fetchTodoList();
  },[]);

  return (
    <Layout>
      <>
        <Box>
          <TextField
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
            value={store.newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button
            variant='contained'
            sx={{ mr: 1 }}
            onClick={store.addTodo}
          >
            Add
          </Button>
        </Box>
        <Box>
          {todoList.map(
            (todo: { id: number; text: string }, index: number) => (
              <Box key={index}>{todo.text}</Box>
            )
          )}
        </Box>
      </>
    </Layout>
  );
};

export default Home;
