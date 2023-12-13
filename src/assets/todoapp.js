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
