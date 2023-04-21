// import { useState, useEffect } from "react";

// function Pract2() {
//   const [todos, setTodos] = useState([]);

//   const [lastSavedDate, setLastSavedDate] = useState(null);

//   // Check if the current date is different from the stored date on every page load or reload

//   useEffect(() => {
//     const currentDate = new Date().toLocaleDateString();

//     if (lastSavedDate !== currentDate) {
//       localStorage.clear();

//       setTodos([]);

//       setLastSavedDate(currentDate);
//     }
//   }, []);

//   function handleAddTodo(event) {
//     if (event.key === "Enter") {
//       const inputText = event.target.value;

//       const newTodo = { text: inputText, completed: false, deleted: false };

//       setTodos([...todos, newTodo]);

//       saveTodosToLocalStorage([...todos, newTodo]);

//       event.target.value = "";
//     }
//   }

//   function handleToggle(todoIndex, isCompleted) {
//     const updatedTodos = [...todos];

//     const updatedTodo = {
//       ...updatedTodos[todoIndex],
//       [isCompleted ? "completed" : "deleted"]: true,
//     };

//     updatedTodos[todoIndex] = updatedTodo;

//     setTodos(updatedTodos);

//     saveTodosToLocalStorage(updatedTodos);
//   }

//   function saveTodosToLocalStorage(todos) {
//     localStorage.setItem("todos", JSON.stringify(todos));

//     setLastSavedDate(new Date().toLocaleDateString());
//   }

//   // Load todos from localStorage on page load or reload

//   useEffect(() => {
//     const savedTodos = localStorage.getItem("todos");

//     if (savedTodos) {
//       setTodos(JSON.parse(savedTodos));
//     }
//   }, []);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Type a todo and press Enter"
//         onKeyDown={handleAddTodo}
//       />

//       {todos.map((todo, index) => (
//         <TodoItem
//           key={index}
//           text={todo.text}
//           isCompleted={todo.completed}
//           isDeleted={todo.deleted}
//           onToggle={() => handleToggle(index, !todo.completed)}
//           onDelete={() => handleToggle(index, !todo.deleted)}
//         />
//       ))}
//     </div>
//   );
// }

// export default Pract2;

// function TodoItem({ text, isCompleted, isDeleted, onToggle, onDelete }) {
//   return (
//     <div>
//       <input
//         type="radio"
//         checked={isCompleted || isDeleted}
//         onChange={onToggle}
//       />

//       <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
//         {text}
//       </span>

//       {isDeleted && <span> (Deleted)</span>}

//       {!isCompleted && !isDeleted && <button onClick={onDelete}>Delete</button>}
//     </div>
//   );
// }
