export type UserRegister = {
  email: string;
  username: string;
  password: string;
};

export type UserLogin = Omit<UserRegister, "email">;
