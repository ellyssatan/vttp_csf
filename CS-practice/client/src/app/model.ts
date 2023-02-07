export interface Comment {
    text: string
    user: User
}

export interface User {
    name?: string
    email: string
    password: string
}