function getTel() {
  var prefixArr = [
    "130",
    "132",
    "133",
    "134",
    "135",
    "136",
    "150",
    "151",
    "155"
  ];

  var tel = prefixArr[parseInt(Math.random() * 10)];
  for (let i = 0; i < 8; i++) {
    tel += Math.floor(Math.random() * 10);
  }
  return tel;
}
// console.log(getTel());

var startTime = new Date().getTime();
var db = connect("weichuang");
var tempInfo = [];
for (let i = 0; i < 1000000; i++) {
  tempInfo.push({
    loginTime: new Date(),
    phone: getTel()
  });
}

db.tel.insert(tempInfo);
var runTime = new Date().getTime() - startTime;
print("run time is " + runTime + "ms");
