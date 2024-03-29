import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const schema = new mongoose.Schema({
  name: String,
  phone: String,
  serviceOrder: String,
  clientNumber: String,
  dischargeDate: String,
  note: String,
  sentToday: Boolean,
  sentThreeDays: Boolean,
  sentSevenDays: Boolean,
  sentOneMonth: Boolean,
  sentThreeMonths: Boolean,
  sentSixMonths: Boolean,
})

export const ClientMongo = mongoose.model("Client", schema)