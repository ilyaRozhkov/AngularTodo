export interface TodoChildren{
    id: number,
    title: string,
    parentId: number,
    createdAt: string,
    complited: boolean

}
export interface Todo{
    id: number,
    title: string,
    createdAt: string,
    complited: boolean,
    children: TodoChildren[]
}

