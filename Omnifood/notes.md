# Omnifood Project

### 06.10.22

Website Building Process

1. Define - WHO and WHAT is it for along with the target audience
2. Plan - website content (text, images, etc.) in sections and the sitemap
3. Sketch - components and layouts in low fidelity on a design tool like Figma
4. Design and Build - layouts and components in HTML and CSS with visual styles (design system)
5. Test and Optimize - well in all major browsers, mobile devices with image optimization
6. Launch - host and share the masterpiece with world on a platform with domain name
7. Maintain and Update - website content time to time with SEO and analytics

Responsive Design Principles

1. Fluid Layouts - use `%,vh,vw` instead of `px` and `max-width` instead of `width` to adapt to viewport
2. Responsive Units - use `rem` instead of `px` to auto-scale layouts up and down (`1rem` = `10px`)
3. Flexible Images - use `%` for dimensions with `max-width` to scale automatically
4. Media Queries - to change CSS styles based on certain viewport widths (breakpoints)

- `max-width` will take the set value if the parent is greater, else the parent container width
- `1 rem` is the root element (html) font size which is simply equal to the default browser font-size (`16px`)
- `rem` unit is powerful to scale the length of elements just based on the `font-size` of the root html
- we set the `html` `font-size` to `62.5%` (10/16) to respect the definition of the browser's font-size

### Best Practices

- The content of a website should always guide the design, and not the other way round.
- Sketching is an iterative process and can be experimental until a first good solution.
- Run the Lighthouse performance test in Chrome DevTools and to fix any reported issues.