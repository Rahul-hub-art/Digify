/* =========================
   RUN AFTER PAGE LOAD
========================= */

document.addEventListener("DOMContentLoaded", function(){


/* =========================
   LOADER
========================= */

const loader = document.getElementById("loader");

if(loader){
window.addEventListener("load", () => {
setTimeout(()=>{
loader.classList.add("hide");
},500);
});
}

/* =========================
   SEARCH FUNCTION
========================= */

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if(searchBtn){

searchBtn.addEventListener("click", function(){

let query = searchInput.value.toLowerCase();

const courses = document.querySelectorAll(".course-card");

courses.forEach(course=>{

let text = course.innerText.toLowerCase();

if(text.includes(query)){
course.style.display="block";
}else{
course.style.display="none";
}

});

});

}

/* =========================
   DROPDOWN MOBILE SUPPORT
========================= */

const dropBtn = document.querySelector(".dropbtn");

if(dropBtn){

dropBtn.addEventListener("click", function(){

let menu = document.querySelector(".dropdown-content");

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}

});

}


/* =========================
   LOGIN BUTTON
========================= */

const loginBtn = document.querySelector(".login-btn");

if(loginBtn){

loginBtn.addEventListener("click", function(){

alert("Login page coming soon");

});

}


/* =========================
   REGISTER BUTTON
========================= */

const registerBtn = document.querySelector(".register-btn");

if(registerBtn){

registerBtn.addEventListener("click", function(){

alert("Register page coming soon");

});

}

/* =========================
   HERO SLIDER
========================= */

const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){

slides.forEach(slide => slide.classList.remove("active"));

if(slides[i]){
slides[i].classList.add("active");
}

}

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if(nextBtn){
nextBtn.addEventListener("click", () => {

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

});
}

if(prevBtn){
prevBtn.addEventListener("click", () => {

index--;

if(index < 0){
index = slides.length - 1;
}

showSlide(index);

});
}


/* AUTO SLIDER */

if(slides.length > 0){

setInterval(()=>{

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

},5000);

}


/* =========================
   ARTICLE CLICK EFFECT
========================= */

document.querySelectorAll(".article").forEach(article => {

article.addEventListener("click", ()=>{

article.style.transform="scale(1.05)";

setTimeout(()=>{
article.style.transform="";
},200);

});

});


/* =========================
   TESTIMONIAL EFFECT
========================= */

document.querySelectorAll(".testimonial").forEach(card => {

card.addEventListener("mouseenter", ()=>{
card.style.boxShadow="0 10px 25px rgba(0,0,0,.4)";
});

card.addEventListener("mouseleave", ()=>{
card.style.boxShadow="none";
});

});


/* =========================
   OFFER BUTTON PULSE
========================= */

const offerBtn = document.querySelector(".offer .btn");

if(offerBtn){

setInterval(()=>{
offerBtn.classList.toggle("pulse");
},1000);

}


/* =========================
   COURSE FILTER
========================= */

const filterBtns = document.querySelectorAll(".filter-btn");
const courses = document.querySelectorAll(".course-card");

if(filterBtns.length > 0){

filterBtns.forEach(btn => {

btn.addEventListener("click", ()=>{

filterBtns.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

const filter = btn.dataset.filter;

courses.forEach(course => {

if(filter === "all" || course.classList.contains(filter)){
course.style.display = "block";
}else{
course.style.display = "none";
}

});

});

});

}


/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{ threshold:0.2 });

document.querySelectorAll(".scroll-animation").forEach(el=>{
observer.observe(el);
});


/* =========================
   FEATURE CARD CLICK
========================= */

document.querySelectorAll(".feature-card").forEach(card => {

card.addEventListener("click", ()=>{

card.style.transform="scale(1.08)";

setTimeout(()=>{
card.style.transform="";
},200);

});

});


/* =========================
   STATS COUNTER
========================= */

const counters = document.querySelectorAll(".counter");

if(counters.length > 0){

const counterObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.getAttribute("data-target");
let count = 0;

function updateCounter(){

const increment = target / 200;

if(count < target){

count += increment;
counter.innerText = Math.floor(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

}

updateCounter();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{
counterObserver.observe(counter);
});

}


/* =========================
   TEACHER CARD CLICK
========================= */

document.querySelectorAll(".teacher-card-pro").forEach(card => {

card.addEventListener("click", ()=>{

card.style.transform="scale(1.05)";

setTimeout(()=>{
card.style.transform="";
},200);

});

});


/* =========================
   CONTACT FORM VALIDATION
========================= */

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

const msg = document.getElementById("formMsg");

if(name === "" || email === "" || message === ""){

msg.innerHTML = "Please fill all required fields";
msg.style.color = "red";

}else{

msg.innerHTML = "Message sent successfully!";
msg.style.color = "lightgreen";

form.reset();

}

});

}


/* =========================
   CHECKOUT FORM
========================= */

const checkoutForm = document.getElementById("checkoutForm");

if(checkoutForm){

checkoutForm.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const payment = document.getElementById("payment").value;

const msg = document.getElementById("checkoutMsg");

if(name === "" || email === "" || payment === ""){

msg.innerHTML = "Please fill all required fields";
msg.style.color = "red";

}else{

msg.innerHTML = "Payment successful! Enrollment completed.";
msg.style.color = "lightgreen";

checkoutForm.reset();

}

});

}


/* =========================
   FAQ TOGGLE
========================= */

document.querySelectorAll(".faq-question").forEach(q => {

q.addEventListener("click", ()=>{

const answer = q.nextElementSibling;

if(answer.style.display === "block"){
answer.style.display = "none";
}else{
answer.style.display = "block";
}

});

});


/* =========================
   PRICING TOGGLE
========================= */

const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

if(monthlyBtn && yearlyBtn){

monthlyBtn.addEventListener("click", ()=>{

monthlyBtn.classList.add("active");
yearlyBtn.classList.remove("active");

document.querySelectorAll(".monthly").forEach(p=>p.style.display="inline");
document.querySelectorAll(".yearly").forEach(p=>p.style.display="none");

});

yearlyBtn.addEventListener("click", ()=>{

yearlyBtn.classList.add("active");
monthlyBtn.classList.remove("active");

document.querySelectorAll(".monthly").forEach(p=>p.style.display="none");
document.querySelectorAll(".yearly").forEach(p=>p.style.display="inline");

});

}


});