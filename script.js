// 1. आज से 59 दिन, 4 घंटे, 12 मिनट और 55 सेकंड आगे का समय सेट करें
let targetDate = new Date().getTime() + (59 * 24 * 60 * 60 * 1000) + (4 * 60 * 60 * 1000) + (12 * 60 * 1000) + (55 * 1000);

// 2. हर 1 सेकंड (1000ms) में चलने वाला फंक्शन
setInterval(function() {
    let now = new Date().getTime();
    let distance = targetDate - now;

    // समय का गणित (Days, Hours, Minutes, Seconds निकालना)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML स्क्रीन पर नंबर अपडेट करना
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);

// 3. CLICK ME बटन और पॉपअप का कंट्रोल
let modal = document.getElementById("popupModal");
let notifyBtn = document.getElementById("notifyBtn");
let closeModal = document.getElementById("closeModal");
let notifyForm = document.getElementById("notifyForm");

// बटन दबाने पर पॉपअप खुलेगा
notifyBtn.addEventListener("click", function() {
    modal.style.display = "flex";
});

// (X) दबाने पर पॉपअप बंद होगा
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// फॉर्म सबमिट होने पर मैसेज दिखाना
notifyForm.addEventListener("submit", function(e) {
    e.preventDefault(); // पेज रिफ्रेश होने से रोकना
    let email = document.getElementById("emailInput").value;
    document.getElementById("msg").innerText = "धन्यवाद! " + email + " पर नोटिफिकेशन सेट कर दिया गया है।";
    notifyForm.reset();
});
