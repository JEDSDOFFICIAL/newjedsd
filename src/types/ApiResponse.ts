import { Address, Author, Paper, User } from "@/model/User";

export interface ApiResponse {
  success: boolean;
  message?: string;
  user?:User;
  paper?:Paper;
  address?:Address;
  author?:Author;
};
