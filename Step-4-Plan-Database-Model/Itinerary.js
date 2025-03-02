// To store travel itineraries.

const ItinerarySchema = {
  _id: ObjectId("I1111"),
  createdBy: ObjectId("U1111"),
  title: "String",
  startDate: "Date",
  endDate: "Date",
  accommodations: [ObjectId("A1111"), ObjectId("A1112")],
  pointsOfInterest: [ObjectId("P1111"), ObjectId("P1112")],
  sharedWith: [ObjectId("U1112"), ObjectId("U1113")],
  uploadedEmails: "String",
  createdAt: "Date",
  editedAt: "Date",
};
