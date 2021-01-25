let userName = "liujiajia",
  time = Date.parse(new Date()),
  data = {
    userName,
    time
  };

var db = connect("weichuang");
db.user.insert(data);
print("insert success!");
