var startTime = new Date().getTime();
var db = connect("weichuang");
var result = db.tel.find({ phone: "15584103769" });
result.forEach(item => printjson(item));

var runTime = new Date().getTime() - startTime;
print("run time is " + runTime + "ms");

// db.tel.ensureIndex({phone:1});