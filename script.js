//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const number = parseFloat(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");

  // Initial promise to start the chain
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.textContent = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const newResult = result * 2;
          outputDiv.textContent = `Result: ${newResult}`;
          resolve(newResult);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const newResult = result - 3;
          outputDiv.textContent = `Result: ${newResult}`;
          resolve(newResult);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const newResult = result / 2;
          outputDiv.textContent = `Result: ${newResult}`;
          resolve(newResult);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const newResult = result + 10;
          outputDiv.textContent = `Result: ${newResult}`;
          resolve(newResult);
        }, 1000);
      });
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error.message}`;
    });
});

