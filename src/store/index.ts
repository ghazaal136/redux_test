import { create } from "zustand";

interface PostsType {
  todoList: {
    id: number;
    text: string;
  }[];
  newTodo: string;
  addTodo: () => void;
  setNewTodo: (text: string) => void;
  fetchTodoList: (lisTArray: {id: number, text:string}[]) => void;
}

const useStore = create<PostsType>((set) => ({
  todoList: [],
  newTodo: "",
  addTodo() {
    set((state) => ({
      ...state,
      todoList: addNewTodo(state.todoList, state.newTodo),
      newTodo: '',
    }));
  },
  setNewTodo(text: string) {
    set((state) => ({
        ...state,
        newTodo: text
    }))
  },
  fetchTodoList(listArray: {id: number, text:string}[]){
    set((state) => ({
        ...state,
        todoList: listArray
    }))
  }
}));

function addNewTodo(
  todoList: { id: number; text: string }[],
  newTodo: string
): { id: number; text: string }[] | undefined {
  return [
    ...todoList,
    {
      id: Math.random(),
      text: newTodo,
    },
  ];
}

export default useStore;
