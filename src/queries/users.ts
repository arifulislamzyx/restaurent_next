import { User } from "../../server/models/user.schema";

export async function createUser(user) {
  try {
    return await User.create(user);
   
  } catch (e) {
    throw new Error(e);
  }
}
