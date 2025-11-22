export type ContributionsTypes = {
    id: number;
    name: string;
    amount: number;
    created_at: string
}

export type ContributionsDataTypes = {
    id?: number,
    title?: string,
    created_at?: string,
    user?: string
    Contributors?: ContributionsTypes[]
}