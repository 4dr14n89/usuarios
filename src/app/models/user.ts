// Generated by https://quicktype.io

export interface User {
    id:         number;
    name:       string;
    email:      string;
    gender:     Gender;
    status:     Status;
    created_at: string;
    updated_at: string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export enum Status {
    Active = "Active",
    Inactive = "Inactive",
}
