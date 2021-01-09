const sleep = (milliseconds) => {
  let promise = new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });

  promise.then(() => {
    console.log("resolved successfuly");
  });
};

sleep(9000);
