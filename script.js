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


/* Agent-native portfolio data and WebMCP tools */
(function () {
    const profile = {
        name: "Sharan Venkatapathy",
        role: "Student developer",
        summary: "Student developer building practical web, Android, local AI, AR, and home-lab projects.",
        strengths: ["hands-on prototyping", "debugging", "clear project communication", "learning quickly"],
        technologies: ["HTML", "CSS", "JavaScript", "Kotlin", "Android SDK", "Python", "Java", "FastAPI", "ARCore", "OpenCV"],
        interests: ["agent-native web", "Android tools", "local AI", "AR", "computer hardware", "home labs"],
        location: "Calgary, Canada",
        availability: "Open to project ideas, feedback, hackathons, and learning opportunities"
    };

    const projects = [
        {
            id: "smarthub",
            name: "SmartHub — Local AI Assistant Hub",
            status: "experimental",
            summary: "A modular local-AI hub connecting models to browser control, YouTube search, task history, and computer actions.",
            technologies: ["Python", "FastAPI", "Uvicorn", "Playwright", "PyAutoGUI", "LM Studio", "Local AI"],
            evidence: ["Connects language models to practical computer actions", "Explores multi-device access through a home lab"]
        },
        {
            id: "wallpaper-scheduler",
            name: "Smart Daily Wallpaper Scheduler",
            status: "prototype",
            summary: "An Android app that changes wallpaper around schedules and preferences so useful information stays visible.",
            technologies: ["Kotlin", "Android SDK", "WallpaperManager API", "WorkManager"],
            url: "https://github.com/XD3VQ/wallpaper-app",
            evidence: ["Uses Android background tasks", "Turns a passive surface into a lightweight daily dashboard"]
        },
        {
            id: "wall-scanner",
            name: "Wall Scanner 3D Pro",
            status: "work in progress",
            summary: "An Android AR prototype for wall scanning and basic 3D room reconstruction.",
            technologies: ["Kotlin", "ARCore", "OpenCV", "3D modeling"],
            url: "https://github.com/XD3VQ/3dscannerapp",
            evidence: ["Explores computer vision and on-device performance", "Targets renovation planning and room visualization"]
        },
        {
            id: "agent-portfolio",
            name: "Agent-Native Portfolio",
            status: "live",
            summary: "This WebMCP portfolio lets people and agents search project evidence and evaluate collaboration fit in shared context.",
            technologies: ["HTML", "CSS", "JavaScript", "WebMCP", "GitHub Pages"],
            url: "https://xd3vq.github.io/",
            evidence: ["Exposes structured read-only WebMCP tools", "Renders agent results visibly for human verification"]
        }
    ];

    const contact = {
        email: "sharanleodania@gmail.com",
        github: "https://github.com/XD3VQ",
        linkedin: "https://www.linkedin.com/in/sharan-venkatapathy/"
    };

    const result = document.querySelector("#agent-result");
    const status = document.querySelector("#webmcp-status");

    function normalize(value) {
        return String(value || "").toLowerCase().replace(/[^a-z0-9+#. ]/g, " ");
    }

    function findMatches(text) {
        const terms = normalize(text).split(/\s+/).filter((term) => term.length > 2);
        return projects.map((project) => {
            const haystack = normalize([project.name, project.summary, project.status, ...project.technologies, ...project.evidence].join(" "));
            const matchedTerms = [...new Set(terms.filter((term) => haystack.includes(term)))];
            return { project, score: matchedTerms.length, matchedTerms };
        }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score);
    }

    function render(title, lines) {
        if (!result) return;
        result.innerHTML = "";
        const heading = document.createElement("h4");
        heading.textContent = title;
        const list = document.createElement("ul");
        lines.forEach((line) => {
            const item = document.createElement("li");
            item.textContent = line;
            list.appendChild(item);
        });
        result.append(heading, list);
    }

    function makeOpportunityMatch(description) {
        const safeDescription = String(description || "").trim().slice(0, 1200);
        const matches = findMatches(safeDescription);
        const strongest = matches.slice(0, 3).map(({ project, matchedTerms }) => ({
            project: project.name,
            reason: matchedTerms.length ? "Relevant terms: " + matchedTerms.join(", ") : project.summary,
            evidence: project.evidence
        }));
        const response = {
            opportunity: safeDescription,
            fit: strongest.length ? "potential match" : "not enough matching evidence",
            strongestEvidence: strongest,
            caveat: "This is an evidence-based starting point, not a claim that every requirement is met.",
            suggestedNextStep: strongest.length ? "Review the cited projects and contact Sharan for a conversation." : "Ask about adjacent experience or a learning-focused collaboration."
        };
        render("Opportunity match", strongest.length
            ? strongest.map((item) => item.project + " — " + item.reason)
            : ["No strong keyword match found. Try describing the technologies or outcome you need."]);
        return response;
    }

    const form = document.querySelector("#opportunity-form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const input = document.querySelector("#opportunity");
            makeOpportunityMatch(input ? input.value : "");
        });
    }

    if (!document.modelContext || typeof document.modelContext.registerTool !== "function") {
        if (status) status.textContent = "WebMCP browser needed";
        return;
    }

    if (status) {
        status.textContent = "WebMCP ready";
        status.classList.add("supported");
    }

    const readOnly = { readOnlyHint: true };
    const register = (tool) => document.modelContext.registerTool({ ...tool, annotations: readOnly })
        .catch((error) => console.warn("WebMCP tool registration failed:", tool.name, error));

    register({
        name: "get_profile",
        title: "Get Sharan's profile",
        description: "Return a concise structured profile of Sharan using only public information on this portfolio. This tool is read-only.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: async () => {
            render("Profile retrieved", [profile.role, profile.summary, "Focus: " + profile.interests.join(", ")]);
            return { profile, source: window.location.href };
        }
    });

    register({
        name: "search_projects",
        title: "Search portfolio projects",
        description: "Search Sharan's public projects by keyword, technology, topic, or goal. Returns grounded portfolio evidence and performs no writes.",
        inputSchema: {
            type: "object",
            properties: {
                query: { type: "string", description: "Keywords, technology, topic, or desired outcome.", maxLength: 300 }
            },
            required: ["query"],
            additionalProperties: false
        },
        execute: async ({ query }) => {
            const matches = findMatches(String(query).slice(0, 300)).slice(0, 5);
            render("Project search", matches.length ? matches.map(({ project }) => project.name + " — " + project.summary) : ["No matching projects found."]);
            return { query, count: matches.length, projects: matches.map(({ project, matchedTerms }) => ({ ...project, matchedTerms })) };
        }
    });

    register({
        name: "match_opportunity",
        title: "Match an opportunity",
        description: "Compare a role, project, or collaboration need with evidence from Sharan's public portfolio. Shows the same result to the human on the page. Read-only and non-transactional.",
        inputSchema: {
            type: "object",
            properties: {
                description: { type: "string", description: "Role, project, or problem description to compare.", minLength: 10, maxLength: 1200 }
            },
            required: ["description"],
            additionalProperties: false
        },
        execute: async ({ description }) => makeOpportunityMatch(description)
    });

    register({
        name: "build_collaboration_brief",
        title: "Build a collaboration brief",
        description: "Create a short, grounded collaboration brief using a stated goal and portfolio evidence. It does not contact anyone or make commitments.",
        inputSchema: {
            type: "object",
            properties: {
                goal: { type: "string", description: "What the person and Sharan might build or explore together.", minLength: 5, maxLength: 500 },
                constraints: { type: "string", description: "Optional timeline, platform, or technical constraints.", maxLength: 500 }
            },
            required: ["goal"],
            additionalProperties: false
        },
        execute: async ({ goal, constraints = "" }) => {
            const matches = findMatches(goal + " " + constraints).slice(0, 3);
            const brief = {
                goal: String(goal).slice(0, 500),
                constraints: String(constraints).slice(0, 500),
                relevantProjects: matches.map(({ project }) => project.name),
                proposedFirstStep: "Confirm the desired outcome, select the smallest testable version, and agree on what success looks like.",
                questions: ["Who is the primary user?", "What must the first version demonstrate?", "Which constraints are fixed?"],
                commitmentStatus: "Draft only — Sharan has not reviewed or accepted this collaboration."
            };
            render("Collaboration brief", ["Goal: " + brief.goal, "Relevant work: " + (brief.relevantProjects.join(", ") || "Ask Sharan about adjacent experience"), brief.proposedFirstStep]);
            return brief;
        }
    });

    register({
        name: "get_contact_options",
        title: "Get public contact options",
        description: "Return Sharan's public professional contact channels. This does not send a message, open an account, or expose private contact information.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: async () => {
            render("Public contact options", ["Email: " + contact.email, "GitHub: " + contact.github, "LinkedIn: " + contact.linkedin]);
            return { contact, note: "Contact is user-initiated; this tool does not send messages." };
        }
    });
}());
