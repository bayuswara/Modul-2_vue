var app = new Vue({
    el: "#app",
    data : {        
        todos: [],
        todo: ""        
    },
    
    created() {
        this.loadLocalStorage();
    },
    
    watch: {
        todos() {
            localStorage.setItem("todo", JSON.stringify(this.todos))
        }
    },
    
    methods: {
        loadLocalStorage() {
            const ls = JSON.parse(localStorage.getItem("todo"));
            console.log(ls);
            if(ls == null) { return; }
            this.todos = ls;
            console.log(this.todos);
        },
        addTodo : function() {
            this.todos.push(this.todo);
            this.todo = ""
        },
        deleteTodo: function(index) {
            this.todos.splice(index, 1);
        },
    }
})
