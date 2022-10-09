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
- set the `html` `font-size` to `62.5%` (10/16) to respect the definition of the browser's font-size

### 08.10.22

- adding `border` to an element in special state(s) would add space around the element
- `box-shadow: inset 0 0 0 2px black;` can be used instead to add outline inside the element
- `transition: color 0.2s;` is used in original state to set CSS animations on the element
- `z-index: -1;` is used to position the element above/below another element on the Z-axis
- `filter` and `opacity` is used to apply filters and set opacity on the image element

### 09.10.22

- `currentColor` is used as a value to set the color to its own element color
- `transparent` is used as a value to make the style as completely transparent

### Best Practices

- The content of a website should always guide the design, and not the other way round
- Sketching is an iterative process and can be experimental until a first good solution
- Run the Lighthouse performance test in Chrome DevTools and to fix any reported issues
- add `!important` to helper classes to have maximum priority while applying the styles
- `header`, `main`, and `footer` are the base semantic elements in HTML5 for a webpage layout
- pseudo elements are used to add visual styles instead of a new element polluting the HTML
- pseudo elements (child) can not be added to the image element as per the HTML standards
