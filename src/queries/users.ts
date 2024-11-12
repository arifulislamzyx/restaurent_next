import { User } from "../../server/models/user.schema";

export async function createUser(user: {
  name: string;
  password: string;
  email: string;
}) {
  try {
    return await User.create(user);
  } catch (e) {
    throw new Error(`Error While creating User${e}`);
  }
}
