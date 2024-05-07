export type Person = { 
    name: string, 
    type: "pi" | "postdoc" | "phd" | "masters" | "staff" | ""
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