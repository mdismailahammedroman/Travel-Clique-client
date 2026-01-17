import { z } from "zod";

const loginSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});
type loginFromData = z.infer<typeof loginSchema>;
const login = () => {
  return <div>login</div>;
};

export default login;
