# CSS Properties

This document provides an extensive list of CSS properties, their possible values, and descriptions.

## Layout and Positioning

| **Property**      | **Values**                        | **Description**                                    |
|-------------------|-----------------------------------|----------------------------------------------------|
| **`display`**     | `block`, `inline`, `inline-block`, `flex`, `grid`, `none` | Defines the display behavior of an element.       |
| **`position`**    | `static`, `relative`, `absolute`, `fixed`, `sticky` | Defines the positioning method of an element.     |
| **`top`**         | `<length>`, `<percentage>`, `auto` | Specifies the top position of a positioned element.|
| **`right`**       | `<length>`, `<percentage>`, `auto` | Specifies the right position of a positioned element.|
| **`bottom`**      | `<length>`, `<percentage>`, `auto` | Specifies the bottom position of a positioned element.|
| **`left`**        | `<length>`, `<percentage>`, `auto` | Specifies the left position of a positioned element.|
| **`z-index`**     | `<integer>`, `auto`               | Specifies the stack order of positioned elements.  |
| **`float`**       | `left`, `right`, `none`           | Specifies how an element should float.            |
| **`clear`**       | `left`, `right`, `both`, `none`   | Specifies what elements can float beside the cleared element. |
| **`overflow`**    | `visible`, `hidden`, `scroll`, `auto` | Specifies what should happen if the content overflows an element’s box. |
| **`visibility`**  | `visible`, `hidden`, `collapse`   | Specifies whether an element is visible.          |
| **`flex`**        | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | Defines how the flex items are aligned within a flex container. |
| **`grid-template-columns`** | `<length>`, `<percentage>`, `auto`, `repeat()` | Defines the number and size of columns in a grid layout. |
| **`grid-template-rows`**    | `<length>`, `<percentage>`, `auto`, `repeat()` | Defines the number and size of rows in a grid layout. |
| **`grid-column`** | `<start> / <end>`                | Specifies the start and end position of a grid item. |
| **`grid-row`**    | `<start> / <end>`                | Specifies the start and end position of a grid item. |

## Typography

| **Property**      | **Values**                        | **Description**                                    |
|-------------------|-----------------------------------|----------------------------------------------------|
| **`font-family`** | `<font-family>`, `serif`, `sans-serif`, `monospace`, `cursive`, `fantasy` | Specifies the font family for text.               |
| **`font-size`**   | `<length>`, `<percentage>`, `inherit` | Specifies the size of the font.                   |
| **`font-weight`** | `normal`, `bold`, `bolder`, `lighter`, `<number>` | Specifies the weight of the font.                 |
| **`font-style`**  | `normal`, `italic`, `oblique`     | Specifies the style of the font.                  |
| **`text-align`**  | `left`, `right`, `center`, `justify` | Specifies the horizontal alignment of text.       |
| **`text-transform`** | `uppercase`, `lowercase`, `capitalize`, `none` | Specifies the text transformation.                |
| **`line-height`** | `<number>`, `<length>`, `<percentage>` | Specifies the line height of text.                |
| **`letter-spacing`** | `<length>`                       | Specifies the space between characters.           |
| **`word-spacing`** | `<length>`                        | Specifies the space between words.                |
| **`text-decoration`** | `none`, `underline`, `overline`, `line-through` | Specifies the decoration added to text.          |
| **`text-indent`** | `<length>`, `inherit`              | Specifies the indentation of the first line of text. |
| **`white-space`** | `normal`, `nowrap`, `pre`, `pre-wrap`, `pre-line` | Specifies how white space inside an element is handled. |

## Color and Background

| **Property**      | **Values**                        | **Description**                                    |
|-------------------|-----------------------------------|----------------------------------------------------|
| **`color`**       | `<color>`, `inherit`              | Specifies the text color.                         |
| **`background-color`** | `<color>`, `transparent`        | Specifies the background color of an element.     |
| **`background-image`** | `url()`, `none`                 | Specifies one or more background images.          |
| **`background-repeat`** | `repeat`, `repeat-x`, `repeat-y`, `no-repeat` | Specifies how background images are repeated.     |
| **`background-size`** | `<length>`, `<percentage>`, `cover`, `contain` | Specifies the size of the background image.       |
| **`background-position`** | `<position>`, `center`, `left`, `right`, `top`, `bottom` | Specifies the position of a background image.    |
| **`border`**      | `<width> <style> <color>`         | Specifies the border of an element.               |
| **`border-width`** | `<length>`, `thin`, `medium`, `thick` | Specifies the width of the border.                |
| **`border-style`** | `none`, `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset` | Specifies the style of the border.               |
| **`border-color`** | `<color>`, `inherit`              | Specifies the color of the border.                |
| **`border-radius`** | `<length>`, `<percentage>`       | Specifies the radius of the element’s corners.    |
| **`box-shadow`**  | `<offset-x> <offset-y> <blur-radius> <spread-radius> <color>` | Specifies the shadow effect for elements.        |

## Flexbox Properties

| **Property**      | **Values**                        | **Description**                                    |
|-------------------|-----------------------------------|----------------------------------------------------|
| **`flex-direction`** | `row`, `row-reverse`, `column`, `column-reverse` | Defines the direction of flex items.              |
| **`flex-wrap`**   | `nowrap`, `wrap`, `wrap-reverse`   | Defines whether flex items should wrap.           |
| **`flex-flow`**   | `<flex-direction> <flex-wrap>`    | Shorthand for `flex-direction` and `flex-wrap`.    |
| **`align-items`** | `flex-start`, `center`, `flex-end`, `baseline`, `stretch` | Defines the default behavior for flex items.      |
| **`align-content`** | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `stretch` | Aligns flex lines within the flex container.     |
| **`align-self`**  | `auto`, `flex-start`, `center`, `flex-end`, `baseline`, `stretch` | Aligns a single flex item.                       |
| **`justify-content`** | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | Defines the alignment of flex items along the main axis. |
| **`flex-grow`**   | `<number>`                         | Defines the ability for a flex item to grow if necessary. |
| **`flex-shrink`** | `<number>`                         | Defines the ability for a flex item to shrink if necessary. |
| **`flex-basis`**  | `<length>`, `auto`                 | Defines the default size of an element before the remaining space is distributed. |
| **`flex`**        | `<flex-grow> <flex-shrink> <flex-basis>` | Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. |

## Grid Properties

| **Property**      | **Values**                        | **Description**                                    |
|-------------------|-----------------------------------|----------------------------------------------------|
| **`grid-template-columns`** | `<length>`, `<percentage>`, `repeat()`, `auto` | Defines the number and size of columns in a grid container. |
| **`grid-template-rows`**    | `<length>`, `<percentage>`, `repeat()`, `auto` | Defines the number and size of rows in a grid container. |
| **`grid-template-areas`**   | `none`, `<area-name>`               | Defines named areas in a grid layout.             |
| **`grid-area`**    | `<row-start> / <column-start> / <row-end> / <column-end>` | Specifies where an item should be placed in the grid. |
| **`grid-column`**  | `<start> / <end>`                  | Specifies how many columns an element should span. |
| **`grid-row`**     | `<start> / <end>`                  | Specifies how many rows an element should span.    |
| **`grid-column-gap`** | `<length>`                       | Defines the gap between columns.                  |
| **`grid-row-gap`** | `<length>`                         | Defines the gap between rows.                     |
| **`grid-gap`**     | `<length>`, `<length>`            | Shorthand for `grid-column-gap` and `grid-row-gap`. |

## Text Properties

| **Property**      | **Values**                        | **Description**                                    |
|-------------------|-----------------------------------|----------------------------------------------------|
| **`text-align`**  | `left`, `right`, `center`, `justify` | Specifies the horizontal alignment of text.       |
| **`text-indent`** | `<length>`, `inherit`              | Specifies the indentation of the first line of text. |
| **`text-transform`** | `uppercase`, `lowercase`, `capitalize`, `none` | Specifies the capitalization of text.             |
| **`letter-spacing`** | `<length>`                       | Specifies the space between characters.           |
| **`word-spacing`** | `<length>`                        | Specifies the space between words.                |
| **`line-height`** | `<number>`, `<length>`, `<percentage>` | Specifies the amount of space between lines of text. |
| **`text-decoration`** | `none`, `underline`, `overline`, `line-through` | Specifies the decoration added to text.          |
| **`text-shadow`** | `<offset-x> <offset-y> <blur-radius> <color>` | Specifies the shadow effect for text.            |
| **`white-space`** | `normal`, `nowrap`, `pre`, `pre-wrap`, `pre-line` | Specifies how white space inside an element is handled. |

## Box Model

| **Property**      | **Values**                        | **Description**                                    |
|-------------------|-----------------------------------|----------------------------------------------------|
| **`width`**       | `<length>`, `<percentage>`, `auto` | Specifies the width of an element.                |
| **`height`**      | `<length>`, `<percentage>`, `auto` | Specifies the height of an element.               |
| **`padding`**     | `<length>`, `<percentage>`, `inherit` | Defines the space between the content and the border. |
| **`margin`**      | `<length>`, `<percentage>`, `auto`, `inherit` | Defines the space outside the border.           |
| **`border`**      | `<width> <style> <color>`          | Defines the border of an element.                 |
| **`border-width`** | `<length>`, `thin`, `medium`, `thick` | Specifies the width of the border.                |
| **`border-style`** | `none`, `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset` | Specifies the style of the border.               |
| **`border-color`** | `<color>`, `inherit`              | Specifies the color of the border.                |
| **`box-sizing`**  | `content-box`, `border-box`, `padding-box` | Defines how the total width and height of an element is calculated. |

## Layout and Positioning

| **Property**           | **Values**                        | **Description**                                     |
|------------------------|-----------------------------------|-----------------------------------------------------|
| **`clip`**             | `<shape>`                         | Defines a clipping region for absolutely positioned elements. |
| **`contain`**          | `none`, `strict`, `content`, `paint`, `layout` | Specifies which aspects of an element’s content should be contained. |
| **`object-fit`**       | `fill`, `contain`, `cover`, `none`, `scale-down` | Defines how an element’s content should fit within its box. |
| **`object-position`**  | `<position>`, `center`, `left`, `right`, `top`, `bottom` | Defines the alignment of the content inside a replaced element. |
| **`overflow-x`**       | `visible`, `hidden`, `scroll`, `auto` | Specifies what should happen if the content overflows the element’s box horizontally. |
| **`overflow-y`**       | `visible`, `hidden`, `scroll`, `auto` | Specifies what should happen if the content overflows the element’s box vertically. |
| **`resize`**           | `none`, `both`, `horizontal`, `vertical` | Defines whether an element can be resized by the user. |
| **`float`**            | `left`, `right`, `none`           | Specifies whether an element should float to the left or right. |
| **`clear`**            | `left`, `right`, `both`, `none`   | Specifies what elements can float beside the cleared element. |

## Typography

| **Property**           | **Values**                        | **Description**                                     |
|------------------------|-----------------------------------|-----------------------------------------------------|
| **`font-variant`**     | `normal`, `small-caps`, `inherit` | Specifies whether text should be rendered in small caps. |
| **`font-variant-caps`** | `normal`, `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps` | Defines the type of caps to be used in text.       |
| **`font-variant-east-asian`** | `normal`, `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional` | Defines the variant of East Asian text.           |
| **`text-align-last`**  | `auto`, `left`, `right`, `center`, `justify` | Specifies the horizontal alignment of the last line in a block. |
| **`text-align`**       | `left`, `right`, `center`, `justify` | Defines the horizontal alignment of text.          |
| **`text-shadow`**      | `<offset-x> <offset-y> <blur-radius> <color>` | Adds shadow effects to text.                       |

## Color and Background

| **Property**           | **Values**                        | **Description**                                     |
|------------------------|-----------------------------------|-----------------------------------------------------|
| **`background-clip`**  | `border-box`, `padding-box`, `content-box` | Defines the painting area of the background.      |
| **`background-origin`** | `border-box`, `padding-box`, `content-box` | Defines the positioning area of the background.    |
| **`background-attachment`** | `scroll`, `fixed`, `local`       | Defines whether the background scrolls with the content or is fixed. |
| **`background-blend-mode`** | `normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion` | Defines how the background images and colors blend with each other. |
| **`mix-blend-mode`**    | `normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion` | Defines how an element’s content should blend with its background. |

## Flexbox Properties

| **Property**           | **Values**                        | **Description**                                     |
|------------------------|-----------------------------------|-----------------------------------------------------|
| **`flex-direction`**   | `row`, `row-reverse`, `column`, `column-reverse` | Defines the direction of flex items in a flex container. |
| **`flex-wrap`**        | `nowrap`, `wrap`, `wrap-reverse`   | Defines whether flex items should wrap onto multiple lines. |
| **`flex-flow`**        | `<flex-direction> <flex-wrap>`    | Shorthand for `flex-direction` and `flex-wrap`.    |
| **`align-content`**    | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `stretch` | Aligns flex lines within the flex container.      |
| **`align-items`**      | `flex-start`, `center`, `flex-end`, `baseline`, `stretch` | Aligns flex items along the cross axis.          |
| **`align-self`**       | `auto`, `flex-start`, `center`, `flex-end`, `baseline`, `stretch` | Aligns a flex item along the cross axis.         |
| **`justify-content`**  | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | Aligns flex items along the main axis.           |
| **`flex-grow`**        | `<number>`                         | Defines the ability for a flex item to grow if necessary. |
| **`flex-shrink`**      | `<number>`                         | Defines the ability for a flex item to shrink if necessary. |
| **`flex-basis`**       | `<length>`, `auto`                 | Defines the default size of a flex item before space distribution. |
| **`flex`**             | `<flex-grow> <flex-shrink> <flex-basis>` | Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. |

## Grid Properties

| **Property**           | **Values**                        | **Description**                                     |
|------------------------|-----------------------------------|-----------------------------------------------------|
| **`grid-template-columns`** | `<length>`, `<percentage>`, `repeat()`, `auto` | Defines the columns of a grid layout.            |
| **`grid-template-rows`**    | `<length>`, `<percentage>`, `repeat()`, `auto` | Defines the rows of a grid layout.               |
| **`grid-template-areas`**   | `none`, `<area-name>`               | Defines named grid areas in the grid layout.     |
| **`grid-area`**        | `<row-start> / <column-start> / <row-end> / <column-end>` | Specifies the size and location of grid items. |
| **`grid-column`**      | `<start> / <end>`                  | Defines how many columns a grid item should span.  |
| **`grid-row`**         | `<start> / <end>`                  | Defines how many rows a grid item should span.     |
| **`grid-column-gap`**  | `<length>`                         | Defines the gap between columns.                  |
| **`grid-row-gap`**     | `<length>`                         | Defines the gap between rows.                     |
| **`grid-gap`**         | `<length>`, `<length>`            | Shorthand for `grid-column-gap` and `grid-row-gap`. |

## Transforms and Animations

| **Property**           | **Values**                        | **Description**                                     |
|------------------------|-----------------------------------|-----------------------------------------------------|
| **`transform`**        | `rotate()`, `scale()`, `translate()`, `skew()`, `matrix()` | Applies a 2D or 3D transformation to an element.   |
| **`transform-origin`** | `<length>`, `<percentage>`, `center` | Defines the origin point for transformations.     |
| **`transition`**       | `<property> <duration> <timing-function> <delay>` | Shorthand for defining transitions.               |
| **`transition-property`** | `all`, `<property>`, `none`        | Specifies the CSS properties to which the transition effect is applied. |
| **`transition-duration`** | `<time>`                          | Specifies how long the transition effect should last. |
| **`transition-timing-function`** | `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()` | Defines the speed curve of the transition effect. |
| **`transition-delay`** | `<time>`                           | Defines when the transition effect should start.   |
| **`animation`**        | `<name> <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode>` | Shorthand for defining animations.                |
| **`animation-name`**   | `none`, `<name>`                   | Specifies the name of the `@keyframes` animation.  |
| **`animation-duration`** | `<time>`                          | Specifies how long the animation should take to complete. |
| **`animation-timing-function`** | `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()` | Defines the speed curve of the animation.        |
| **`animation-delay`**  | `<time>`                           | Defines when the animation should start.           |
| **`animation-iteration-count`** | `<number>`, `infinite`            | Specifies how many times the animation should repeat. |
| **`animation-direction`** | `normal`, `reverse`, `alternate`, `alternate-reverse` | Defines whether the animation should play in reverse on alternate cycles. |
| **`animation-fill-mode`** | `none`, `forwards`, `backwards`, `both` | Defines how a CSS animation applies styles to its target before and after it is executing. |
