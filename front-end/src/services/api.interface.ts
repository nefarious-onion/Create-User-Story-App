export interface Epic {
    title: string;
    id?: string;
    stories?: Userstory[];
}

export interface Userstory {
    title: string;
    id?: string; 
}