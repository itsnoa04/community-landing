export default interface usersSchema {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
    bio: string;
    social: {
        youtube: string;
        twitter: string;
        github: string;
    };
    icon: string;
  }