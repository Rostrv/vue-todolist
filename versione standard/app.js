const app = new Vue({
    el: '#app',
    data: {
        newTask: [],

        tasks: [{
                text: 'Learn Javascript',
                done: false
            },

            {
                text: 'Go crazy',
                done: true

            },

            {
                text: 'Clean camera lenses',
                done: false
            },

            {
                text: 'Walk the dog',
                done: true
            }

        ],

    },

    methods: {
        addTask() {
            console.log('add new task');
            console.log(this.tasks)
            this.tasks.push({ text: this.newTask, done: false })

        },

        removeTask(index) {
            this.tasks.splice(index, 1)

        },

        checked(index) {

            if (this.tasks[index].done == true)
                this.tasks[index].done = false

            else {
                this.tasks[index].done = true
            }

        }


    }


});