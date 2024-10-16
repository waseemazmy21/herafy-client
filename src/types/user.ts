type User = {
  name: string;
  email: string;
  role: "client" | "craftsman";
  photo?: string;
  jobTitle?: string;
  description?: string;
};

export default User;
