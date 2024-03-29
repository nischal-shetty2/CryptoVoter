import mongoose from "mongoose";
const connection: { isConnected?: number } = {};
export default async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URL!);

  connection.isConnected = db.connections[0].readyState;
}
