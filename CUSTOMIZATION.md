# Portfolio Customization Notes

This site is intentionally simple: edit the files, open `index.html` in a browser, and push to GitHub Pages when it looks right.

## Keep the Voice Personal

The current writing is meant to sound like a real student/developer profile: honest, specific, and not inflated. When updating the site, avoid empty buzzwords about ambition, innovation, expertise, or future-facing technology.

Better wording is usually more direct:

- I built this to solve...
- This project helped me learn...
- The next part I want to improve is...
- I am still working on...

## Main Sections in `index.html`

- Hero: short intro, email link, GitHub, and LinkedIn
- About: personal background and working style
- Projects: a featured project plus smaller project cards with specific descriptions and GitHub links
- Home Lab / NAS Setup: storage, backups, network sharing, and the SmartHub connection
- Skills: technologies grouped by practical area
- What I'm Learning: current learning goals
- Experience: hackathons and volunteer work
- Contact: email, GitHub, and LinkedIn

## Updating Projects

SmartHub uses the larger `<article class="featured-project">` card at the top of the Projects section. Keep it for the project you most want people to notice first.

Each smaller project card is an `<article class="project-card">`. When adding or replacing a project, keep the description specific:

```html
<article class="project-card">
    <div class="project-top">
        <p class="project-type">Project type</p>
        <h3>Project Name</h3>
    </div>
    <p>
        One or two sentences about what the project does and why it exists.
    </p>
    <p>
        One sentence about what you learned, what is working, or what still needs improvement.
    </p>
    <ul class="tag-list" aria-label="Technologies used">
        <li>Technology</li>
        <li>Technology</li>
    </ul>
    <a class="text-link" href="https://github.com/XD3VQ/repo-name" target="_blank" rel="noopener">View code on GitHub</a>
</article>
```

If a project is still a prototype, say that clearly. A work-in-progress project can still look good when the scope is honest.

## Updating Links

Current links used throughout the site:

- GitHub: `https://github.com/XD3VQ`
- LinkedIn: `https://www.linkedin.com/in/sharan-venkatapathy/`
- Email: `sharanleodania@gmail.com`

Search for the old value before changing a link so every copy stays consistent.

## Styling

Most design choices live in `styles.css` near the top under `:root`. The color palette is light, clean, and restrained. If you change colors, keep the contrast high enough for readable text and buttons.

Cards use an 8px border radius and subtle hover states. Avoid adding heavy animations or large decorative effects unless they make the page easier to understand.

## Deployment

GitHub Pages can serve this repository directly from the root:

1. Open the repository settings on GitHub.
2. Go to Pages.
3. Choose the branch you want to publish.
4. Choose `/` as the folder.
5. Save and wait for GitHub Pages to rebuild.

The site should be available at `https://xd3vq.github.io/`.
