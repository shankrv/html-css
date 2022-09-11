# CSS Fundamentals

### 10.09.22

- CSS or **C**ascading **S**tyle **S**heets describes the presentation of the HTML content.
- These can be included in the HTML document as inline(attributes), internal(tags) or external(files).
- A descendant selector `parent child {}` is the representation for styling a nested element.
- Colors are defined in RGB(`0-255`), RGBA(alpha/trans, `0-255`,`0-1`) and hexadecimal(`0-f`) notations.

### 11.09.22

- Pseudo classes are used to define and represent the special state of a selected element.
- Universal selector applies to all elements but doesn't inherit the properties due to the lowest priority.
- Global reset helps to reset the default margins and paddings for pre-defined elements on a webpage.
- image `width: auto` or `height: auto` maintains the aspect ratio if the attributes are defined in the HTML.
- CSS box-model applies on block elements but only with horizontal effect on inline elements.
- `top`, `bottom`, `left` and `right` are used to offset the element **relative** to the first parent.
- Pseudo elements are elements that doesn't exist in the HTML but can be selected/styled in CSS.

#### CSS Theories

1. **Precedence**: `!important`, inline, (#) ID, (.) Class, Element, (\*) Universal
2. **Inheritance**: properties of parents are inherited to child elements, mostly related to text.
3. **The CSS Box Model**: defines how elements are displayed and sized as a rectangular box on a webpage.
4. **Inline-Block Level**: boxes that look inline from outside but behave like block on the inside. (supports box-model)
5. **Absolute Postion**: allows to set the position of an element anywhere on the webpage, out of flow.

### Best Practices

- Its always ideal to use external CSS instead of internal or inline styles.
- Class selectors are preferred over Id selectors so that they can be re-used in future.
- Hexadecimal and RGBA notations are the widely used color definitions across.
- Pseudo classes are ideal for lists and single nested elements, not with descendant elements.
- `margin-bottom` is mainly used to add a vertical space between the elements.
