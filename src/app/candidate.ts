export interface Candidate {
    id: number,
    name: string,
    role: string,
    location: string,
    profile_photo: string,
    status: number,
    comment: string,
    reference: {
        leads: number,
        captured: number
    }
}
