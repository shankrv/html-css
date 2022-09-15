# Layouts: Floats, Flexbox and CSS Grids

### 14.09.22

- Layout is the visual structure of a webpage where the contents are placed and arranged.
- Floats are not a positioning scheme like absolute position but can make elements out of flow.
- Text and inline elements will wrap around the floated element unlike absolute position.
- CSS `box-sizing` property from `content-box` (initial) to `border-box` changes the CSS box-model rules.

### 15.09.22

- Flexbox (replacement for float) is a set of related CSS properties for building 1-dimensional layouts.
- It was introduced to auto-divide the empty space between child elements inside a container element.
- It is also used for horizontal and vertical centering, alignment and equal height of child elements.
- Flex container is the container element whereas Flex items are the child elements if the the flex.
- Main axis is the (default) horizontal axis and Cross axis is the vertical axis in a flex container.
- Flex container: `gap: 0;`, `justify-content: flex-start;`, `align-items: stretch;`, `flex-direction: row;`
- Flex items: `align-self: auto;`, `flex-grow: 0;`, `flex-shrink: 1;`, `flex-basis: auto;`, `flex: 0 1 auto;`, `order: 0;`

### Best Practices

- `box-sizing: border-box;` can be added as a declaration rule in the universal selector.
- `flex: 0 1 auto;` should always be used as shorthand instead of the individual flex properties.
