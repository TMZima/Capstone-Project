// To store user info and details

const UserSchema = {
  _id: ObjectId("U1111"),
  username: "String",
  password: "String",
  email: "String",
  itineraries: [ObjectId("I1111"), ObjectId("I1112")],
  friends: [ObjectId("U1112"), ObjectId("U1113")],
  createdAt: "Date",
  editedAt: "Date",
};
