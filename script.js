(function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const year = document.querySelector("#year");

    if (year) {
        year.textContent = String(new Date().getFullYear());
    }

    function setMenuOpen(isOpen) {
        if (!navToggle || !navMenu) {
            return;
        }

        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        navMenu.classList.toggle("open", isOpen);
        document.body.classList.toggle("nav-open", isOpen);
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isOpen = navToggle.getAttribute("aria-expanded") === "true";
            setMenuOpen(!isOpen);
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => setMenuOpen(false));
        });

        document.addEventListener("click", (event) => {
            const target = event.target;
            const isInsideMenu = navMenu.contains(target);
            const isToggle = navToggle.contains(target);

            if (!isInsideMenu && !isToggle) {
                setMenuOpen(false);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        });
    }

    const sections = Array.from(document.querySelectorAll("main section[id]"));

    function updateActiveLink() {
        const currentPosition = window.scrollY + 120;
        let activeId = sections[0] ? sections[0].id : "";

        sections.forEach((section) => {
            if (section.offsetTop <= currentPosition) {
                activeId = section.id;
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.toggle("active", href === `#${activeId}`);
        });
    }

    if (sections.length && navLinks.length) {
        updateActiveLink();
        window.addEventListener("scroll", updateActiveLink, { passive: true });
    }
}());
