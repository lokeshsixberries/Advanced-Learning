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
| **`<form>`** | `<form action="/submit" method="post">...</form>`           | `action`, `method`, `enctype`, `target` |
| **`<input>`** | `<input type="text" name="username" placeholder="Username">` | `type`, `name`, `value`, `placeholder`, `checked` |
| **`<textarea>`** | `<textarea rows="4" cols="50">Text here...</textarea>`    | `rows`, `cols`, `placeholder`       |
| **`<button>`** | `<button type="submit">Submit</button>`                    | `type`, `name`, `value`             |
| **`<select>`** | `<select name="cars"><option value="volvo">Volvo</option></select>` | `name`, `multiple`, `size`           |
| **`<label>`** | `<label for="username">Username:</label>`                    | `for`                               |
| **`<div>`** | `<div class="container">...</div>`                           | `class`, `id`, `style`, `title`     |
| **`<span>`** | `<span style="color: red;">Text</span>`                     | `class`, `id`, `style`, `title`     |
| **`<header>`** | `<header><h1>Title</h1></header>`                           | N/A                                 |
| **`<footer>`** | `<footer>Footer content here</footer>`                      | N/A                                 |
| **`<section>`** | `<section><h2>Section Title</h2></section>`                | N/A                                 |
| **`<article>`** | `<article><h2>Article Title</h2></article>`                | N/A                                 |
| **`<aside>`** | `<aside>Aside content here</aside>`                          | N/A                                 |
| **`<nav>`** | `<nav><ul><li><a href="#">Home</a></li></ul></nav>`          | N/A                                 |
| **`<audio>`** | `<audio controls><source src="audio.mp3" type="audio/mp3"></audio>` | `controls`, `autoplay`, `loop`, `src` |
| **`<video>`** | `<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4"></video>` | `width`, `height`, `controls`, `autoplay`, `loop`, `src` |
| **`<iframe>`** | `<iframe src="https://example.com" width="600" height="400"></iframe>` | `src`, `width`, `height`, `frameborder`, `allowfullscreen` |
| **`<table>`** | `<table><tr><th>Header</th></tr><tr><td>Data</td></tr></table>` | `border`, `cellspacing`, `cellpadding` |
| **`<tr>`** | `<tr><td>Data</td></tr>`                                      | N/A                                 |
| **`<th>`** | `<th>Header</th>`                                             | `colspan`, `rowspan`                |
| **`<td>`** | `<td>Data</td>`                                               | `colspan`, `rowspan`                |
| **`<meta>`** | `<meta charset="UTF-8">`                                    | `charset`, `name`, `content`, `http-equiv` |
| **`<title>`** | `<title>Page Title</title>`                                 | N/A                                 |
| **`<link>`** | `<link rel="stylesheet" href="styles.css">`                  | `rel`, `href`, `type`               |
| **`<script>`** | `<script src="script.js"></script>`                         | `src`, `type`, `async`, `defer`     |
| **`<main>`** | `<main>Main content here</main>`                             | N/A                                 |
| **`<figure>`** | `<figure><img src="image.jpg" alt="Description"/><figcaption>Image caption</figcaption></figure>` | N/A                                 |
| **`<figcaption>`** | `<figcaption>Image caption</figcaption>`                   | N/A                                 |
| **`<script>`** | `<script src="script.js"></script>`                         | `src`, `type`, `async`, `defer`     |
| **`<noscript>`** | `<noscript>Your browser does not support JavaScript.</noscript>` | N/A                                 |
| **`<template>`** | `<template><p>Template content here</p></template>`         | N/A                                 |
| **`<link>`** | `<link rel="stylesheet" href="styles.css">`                  | `rel`, `href`, `type`               |
| **`<details>`** | `<details><summary>More Info</summary><p>Details here.</p></details>` | `open`                              |
| **`<summary>`** | `<summary>Summary text</summary>`                           | N/A                                 |
| **`<datalist>`** | `<datalist><option value="Option 1"/><option value="Option 2"/></datalist>` | N/A                                 |
| **`<fieldset>`** | `<fieldset><legend>Legend</legend><input/></fieldset>`      | `disabled`, `form`, `name`          |
| **`<legend>`** | `<legend>Fieldset Legend</legend>`                            | N/A                                 |
| **`<b>`** | `<b>Bold text</b>`                                           | N/A                                 |
| **`<i>`** | `<i>Italic text</i>`                                         | N/A                                 |
| **`<u>`** | `<u>Underlined text</u>`                                     | N/A                                 |
| **`<s>`** | `<s>Strikethrough text</s>`                                  | N/A                                 |
| **`<small>`** | `<small>Smaller text</small>`                               | N/A                                 |
| **`<mark>`** | `<mark>Highlighted text</mark>`                             | N/A                                 |
| **`<strong>`** | `<strong>Important text</strong>`                           | N/A                                 |
| **`<em>`** | `<em>Emphasized text</em>`                                   | N/A                                 |
| **`<font>`** | `<font color="red">Colored text</font>`                      | `color`, `size`, `face`              |
| **`<center>`** | `<center>Centered text</center>`                            | N/A                                 |
| **`<u>`** | `<u>Underlined text</u>`                                     | N/A                                 |
| **`<object>`** | `<object data="file.pdf" type="application/pdf"></object>`   | `data`, `type`, `width`, `height`    |
| **`<embed>`** | `<embed src="video.mp4" type="video/mp4" width="400" height="300">` | `src`, `type`, `width`, `height`    |
| **`<param>`** | `<param name="autoplay" value="true">`                       | `name`, `value`                     |
| **`<source>`** | `<source src="video.mp4" type="video/mp4">`                  | `src`, `type`                       |
| **`<base>`** | `<base href="https://example.com/">`                         | `href`, `target`                    |
| **`<blockquote>`** | `<blockquote cite="https://example.com">Quoted text</blockquote>` | `cite`                              |
| **`<q>`** | `<q>Quoted text</q>`                                         | `cite`                              |
| **`<code>`** | `<code>Code snippet</code>`                                 | N/A                                 |
| **`<samp>`** | `<samp>Sample output</samp>`                                | N/A                                 |
| **`<kbd>`** | `<kbd>Keyboard input</kbd>`                                  | N/A                                 |
| **`<pre>`** | `<pre>Preformatted text</pre>`                               | N/A                                 |
| **`<base>`** | `<base href="https://example.com/">`                         | `href`, `target`                    |
| **`<meta>`** | `<meta name="description" content="Description of the page">` | `name`, `content`, `http-equiv`     |
| **`<link>`** | `<link rel="icon" href="favicon.ico">`                       | `rel`, `href`, `type`               |
| **`<title>`** | `<title>Page Title</title>`                                 | N/A                                 |

