export type Person = { 
    name: string, 
    type: "pi" | "faculty" | "postdoc" | "phd" | "masters" | "staff" | "former" |  ""
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