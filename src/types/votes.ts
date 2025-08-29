export interface Votes {
    good: number;
    neutral: number;
    bad: number;
}

// keyof - ключі інтерфейсу Votes
export type VoteType = keyof Votes;