import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_URL!);

const btc = new mongoose.Schema({
  bullish: Number,
  bearish: Number,
});

const eth = new mongoose.Schema({
  bullish: Number,
  bearish: Number,
});

const sol = new mongoose.Schema({
  bullish: Number,
  bearish: Number,
});

export const btcSchema = mongoose.models.btcSchema || mongoose.model("btcSchema", btc);
export const ethSchema = mongoose.models.ethSchema || mongoose.model("ethSchema", eth);
export const solSchema = mongoose.models.solSchema || mongoose.model("solSchema", sol);
