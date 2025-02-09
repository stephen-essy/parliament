document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.div');
    const navLinks = document.querySelectorAll('.nav-link');
    const navHeader = document.getElementById('nav-header');

    // Function to update active link and nav header based on scroll position
    function updateActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        // Update nav header content based on current section
        if (current === 'home_div') {
            navHeader.innerHTML = '<h3>THE UNITED REPUBLIC OF TANZANIA</h3>';
        } else {
            navHeader.innerHTML = '<h1>The 12<sup>th</sup> National Parliament</h1>';
        }
    }

    // Initially set "Home" link as active and update nav header
    document.querySelector('.nav-link[href="#home_div"]').classList.add('active');
    navHeader.innerHTML = '<h3>THE UNITED REPUBLIC OF TANZANIA</h3>';

    // Update active link and nav header on scroll
    window.addEventListener('scroll', updateActiveLink);

    // Function to animate numbers
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
