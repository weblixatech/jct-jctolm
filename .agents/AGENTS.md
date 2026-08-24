# Workspace Rules & Architectural Guidelines

## Web Application Performance & Animation Rules

### Infinite Marquees & Carousel Performance
- **CSS Keyframes over JS Loops**: Prefer pure CSS `@keyframes` animations (`translate3d(0,0,0)` to `translate3d(-50%,0,0)`) with `will-change: transform` and `backface-visibility: hidden` for infinite marquee carousels.
- **No Decoding Blockers**: Avoid JavaScript animation loops that block initial rendering or visibility (`opacity: 0`) on `Promise.all(img.decode())` calls across large image sets.
- **Viewport Image Priority**: Priority-load (`priority={index < 4}`) only the images visible in the initial viewport on page load; allow offscreen marquee items to load lazily (`loading="lazy"`).
