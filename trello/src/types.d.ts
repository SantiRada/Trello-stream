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
    color?: Colors;
}

export type Tags = {
    id: string;
    title: string;
}

export type Colors = `#${string}`;