export interface Education{
    university: string;
    degree: string;
    start: string;
    end: string;
    skills?: Skill[] | undefined;
}

export interface Skill{
    name: string;
}