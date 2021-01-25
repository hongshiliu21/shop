var db = connect("weichuang");
var userList = db.user.find();
userList.forEach(user => {
  printjson(user);
});
