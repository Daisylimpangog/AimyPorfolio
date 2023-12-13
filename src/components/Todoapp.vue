<template>
  <div class="container">
    <div class="title"><h1>Todo App</h1></div>
    <div class="actions">
      <form @submit="addTask">
        <input type="text" placeholder="Add a task" v-model="task" required />
        <input type="text" placeholder="Search Task" v-model="searchQuery" />
        <button type="submit">Add</button>
        <button class="clear-btn" @click="clearTasks">Clear</button>
      </form>
    </div>
    <div class="tasks">
      <div class="task-items" v-for="todo in filteredTodos" :key="todo.id">
        <p :class="{ completed: todo.status }">{{ todo.details }}</p>
        <button class="done-btn" @click="toggleDone(todo)">Done</button>
        <button class="remove-btn" @click="removeTask(todo.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      task: "",
      todos: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredTodos() {
      const query = this.searchQuery.toLowerCase();
      return this.todos.filter((todo) =>
        todo.details.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    addTask(e) {
      e.preventDefault();
      const newTask = {
        id: uuidv4(),
        details: this.task,
        status: false,
      };
      this.todos.unshift(newTask);
      this.task = "";
    },
    removeTask(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    toggleDone(todo) {
      todo.status = !todo.status;
    },
    clearTasks() {
      // Clear all tasks by setting todos to an empty array
      this.todos = [];
    },
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: black;
  margin-top: 60px;
}

.container2 {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 1);
  -webkit-backdrop-filter: blur(33px);
  backdrop-filter: blur(33px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
}

h1 {
  font-size: 24px;
  margin: 0;
  color: #333;
}

.actions {
  margin-top: 20px;
}

form {
  display: flex;
  flex-wrap: wrap; /* Allow form elements to wrap to the next line on small screens */
  justify-content: space-between;
  align-items: center;
}

input[type="text"] {
  width: 100%; /* Take up the full width on small screens */
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 48%; /* Make buttons take up half the width on small screens */
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.clear-btn {
  width: 100%; /* Make clear button take up full width on small screens */
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.tasks {
  margin-top: 20px;
}

.task-items {
  display: flex;
  flex-wrap: wrap; /* Allow task items to wrap to the next line on small screens */
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

p {
  flex: 1;
  margin: 0;
}

.completed {
  text-decoration: line-through;
}

.done-btn,
.remove-btn {
  width: 48%; /* Make action buttons take up half the width on small screens */
}

.done-btn {
  background-color: #28a745;
}

.done-btn:hover {
  background-color: #218838;
}

.remove-btn {
  background-color: #dc3545;
}

.remove-btn:hover {
  background-color: #c82333;
}

@media (min-width: 600px) {
  /* Apply styles for screens wider than 600px if needed */
}
</style>
