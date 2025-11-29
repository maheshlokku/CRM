// Dynamic Counters
function animateCounter(id, target) {
    let count = 0;
    let speed = target / 200;

    let interval = setInterval(() => {
        count += speed;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        document.getElementById(id).innerText = Math.floor(count);
    }, 10);
}

animateCounter("clients", 1500);
animateCounter("leads", 22000);
animateCounter("growth", 48);

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("formStatus");

    if (!name || !email || !message) {
        status.style.color = "red";
        status.innerText = "⚠ Please fill all fields!";
        return;
    }

    status.style.color = "green";
    status.innerText = "✔ Thank you! We will contact you soon.";
});
