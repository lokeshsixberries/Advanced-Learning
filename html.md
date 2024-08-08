# HTML Tags

Here is a comprehensive list of HTML tags with examples and attributes:

## Basic HTML Tags

| **Tag**   | **Example**                                                   | **Attributes**                       |
|-----------|---------------------------------------------------------------|-------------------------------------|
| **`<a>`** | `<a href="https://example.com">Link</a>`                     | `href`, `target`, `rel`, `title`    |
| **`<p>`** | `<p>This is a paragraph.</p>`                                 | N/A                                 |
| **`<h1>`** | `<h1>Header 1</h1>`                                         | N/A                                 |
| **`<br>`** | `<p>Line 1<br>Line 2</p>`                                   | `clear`                              |
| **`<hr>`** | `<hr>`                                                       | `width`, `size`, `noshade`, `align`  |
| **`<img>`** | `<img src="image.jpg" alt="Description">`                    | `src`, `alt`, `width`, `height`, `title` |

## Form Elements

| **Tag**   | **Example**                                                   | **Attributes**                       |
|-----------|---------------------------------------------------------------|-------------------------------------|
| **`<form>`** | `<form action="/submit" method="post">...</form>`           | `action`, `method`, `enctype`, `target` |
| **`<input>`** | `<input type="text" name="username" placeholder="Username">` | `type`, `name`, `value`, `placeholder`, `checked` |
| **`<textarea>`** | `<textarea rows="4" cols="50">Text here...</textarea>`    | `rows`, `cols`, `placeholder`       |
| **`<button>`** | `<button type="submit">Submit</button>`                    | `type`, `name`, `value`             |
| **`<select>`** | `<select name="cars"><option value="volvo">Volvo</option></select>` | `name`, `multiple`, `size`           |
| **`<label>`** | `<label for="username">Username:</label>`                    | `for`                               |

## Structural Tags

| **Tag**   | **Example**                                                   | **Attributes**                       |
|-----------|---------------------------------------------------------------|-------------------------------------|
| **`<div>`** | `<div class="container">...</div>`                           | `class`, `id`, `style`, `title`     |
| **`<span>`** | `<span style="color: red;">Text</span>`                     | `class`, `id`, `style`, `title`     |
| **`<header>`** | `<header><h1>Title</h1></header>`                           | N/A                                 |
| **`<footer>`** | `<footer>Footer content here</footer>`                      | N/A                                 |
| **`<section>`** | `<section><h2>Section Title</h2></section>`                | N/A                                 |
| **`<article>`** | `<article><h2>Article Title</h2></article>`                | N/A                                 |
| **`<aside>`** | `<aside>Aside content here</aside>`                          | N/A                                 |
| **`<nav>`** | `<nav><ul><li><a href="#">Home</a></li></ul></nav>`          | N/A                                 |

## Media Tags

| **Tag**   | **Example**                                                   | **Attributes**                       |
|-----------|---------------------------------------------------------------|-------------------------------------|
| **`<audio>`** | `<audio controls><source src="audio.mp3" type="audio/mp3"></audio>` | `controls`, `autoplay`, `loop`, `src` |
| **`<video>`** | `<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4"></video>` | `width`, `height`, `controls`, `autoplay`, `loop`, `src` |
| **`<iframe>`** | `<iframe src="https://example.com" width="600" height="400"></iframe>` | `src`, `width`, `height`, `frameborder`, `allowfullscreen` |

## Table Elements

| **Tag**   | **Example**                                                   | **Attributes**                       |
|-----------|---------------------------------------------------------------|-------------------------------------|
| **`<table>`** | `<table><tr><th>Header</th></tr><tr><td>Data</td></tr></table>` | `border`, `cellspacing`, `cellpadding` |
| **`<tr>`** | `<tr><td>Data</td></tr>`                                      | N/A                                 |
| **`<th>`** | `<th>Header</th>`                                             | `colspan`, `rowspan`                |
| **`<td>`** | `<td>Data</td>`                                               | `colspan`, `rowspan`                |

## Metadata Tags

| **Tag**   | **Example**                                                   | **Attributes**                       |
|-----------|---------------------------------------------------------------|-------------------------------------|
| **`<meta>`** | `<meta charset="UTF-8">`                                    | `charset`, `name`, `content`, `http-equiv` |
| **`<title>`** | `<title>Page Title</title>`                                 | N/A                                 |
| **`<link>`** | `<link rel="stylesheet" href="styles.css">`                  | `rel`, `href`, `type`               |
| **`<script>`** | `<script src="script.js"></script>`                         | `src`, `type`, `async`, `defer`     |

## Semantic HTML5 Tags

| **Tag**   | **Example**                                                   | **Attributes**                       |
|-----------|---------------------------------------------------------------|-------------------------------------|
| **`<main>`** | `<main>Main content here</main>`                             | N/A                                 |
| **`<figure>`** | `<figure><img src="image.jpg" alt="Description"/><figcaption>Image caption</figcaption></figure>` | N/A                                 |
| **`<figcaption>`** | `<figcaption>Image caption</figcaption>`                   | N/A                                 |

## Additional HTML Tags

### Scripting and Linking Tags

| **Tag**   | **Example**                                                   | **Attributes**                       |
|-----------|---------------------------------------------------------------|-------------------------------------|
| **`<script>`** | `<script src="script.js"></script>`                         | `src`, `type`, `async`, `defer`     |
| **`<noscript>`** | `<noscript>Your browser does not support JavaScript.</noscript>` | N/A                                 |
| **`<template>`** | `<template><p>Template content here</p></template>`         | N/A                                 |
| **`<link>`** | `<link rel="stylesheet" href="styles.css">`                  | `rel`, `href`, `type`               |

### Interactive and Form Elements

| **Tag**   | **Example**                                                   | **Attributes**                       |
|-----------|---------------------------------------------------------------|-------------------------------------|
| **`<details>`** | `<details><summary>More Info</summary><p>Details here.</p></details>` | `open`                              |
| **`<summary>`** | `<summary>Summary text</summary>`                           | N/A                                 |
| **`<datalist>`** | `<datalist><option value="Option 1"/><option value="Option 2"/></datalist>` | N/A                                 |
| **`<fieldset>`** | `<fieldset><legend>Legend</legend><input/></fieldset>`      | `disabled`, `form`, `name`          |
| **`<legend>`** | `<legend>Fieldset Legend</legend>`                            | N/A                                 |
