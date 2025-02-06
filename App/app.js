document.addEventListener("DOMContentLoaded", function () {
    function animateNumber(element, start, end, duration) {
        let startTime = null;

        function step(currentTime) {
            if (!startTime) startTime = currentTime;
            let progress = Math.min((currentTime - startTime) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    const partyMembers = document.querySelectorAll(".party-members");
    partyMembers.forEach(member => {
        const endValue = parseInt(member.getAttribute("data-end"));
        animateNumber(member, 0, endValue, 2000); // Duration is 2000ms (2 seconds)
    });
});
