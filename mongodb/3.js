let modify1 = {
  findAndModify: "user",
  query: { name: "liushihong" },
  update: { $set: { age: 18 } },
  new: true
};

var result = db.runCommand(modify1);
printjson(result);

db.user.find(
  {
    age: { $gte: 20, $lte: 33 }
  },
  { name: true, age: true, _id: false }
);

db.user.find(
  {
    age: { $in: [18, 33] }
  },
  { name: true, age: true, _id: false }
);

db.user.find(
  {
    $or: [{ age: { $gte: 32 } }, { "pc.brand": "Inter" }]
  },
  { name: true, age: true, _id: false }
);

db.user.find(
  {
    $not: [{ age: { $gte: 32 } }]
  },
  { name: true, age: true, _id: false }
);

db.user.find({ hobby: "睡觉" }, { name: true, age: true, _id: false });

db.user.find(
  { hobby: { $all: ["耍赖", "睡觉"] } },
  { name: true, age: true, _id: false }
);

db.user.find(
  { hobby: { $in: ["敲代码", "睡觉"] } },
  { name: true, age: true, _id: false }
);

db.user.find({ hobby: { $size: 3 } }, { name: true, age: true, _id: false });

db.user.find({}, { name: true, age: true, _id: false }).limit(10).skip(0).sort({ age: 1 });

