import React, {createContext, useContext, useState} from "react";
import{ v4 as uuidv4} from 'uuid';
const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos,setTodos] = useState([{id:1,text:"Learn React",completed:true}]);
const  [filter,setFilter] = useState("all");
    const  addTodo = (text) =>
        setTodos((prev) => [...prev,{id:uuidv4(),completed:false,text }]);

    const toggleTodo = (id) => {
        const clone_todos = [...todos];

        const itemIndex = clone_todos.findIndex((todo) => todo.id === id);
        const item = todos[itemIndex];
        item.completed = !item.completed;

        setTodos(clone_todos);
     }
    const DestroyTodo = (id) =>{
        const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex(todo => todo.id === id);
        cloned_todos.splice(itemIndex,1);
        setTodos(cloned_todos);
    }


const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    DestroyTodo,
    filter,setFilter
}

return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
};

export const useTodo = () =>{
    const context = useContext(TodoContext);
    if (context === undefined){
        throw new Error("useTodo hook must be call inside TodoProvider component");
    }
    return context;
};