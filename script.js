const typingText = document.getElementById("typingText");
const words = ["CSE Student","Builder","Problem Solver","AI Explorer"];
let wi = 0, ci = 0, deleting = false;

function typeLoop(){
  const word = words[wi];
  typingText.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
  if(!deleting && ci > word.length){ deleting = true; setTimeout(typeLoop, 1100); return; }
  if(deleting && ci < 0){ deleting = false; wi = (wi + 1) % words.length; ci = 0; }
  setTimeout(typeLoop, deleting ? 55 : 85);
}
typeLoop();

const navbar = document.getElementById("navbar");
const links = [...document.querySelectorAll(".nav-links a")];
window.addEventListener("scroll", () => {
  navbar.style.background = scrollY > 30 ? "rgba(5,5,5,.92)" : "rgba(5,5,5,.78)";
  const sections = [...document.querySelectorAll("main section")];
  let current = "home";
  sections.forEach(s => { if(scrollY >= s.offsetTop - 180) current = s.id; });
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const text = `Hello CHARAN,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0A%0A${encodeURIComponent(message)}`;
  window.open(`https://wa.me/917868930069?text=${text}`, "_blank");
});
