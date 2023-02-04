export interface Todo {
    task: string
    priority: string
    dueDate: string
}

export interface User {
    name: string
    email: string
    todos: Todo[]
}