# gao-labs-website
Repo for public website for Gao Labs

- Developed by Erin Murphy
- Maintained by Tim Fraser

## Where do I make my edits to update this website?

- **Homepage HTML** - eg. add a featured project: [`/website/src/app/pages/homepage/homepage.component.html`](https://github.com/Gao-Labs/gao-labs.github.io/blob/main/website/src/app/pages/homepage/homepage.component.html)
- **Publications HTML** - eg. add a publication: [`/website/src/app/pages/publications/publications.component.html`](https://github.com/Gao-Labs/gao-labs.github.io/blob/main/website/src/app/pages/publications/publications.component.html)
- **Bios HTML** - eg. move someone from current to former contributor: [`/website/src/app/pages/bios/bios.component.html`](https://github.com/Gao-Labs/gao-labs.github.io/blob/main/website/src/app/pages/bios/bios.component.html)
- **Update Bios**: [`/website/src/app/consts/bios.const.ts`](https://github.com/Gao-Labs/gao-labs.github.io/blob/main/website/src/app/consts/bios.const.ts)
- **Add Images**: [`/website/src/assets/headshots`](https://github.com/Gao-Labs/gao-labs.github.io/tree/main/website/src/assets/headshots)
- **Update Images** - add image URL that you added in previous step to HTML in: [`/website/src/app/pages/bios/bios.component.html`]((https://github.com/Gao-Labs/gao-labs.github.io/blob/main/website/src/app/pages/bios/bios.component.html)
- **Add Further Instructions** - using this [README.md](https://github.com/Gao-Labs/gao-labs.github.io) here! 

## Deployment:
1. Make your commits on `main`
2. `git push`
3. Done! Page will update within a few minutes.

Deployment config: `.github/worflows.node.js.yml`
