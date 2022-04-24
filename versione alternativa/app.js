const app = new Vue({
    el: '#app',
    data: {
        newTask: [],

        completed: [],

        recycle: [],

        tasks: [{
                text: 'Learn Javascript',
                done: false
            },

            {
                text: 'Go crazy',
                done: false

            },

            {
                text: 'Clean camera lenses',
                done: false
            },

            {
                text: 'Walk the dog',
                done: false
            }

        ],

    },

    methods: {
        addTask() {
            console.log('add new task');
            console.log(this.tasks);
            this.tasks.push({ text: this.newTask, done: false });
        },

        // Dalla lista di sinistra faccio check
        // Prendo l'oggetto task passato dall'html @click="checked(task, index) e lo pusho nel nuovo array"
        checked(task, index) {
            if (this.tasks[index].done == true) {
                this.tasks[index].done = false;
            } else {
                this.tasks[index].done = true;
                /* Pusho sul nuovo array
                Attenzione: Non puoi passare in text solo il parametro task, perchè è un oggetto
                Devi entrare nell'oggetto e passare il testo task.text
                text: task ( NO )
                text: task.text ( SI )
                */
                this.completed.push({ text: task.text, done: true });
                // Rimuovo dal vecchio array
                this.tasks.splice(index, 1);
            }

        },


        moveInTodo(task, index) {

            this.tasks.push({ text: task.text, done: false });
            this.completed.splice(index, 1);

        },


        removeTask(task, index) {
            this.recycle.push({ text: task.text, done: false });
            this.tasks.splice(index, 1);
            this.completed.splice(index, 1);

        },

        restore(task, index) {

            this.tasks.push({ text: task.text, done: false });
            this.recycle.splice(index, 1)
        },


        deleteAll() {
            this.recycle.splice(0, this.recycle.length)

        },



    }


});