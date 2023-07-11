// const scrollToTopButton = document.querySelector("#scroll-to-top");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 400) {
//     scrollToTopButton.style.display = "block";
//   } else {
//     scrollToTopButton.style.display = "none";
//   }
// });

// scrollToTopButton.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

//practice of screen width and height
// const width = document.documentElement.clientWidth;
// const height = document.documentElement.clientHeight;
// console.log(width, height);

//practice of location,histroy
// const location = window.location;
// console.log(location);
//manipulating the location
// location.href = "https://www.google.com";
// location.reload();

// const history = window.history;
// console.log(history);
// history.back();
// history.forward();

//practice of navigator
// const navigator = window.navigator;
// console.log(navigator);
// console.log(navigator.userAgent);
// console.log(navigator.platform);

//practice of setTimeout, setInterval, clearInterval and clearTimeout
// const timeoutId = setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// const intervalId = setInterval(() => {
//   console.log("Hello");
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// const timeoutId = setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// setTimeout(() => {
//   clearTimeout(timeoutId);
// }, 5000);

//practice of localStorage and sessionStorage
// localStorage.setItem("name", "Mostafa");
// localStorage.setItem("age", 21);
// localStorage.setItem("isMarried", true);

// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// const isMarried = localStorage.getItem("isMarried");

// console.log(name, age, isMarried);

// localStorage.removeItem("name");
// localStorage.clear();

// sessionStorage.setItem("name", "Mostafa");
// sessionStorage.setItem("age", 21);
// sessionStorage.setItem("isMarried", true);

// const name = sessionStorage.getItem("name");
// const age = sessionStorage.getItem("age");
// const isMarried = sessionStorage.getItem("isMarried");

// console.log(name, age, isMarried);

// sessionStorage.removeItem("name");
// sessionStorage.clear();
