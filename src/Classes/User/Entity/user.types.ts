export type Permission = {
    id: number,
    name: string
}
export type Group = {
    id: number
    name: string
    permissions: Permission[]
}
export type User = {
    id: number
    firstName: string
    lastName: string
    username: string
    email: string
    lastLogin: string | null
    dateJoined: string | null
    groups: Group[]
}
