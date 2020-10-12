export interface Epic {
    title: string;
    id: string;
    stories: Userstory[];
}
export interface EpicData  {
    title: string;
}
export interface Userstory {
    title: string;
    id: string;
    epic: Epic['id'];
}
export interface UserstoryData {
    title: string;
    epic?: Epic['id']
}
