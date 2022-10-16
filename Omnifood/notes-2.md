# Responsive Web Design

### 16.10.22

- Media Queries are used to apply styles based on certain widths of the viewport
- Breakpoints are the viewport width (values) at which we want the design to change
- viewport `<meta>` tag is required to make webpage responsive on mobile devices
- `rem` and `em` do not depend on the html font-size in the media queries (=`16px`)
- attribute selectors `[name="value"]` are used to select elements based on attributes
- `display: none;` to hide the element, allows no transitions on the element at all
- we use the `opacity`, `pointer-events` and `visibility` as a workaround in such cases
- `<script>` tags are used to add Javascript code into a webpage (internal/external)
- `scroll-behavior: smooth;` is added to html for a smooth scroll effect on the webpage
- `position: fixed;` is used to make an element's position fixed (sticky) on the webpage
- `IntersectionObserver()` - is used to observe the intersection behavior of an element
- `observer.observe(element)` - is the function which starts observing the intersection
- `backdrop-filter: blur()` - is a modern CSS property used to apply filters on backdrop
- `-webkit-` and vendor prefixes are added if the modern properties are supported via them
- `<picture>` is used with `<source>` to let browsers choose the best supported type/source

### Best Practices

- an `id` is added to the section elements for navigation control through anchors
- add `<meta name="description" content="content"/>` to the webpage for SEO
- add `<link name="icon" href="favicon.png">` to add a favicon in the browser
- add `apple-touch-icon` link for iOS and `manifest.webmanifest` file for android
- images should be optimized and compressed (.webp) for better performance
