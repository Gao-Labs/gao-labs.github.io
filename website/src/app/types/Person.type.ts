export type Person = { 
    name: string, 
    bio: string, 
    title: string, 
    image: string,
    role?: string,
    team?: "uTech" | "CAT",
    yearIfPastMember?: number,
    linkedinUrl?: string, 
    websiteUrl?: string,
    email?: string,
    githubUrl?: string
}