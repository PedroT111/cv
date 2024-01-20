export interface Job{
    company: string;
    role: string;
    start: string;
    end: string;
    tasks: JobTask[];
}

export interface JobTask{
    description: string;
}