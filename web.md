# Web Development Guide - HTML & CSS

## Table of Contents
1. [HTML Fundamentals](#html-fundamentals)
2. [CSS Fundamentals](#css-fundamentals)
3. [HTML Tag Reference](#html-tag-reference)
4. [CSS Property Reference](#css-property-reference)
5. [Best Practices](#best-practices)
6. [Common Patterns](#common-patterns)
7. [Resources](#resources)

---

## HTML Fundamentals

### What is HTML?
HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of web pages using elements represented by tags.

### Basic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

### HTML Syntax Rules
- Tags are enclosed in angle brackets: `<tagname>`
- Most tags come in pairs: opening `<tag>` and closing `</tag>`
- Self-closing tags end with `/`: `<img />`
- Attributes provide additional information: `<tag attribute="value">`
- Tags can be nested but must be properly closed
- HTML is case-insensitive but lowercase is recommended

### HTML Document Structure
- `<!DOCTYPE html>` - Document type declaration
- `<html>` - Root element
- `<head>` - Contains metadata (not visible)
- `<body>` - Contains visible content

---

## CSS Fundamentals

### What is CSS?
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls layout, colors, fonts, spacing, and visual effects.

### CSS Syntax
```css
selector {
    property: value;
    property: value;
}
```

### Ways to Include CSS

#### 1. Inline CSS
```html
<p style="color: blue; font-size: 16px;">Blue text</p>
```

#### 2. Internal CSS
```html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
```

#### 3. External CSS
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

### CSS Selectors

#### Basic Selectors
- **Element**: `p { }` - Selects all `<p>` elements
- **Class**: `.classname { }` - Selects elements with class="classname"
- **ID**: `#idname { }` - Selects element with id="idname"
- **Universal**: `* { }` - Selects all elements

#### Combinator Selectors
- **Descendant**: `div p { }` - Selects `<p>` inside `<div>`
- **Child**: `div > p { }` - Selects direct `<p>` children of `<div>`
- **Adjacent**: `h1 + p { }` - Selects `<p>` immediately after `<h1>`
- **General sibling**: `h1 ~ p { }` - Selects all `<p>` siblings after `<h1>`

#### Pseudo-classes
- `:hover` - When mouse hovers over element
- `:active` - When element is being clicked
- `:focus` - When element has focus
- `:first-child` - First child element
- `:last-child` - Last child element
- `:nth-child(n)` - nth child element

#### Pseudo-elements
- `::before` - Insert content before element
- `::after` - Insert content after element
- `::first-line` - First line of text
- `::first-letter` - First letter of text

---

## HTML Tag Reference

### 🔤 Basic Structure Tags
| Tag | Purpose | Example |
|-----|---------|---------|
| `<html>` | Root element | `<html lang="en">` |
| `<head>` | Document metadata | `<head>...</head>` |
| `<title>` | Page title | `<title>My Page</title>` |
| `<meta>` | Metadata | `<meta charset="UTF-8">` |
| `<link>` | External resources | `<link rel="stylesheet" href="style.css">` |
| `<style>` | Internal CSS | `<style>body { margin: 0; }</style>` |
| `<script>` | JavaScript | `<script src="script.js"></script>` |
| `<body>` | Visible content | `<body>...</body>` |

### 🧱 Content Sectioning
| Tag | Purpose | Example |
|-----|---------|---------|
| `<header>` | Page/section header | `<header><h1>Title</h1></header>` |
| `<nav>` | Navigation links | `<nav><ul><li><a href="/">Home</a></li></ul></nav>` |
| `<main>` | Main content | `<main>...</main>` |
| `<section>` | Document section | `<section><h2>About</h2></section>` |
| `<article>` | Independent content | `<article><h2>Blog Post</h2></article>` |
| `<aside>` | Sidebar content | `<aside><h3>Related Links</h3></aside>` |
| `<footer>` | Page/section footer | `<footer><p>&copy; 2024</p></footer>` |
| `<h1>-<h6>` | Headings | `<h1>Main Title</h1>` |

### 📄 Text Content
| Tag | Purpose | Example |
|-----|---------|---------|
| `<p>` | Paragraph | `<p>This is a paragraph.</p>` |
| `<br>` | Line break | `Line 1<br>Line 2` |
| `<hr>` | Horizontal rule | `<hr>` |
| `<blockquote>` | Block quote | `<blockquote><p>Quote text</p></blockquote>` |
| `<pre>` | Preformatted text | `<pre>Code    with    spacing</pre>` |
| `<ol>` | Ordered list | `<ol><li>First</li><li>Second</li></ol>` |
| `<ul>` | Unordered list | `<ul><li>Item 1</li><li>Item 2</li></ul>` |
| `<li>` | List item | `<li>List item</li>` |
| `<dl>` | Description list | `<dl><dt>Term</dt><dd>Definition</dd></dl>` |
| `<dt>` | Description term | `<dt>HTML</dt>` |
| `<dd>` | Description definition | `<dd>Markup language</dd>` |

### 🖍️ Inline Text Formatting
| Tag | Purpose | Example |
|-----|---------|---------|
| `<a>` | Anchor/link | `<a href="https://example.com">Link</a>` |
| `<strong>` | Strong importance | `<strong>Important text</strong>` |
| `<em>` | Emphasized text | `<em>Emphasized text</em>` |
| `<b>` | Bold text | `<b>Bold text</b>` |
| `<i>` | Italic text | `<i>Italic text</i>` |
| `<u>` | Underlined text | `<u>Underlined text</u>` |
| `<small>` | Small text | `<small>Fine print</small>` |
| `<mark>` | Highlighted text | `<mark>Highlighted</mark>` |
| `<sub>` | Subscript | `H<sub>2</sub>O` |
| `<sup>` | Superscript | `E=mc<sup>2</sup>` |
| `<abbr>` | Abbreviation | `<abbr title="World Wide Web">WWW</abbr>` |
| `<cite>` | Citation | `<cite>Book Title</cite>` |
| `<code>` | Code snippet | `<code>console.log()</code>` |
| `<span>` | Generic inline | `<span class="highlight">Text</span>` |
| `<time>` | Time/date | `<time datetime="2024-07-15">July 15, 2024</time>` |
| `<var>` | Variable | `<var>x</var> = 5` |
| `<kbd>` | Keyboard input | `Press <kbd>Ctrl</kbd>+<kbd>C</kbd>` |

### 📦 Media & Embeds
| Tag | Purpose | Example |
|-----|---------|---------|
| `<img>` | Image | `<img src="image.jpg" alt="Description">` |
| `<audio>` | Audio content | `<audio controls><source src="audio.mp3"></audio>` |
| `<video>` | Video content | `<video controls><source src="video.mp4"></video>` |
| `<source>` | Media source | `<source src="video.mp4" type="video/mp4">` |
| `<track>` | Text tracks | `<track kind="subtitles" src="subs.vtt">` |
| `<iframe>` | Embedded frame | `<iframe src="https://example.com"></iframe>` |
| `<embed>` | Embedded content | `<embed src="file.pdf" type="application/pdf">` |
| `<object>` | Embedded object | `<object data="file.pdf"></object>` |
| `<param>` | Object parameters | `<param name="autoplay" value="false">` |
| `<canvas>` | Drawing canvas | `<canvas id="myCanvas"></canvas>` |
| `<svg>` | Scalable vector graphics | `<svg><circle cx="50" cy="50" r="40"/></svg>` |

### 🧮 Table Tags
| Tag | Purpose | Example |
|-----|---------|---------|
| `<table>` | Table container | `<table>...</table>` |
| `<caption>` | Table caption | `<caption>Table Title</caption>` |
| `<thead>` | Table header | `<thead><tr><th>Header</th></tr></thead>` |
| `<tbody>` | Table body | `<tbody><tr><td>Data</td></tr></tbody>` |
| `<tfoot>` | Table footer | `<tfoot><tr><td>Footer</td></tr></tfoot>` |
| `<tr>` | Table row | `<tr><td>Cell</td></tr>` |
| `<th>` | Header cell | `<th>Column Header</th>` |
| `<td>` | Data cell | `<td>Cell content</td>` |

### 🎛️ Forms & Inputs
| Tag | Purpose | Example |
|-----|---------|---------|
| `<form>` | Form container | `<form action="/submit" method="post">` |
| `<input>` | Input field | `<input type="text" name="username">` |
| `<label>` | Input label | `<label for="username">Username:</label>` |
| `<textarea>` | Multi-line text | `<textarea name="message"></textarea>` |
| `<button>` | Button | `<button type="submit">Submit</button>` |
| `<select>` | Dropdown | `<select><option>Choice 1</option></select>` |
| `<option>` | Select option | `<option value="1">Option 1</option>` |
| `<optgroup>` | Option group | `<optgroup label="Group"><option>Item</option></optgroup>` |
| `<fieldset>` | Form section | `<fieldset><legend>Personal Info</legend></fieldset>` |
| `<legend>` | Fieldset caption | `<legend>Contact Information</legend>` |
| `<datalist>` | Input suggestions | `<datalist id="browsers"><option value="Chrome"></datalist>` |
| `<output>` | Form output | `<output for="range">50</output>` |

---

## CSS Property Reference

### 📝 Text Properties
| Property | Purpose | Example |
|----------|---------|---------|
| `color` | Text color | `color: #333;` |
| `font-family` | Font type | `font-family: Arial, sans-serif;` |
| `font-size` | Font size | `font-size: 16px;` |
| `font-weight` | Font thickness | `font-weight: bold;` |
| `font-style` | Font style | `font-style: italic;` |
| `text-align` | Text alignment | `text-align: center;` |
| `text-decoration` | Text decoration | `text-decoration: underline;` |
| `text-transform` | Text case | `text-transform: uppercase;` |
| `line-height` | Line spacing | `line-height: 1.5;` |
| `letter-spacing` | Character spacing | `letter-spacing: 2px;` |

### 📦 Box Model Properties
| Property | Purpose | Example |
|----------|---------|---------|
| `width` | Element width | `width: 300px;` |
| `height` | Element height | `height: 200px;` |
| `margin` | Outer spacing | `margin: 10px;` |
| `padding` | Inner spacing | `padding: 15px;` |
| `border` | Border style | `border: 1px solid #ccc;` |
| `box-sizing` | Box model type | `box-sizing: border-box;` |

### 🎨 Background Properties
| Property | Purpose | Example |
|----------|---------|---------|
| `background-color` | Background color | `background-color: #f0f0f0;` |
| `background-image` | Background image | `background-image: url('image.jpg');` |
| `background-size` | Image size | `background-size: cover;` |
| `background-position` | Image position | `background-position: center;` |
| `background-repeat` | Image repeat | `background-repeat: no-repeat;` |

### 📐 Layout Properties
| Property | Purpose | Example |
|----------|---------|---------|
| `display` | Display type | `display: block;` |
| `position` | Positioning | `position: relative;` |
| `top, right, bottom, left` | Position offset | `top: 10px;` |
| `float` | Element float | `float: left;` |
| `clear` | Clear floats | `clear: both;` |
| `z-index` | Stack order | `z-index: 10;` |

### 🔧 Flexbox Properties
| Property | Purpose | Example |
|----------|---------|---------|
| `display: flex` | Flex container | `display: flex;` |
| `flex-direction` | Flex direction | `flex-direction: column;` |
| `justify-content` | Main axis alignment | `justify-content: center;` |
| `align-items` | Cross axis alignment | `align-items: center;` |
| `flex-wrap` | Wrap behavior | `flex-wrap: wrap;` |
| `flex` | Flex grow/shrink | `flex: 1;` |

### 🎯 Grid Properties
| Property | Purpose | Example |
|----------|---------|---------|
| `display: grid` | Grid container | `display: grid;` |
| `grid-template-columns` | Column sizes | `grid-template-columns: 1fr 2fr 1fr;` |
| `grid-template-rows` | Row sizes | `grid-template-rows: auto 1fr auto;` |
| `grid-gap` | Grid spacing | `grid-gap: 20px;` |
| `grid-column` | Column span | `grid-column: 1 / 3;` |
| `grid-row` | Row span | `grid-row: 2 / 4;` |

---

## Best Practices

### HTML Best Practices

#### 1. Semantic HTML
- Use appropriate HTML elements for their intended purpose
- Choose elements based on meaning, not appearance
- Use headings hierarchically (h1 → h2 → h3)

```html
<!-- Good -->
<header>
    <h1>Site Title</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>

<!-- Bad -->
<div class="header">
    <div class="title">Site Title</div>
    <div class="nav">
        <div><a href="/">Home</a></div>
        <div><a href="/about">About</a></div>
    </div>
</div>
```

#### 2. Accessibility
- Always include `alt` attributes for images
- Use proper form labels
- Ensure good color contrast
- Use ARIA attributes when needed

```html
<!-- Good -->
<img src="chart.png" alt="Sales increased 25% from Q3 to Q4">
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" required>

<!-- Bad -->
<img src="chart.png">
<div>Email:</div>
<input type="email" name="email">
```

#### 3. Performance
- Optimize images
- Minimize HTTP requests
- Use appropriate image formats
- Lazy load images when possible

```html
<img src="hero.webp" alt="Hero image" loading="lazy">
```

### CSS Best Practices

#### 1. Organization
- Use consistent naming conventions
- Group related styles together
- Comment your code
- Use external stylesheets

```css
/* Navigation Styles */
.nav {
    display: flex;
    background-color: #333;
}

.nav__item {
    padding: 1rem;
}

.nav__link {
    color: white;
    text-decoration: none;
}

.nav__link:hover {
    background-color: #555;
}
```

#### 2. Specificity Management
- Keep specificity low
- Avoid using `!important`
- Use classes over IDs for styling
- Avoid overly specific selectors

```css
/* Good */
.button {
    background-color: blue;
}

.button--large {
    padding: 1rem 2rem;
}

/* Bad */
div#content .sidebar ul li a.button {
    background-color: blue !important;
}
```

#### 3. Responsive Design
- Use relative units (rem, em, %)
- Implement mobile-first approach
- Use media queries effectively
- Test on multiple devices

```css
/* Mobile first */
.container {
    width: 100%;
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
}
```

---

## Common Patterns

### 1. Card Component
```html
<div class="card">
    <img src="image.jpg" alt="Card image" class="card__image">
    <div class="card__content">
        <h3 class="card__title">Card Title</h3>
        <p class="card__description">Card description text here.</p>
        <a href="#" class="card__link">Read More</a>
    </div>
</div>
```

```css
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card__content {
    padding: 1rem;
}

.card__title {
    margin: 0 0 0.5rem 0;
    color: #333;
}

.card__description {
    color: #666;
    margin-bottom: 1rem;
}

.card__link {
    color: #007acc;
    text-decoration: none;
}
```

### 2. Navigation Bar
```html
<nav class="navbar">
    <div class="navbar__brand">
        <a href="/">Logo</a>
    </div>
    <ul class="navbar__menu">
        <li class="navbar__item">
            <a href="/" class="navbar__link">Home</a>
        </li>
        <li class="navbar__item">
            <a href="/about" class="navbar__link">About</a>
        </li>
        <li class="navbar__item">
            <a href="/contact" class="navbar__link">Contact</a>
        </li>
    </ul>
</nav>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
}

.navbar__brand a {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
}

.navbar__menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar__item {
    margin-left: 2rem;
}

.navbar__link {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.navbar__link:hover {
    color: #007acc;
}
```

### 3. Responsive Grid Layout
```html
<div class="grid">
    <div class="grid__item">Item 1</div>
    <div class="grid__item">Item 2</div>
    <div class="grid__item">Item 3</div>
    <div class="grid__item">Item 4</div>
</div>
```

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

.grid__item {
    background-color: #f0f0f0;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
}
```

### 4. Form Styling
```html
<form class="form">
    <div class="form__group">
        <label for="name" class="form__label">Name</label>
        <input type="text" id="name" class="form__input" required>
    </div>
    <div class="form__group">
        <label for="email" class="form__label">Email</label>
        <input type="email" id="email" class="form__input" required>
    </div>
    <div class="form__group">
        <label for="message" class="form__label">Message</label>
        <textarea id="message" class="form__textarea" rows="4"></textarea>
    </div>
    <button type="submit" class="form__button">Submit</button>
</form>
```

```css
.form {
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
}

.form__group {
    margin-bottom: 1.5rem;
}

.form__label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
}

.form__input,
.form__textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.form__input:focus,
.form__textarea:focus {
    outline: none;
    border-color: #007acc;
}

.form__button {
    background-color: #007acc;
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.form__button:hover {
    background-color: #005c99;
}
```

---

## Resources

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web development documentation
- [W3Schools](https://www.w3schools.com/) - Web development tutorials
- [CSS-Tricks](https://css-tricks.com/) - CSS tips, tricks, and techniques
- [A List Apart](https://alistapart.com/) - Web design and development articles

### Tools & Validators
- [HTML Validator](https://validator.w3.org/) - Validate HTML markup
- [CSS Validator](https://jigsaw.w3.org/css-validator/) - Validate CSS code
- [Can I Use](https://caniuse.com/) - Browser compatibility tables
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Web performance auditing

### CSS Frameworks
- [Bootstrap](https://getbootstrap.com/) - Popular CSS framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Bulma](https://bulma.io/) - Modern CSS framework

### Browser Developer Tools
- **Chrome DevTools**: F12 or Ctrl+Shift+I
- **Firefox Developer Tools**: F12 or Ctrl+Shift+I
- **Safari Web Inspector**: Cmd+Option+I (Mac)
- **Edge DevTools**: F12 or Ctrl+Shift+I

### Color Tools
- [Adobe Color](https://color.adobe.com/) - Color palette generator
- [Coolors](https://coolors.co/) - Color scheme generator
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Accessibility contrast checking

---

## Quick Reference

### HTML5 Document Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Page Title</h1>
        <nav>
            <!-- Navigation -->
        </nav>
    </header>
    
    <main>
        <!-- Main content -->
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
```

### CSS Reset/Normalize
```css
/* Basic CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
}

img {
    max-width: 100%;
    height: auto;
}

a {
    text-decoration: none;
    color: inherit;
}

ul, ol {
    list-style: none;
}
```

---

*Last updated: July 2024 | Created by Dibyadyuti Das*
