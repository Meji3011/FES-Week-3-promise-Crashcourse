// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
const emailRef = document.querySelector(".email");

// Two ways in fetching
// 1. Then

// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
//     response.json().then(data => {
//         emailRef.innerHTML = data.email;
//     })
// })

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
// // This step is where we get a json as promise, but need to
// // extract it to data
//   })
//   .then((data) => {
// // we extract the data here
//     console.log(data);
// // and use emailRef to grab the relevant info we need to display.
//     emailRef.innerHTML = data.email
//   });

// 2. Async/Await
// Much cleaner and easier to understand when reading the code.
const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video")

// async function main() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data = await response.json();
//   console.log(data);
//   emailRef.innerHTML = data.email;
// }

// main();

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
}

// // 1. Then
// // getSubscriptionStatus().then(response => console.log(response))

// // Async/Await
// async function VIPCall() {
//     const status = (await getSubscriptionStatus())
//     statusRef.innerHTML = status
// }

// console.log(VIPCall())

function getVideo(SubscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (SubscriptionStatus === "VIP") {
      resolve("Show video");
    } else if (SubscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("No video");
    }
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  try {
    console.log(await getVideo(status))
  }
  catch (e) {
    console.log(e)
    videoRef.innerHTML = e;
  }
}

main()
