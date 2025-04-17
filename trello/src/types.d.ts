export type Column = {
    id: string;
    title: string;
    list: Task[];
}

export type TaskType = {
    id: string;
    title: string;
    completed: boolean;
    desc?: string;
    tags?: Tags[];
}

export type Tags = {
    id: number;
    title: string;
}