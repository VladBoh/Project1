export interface Auth {
  login: boolean
  email: string;
  username?: string;
  password: string;
}
export interface UserPath {
  avatar: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface AuthorizationResponse {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
