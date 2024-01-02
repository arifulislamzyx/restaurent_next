const { username, password } = process.env;

export const connectionDb = `mongodb+srv://${username}:${password}@cluster0.1m3fl9p.mongodb.net/restaurent?retryWrites=true&w=majority`;
