var user21 = {
  name: "liushihong",
  age: 32,
  hobby: ["敲代码", "学习", "看视频"],
  pc: {
    brand: "Inter",
    price: 5000
  }
};

var user22 = {
  name: "liujia",
  age: 32,
  hobby: ["看电视", "拼积木"]
};

var user23 = {
  name: "liuyuan",
  age: 32,
  hobby: ["看电视", "瞎闹"]
};

var user24 = {
  name: "shechunlian",
  age: 32,
  hobby: ["看视频", "购物"],
  pc: {
    brand: "Inter",
    price: 6000
  }
};

var db = connect("weichuang");
db.user.insert([user21, user22, user23, user24]);
print("insert success 4 data!");

db.user.update(
  { name: "shechunlian" },
  {
    name: "shechunlian",
    age: 18,
    hobby: ["看视频", "购物"],
    pc: {
      brand: "Inter",
      price: 6000
    }
  }
);
