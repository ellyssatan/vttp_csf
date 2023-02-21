// value objects, only store values
export interface Todo {
    name: string
    email: string
    comments?: string // means optional field/property
    tasks: Task[]
}

export interface Task {
    task: string
    priority: string
}