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

### 25.09.22

- CSS Grid is the most modern, complete and easiest way of building 2-D layouts in a webpage.
- CSS Grid also has the grid container and the grid items, a similar logic to that of flexbox.
- `grid-template-columns` and `grid-template-rows` are used to create the columns and rows of grid.
- `gap` is to add space between the items, whereas `column-gap` and `row-gap` are for columns and rows.
- It is easier to read the grip properties and helps to reduce nested elements in two-dimensional contexts.
- Row axis and Column axis are the **fixed** horizontal and vertical axes of a grid container.
- Grid lines separate the rows and coulmns whereas Grid tracks(r/c) are either of complete rows or columns.
- Grid cells are the areas inside the grid lines, which can be filled with a grid item or not.
- Gutters, another term for gaps, are the spaces between the grid items of rows and containers.
- `justify-items` and `align-items` are used to align the grid items inside the rows or columns.
- `justify-content` and `align-context` are used to align the entire grid inside a larger grid container.
- `grid-column` and `grid-row` are used to place a grid item into a specific cell based on line numbers.
- `justify-self` and `align-self` are used to overwrite the justify/align-items for single items.
- `fr` or fraction(s) is the new unit used in CSS grids for managing the flexible column width with spaces.
- We can also use `auto` to auto-determine the width of a grid row/column based on the item content.
- `repeat(n, 1fr);` is used to repeat the row/column width to create _n_ rows/columns in container.
- `grid-column: s/e;` and `grid-row: s/e;` are used to place the item in a certain grid cell.(s-start/e-end)
- `e` is optional and will pick the next grid line(default), `span n` can also be used to span across _n_ cells.
- Aligning grid items is different than it is in flexbox, because we can align tracks and the items inside.

### Best Practices

- `box-sizing: border-box;` can be added as a declaration rule in the universal selector.
- `flex: 0 1 auto;` should always be used as shorthand instead of the individual flex properties.
- CSS grid is not a replacement for flexbox, instead use flexbox for 1-D and grids for 2-D layouts.
