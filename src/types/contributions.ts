
export type ContributionsTypes = {
    id?: number;
    first_name?: string;
    last_name?: string;
    amount?: number;
    created_at?: string
}

export type ContributionsDataTypes = {
    id?: number,
    title?: string,
    description?: string,
    created_at?: string,
    user?: string,
    contributors?: ContributionsTypes[],
}