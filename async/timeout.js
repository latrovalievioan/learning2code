/**
 * @description
 * Times out an asynchronous operation after a given time.
 * @param {Promise.<T>} promise - The asyncronous operation which you want to time out.
 * @param {number} timeoutMs - Milliseconds after which the operation should time out.
 * @returns {Promise.<T>} A promise which resolves with the value of the passed promise
 * if the passed promise resolves faster than the given timeout. If the passed promise
 * takes more than the passed timeout, this promise will reject.
 */
const timeout = (promise, timeoutMs) => {
  return new Promise((resolve, reject) => {
    promise.then((v) => resolve(v));
    setTimeout(() => reject(), timeoutMs);
  });
};

const promische = new Promise((resolve) => {
  setTimeout(() => resolve("ioni mrazi promisi"), 3000);
});
for (let i = 0; i < 20; i++)
  timeout(promische, 3000).then((r) => console.log(r));
