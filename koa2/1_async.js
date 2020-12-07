function timeout() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(11);
      resolve();
    }, 3000);
  });
}

async function fn() {
  await timeout();
  console.log(22);
}

fn();

// async function timeout() {
//   return "1";
// }
// timeout();
// console.log(2);

// async function timeout() {
//   return "1";
// }
// console.log(timeout());
// console.log(2);
