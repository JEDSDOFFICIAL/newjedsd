import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      _id?: string;
      isVerified?: boolean;
      username?: string;
      email?: string;
      usertype?: 'Author' | 'Reviewer' | 'Admin';
      contactNumber?: string;
      address?: {
        city?: string;
        state?: string;
        country?: string;
        university?: string;
      };
      paper?: {
        paperName: string;
        abstract: string;
        keywords: string[];
        publishDate: Date;
        status: 'published' | 'uploaded' | 'onreview';
        paperurl: string;
      }[];
    } & DefaultSession['user'];
  }

  interface User {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
    email?: string;
    usertype?: 'Author' | 'Reviewer' | 'Admin';
    contactNumber?: string;
    address?: {
      city?: string;
      state?: string;
      country?: string;
      university?: string;
    };
    paper?: {
      paperName: string;
      abstract: string;
      keywords: string[];
      publishDate: Date;
      status: 'published' | 'uploaded' | 'onreview';
      paperurl: string;
    }[];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
    email?: string;
    usertype?: 'Author' | 'Reviewer' | 'Admin';
    contactNumber?: string;
    address?: {
      city?: string;
      state?: string;
      country?: string;
      university?: string;
    };
    paper?: {
      paperName: string;
      abstract: string;
      keywords: string[];
      publishDate: Date;
      status: 'published' | 'uploaded' | 'onreview';
      paperurl: string;
    }[];
  }
}
