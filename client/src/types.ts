export type createAccount = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  repeat_password: string;
};

export type login = {
  email: string;
  password: string;
};

export type user = {
  email?: string;
  token?: string;
  _id?: string;
  first_name?: string;
  last_name?: string;
};
