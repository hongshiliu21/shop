import Mock from "mockjs";
import data from "./data.json";

Mock.mock("http://www.liushihong21.com/getList", { data: data.list });

let Random = Mock.Random;

let productData = () => {
  let productList = []; // 存放农机信息
  for (let i = 0; i < 100; i++) {
    let product = {
      name: Random.ctitle(5, 20),
      img: Random.dataImage("125x125", "农机" + Random.integer(1, 100)),
      price: Random.integer(1000, 10000),
      owner: Random.cname()
    };
    productList.push(product);
  }
  return productList;
};
Mock.mock("http://www.liushihong21.com/getVarietyItem", productData);
