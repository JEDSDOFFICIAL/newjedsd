import mongoose, { Schema, Document, Model } from 'mongoose';

export interface Author {
  name: string;
  emailId: string;
  contactNumber: string;
}

export interface Paper extends Document {
  paperName: string;
  abstract: string;
  authors: Author[];
  keywords: string[];
  publishDate: Date;
  status: 'published' | 'uploaded' | 'onreview';
  pointofContact: Author;
  paperurl: string;
}

export interface Address extends Document {
  city?: string;
  state?: string;
  country?: string;
  university?: string;
}

export interface User extends Document {
  username: string;
  email: string;
  password?: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  usertype: 'Author' | 'Reviewer' | 'Admin';
  paper?: Paper[];
  contactNumber?: string;
  address?: Address;
}


const AuthorSchema: Schema<Author> = new Schema({
  name: { type: String, required: true },
  emailId: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

const PaperSchema: Schema<Paper> = new Schema({
  paperName: { type: String, required: true },
  abstract: { type: String, required: true },
  authors: { type: [AuthorSchema], required: true },
  keywords: { type: [String], required: true },
  publishDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ['published', 'uploaded', 'onreview'],
    default: 'uploaded',
  },
  pointofContact: { type: AuthorSchema, required: true },
  paperurl: { type: String, required: true },
});

const AddressSchema: Schema<Address> = new Schema({
  city: { type: String },
  state: { type: String },
  country: { type: String },
  university: { type: String },
});


const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please use a valid email address'],
  },
  password: {
    type: String
  },
  verifyCode: {
    type: String,
    required: [true, 'Verify Code is required'],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, 'Verify Code Expiry is required'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  usertype: {
    type: String,
    enum: ['Admin', 'Reviewer', 'Author'],
    default: 'Author',
  },
  paper: { type: [PaperSchema] },
  contactNumber: { type: String },
  address: { type: AddressSchema },
});

export const PaperModel: Model<Paper> =
  mongoose.models.Paper || mongoose.model<Paper>('Paper', PaperSchema);

export const UserModel: Model<User> =
  mongoose.models.User || mongoose.model<User>('User', UserSchema);
