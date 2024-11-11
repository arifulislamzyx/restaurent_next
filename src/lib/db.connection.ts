const { username, password } = process.env;

const connectionDb = `mongodb+srv://${username}:${password}@cluster0.1m3fl9p.mongodb.net/restaurent?retryWrites=true&w=majority`;

export default connectionDb;
