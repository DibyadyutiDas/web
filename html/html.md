# HTML: The Building Blocks of the Web

## Table of Contents
1. [Introduction](#introduction)
2. [Document Structure](#document-structure)
3. [Elements & Tags](#elements-tags)
4. [Forms & Input](#forms-input)
5. [Semantic HTML](#semantic-html)
6. [Accessibility](#accessibility)
7. [Best Practices](#best-practices)
8. [Resources](#resources)

## Introduction

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It:
- Defines the structure of web content
- Works alongside CSS and JavaScript
- Is semantic and accessible
- Supports multimedia and hyperlinks

## Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Main Heading</h1>
    </header>
    <main>
        <article>Content here</article>
    </main>
    <footer>
        <p>&copy; 2025</p>
    </footer>
</body>
</html>
```

## Elements & Tags

### Text Elements
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>Paragraph text</p>
<strong>Bold text</strong>
<em>Italic text</em>
<span>Inline container</span>
```

### Lists
```html
<ul>
    <li>Unordered item</li>
    <li>Another item</li>
</ul>

<ol>
    <li>First ordered item</li>
    <li>Second ordered item</li>
</ol>

<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
```

### Links & Media
```html
<a href="https://example.com">Link text</a>
<img src="image.jpg" alt="Description">
<video src="video.mp4" controls></video>
<audio src="audio.mp3" controls></audio>
```

## Forms & Input

```html
<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <select name="country">
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
    </select>

    <textarea name="message" rows="4" cols="50"></textarea>

    <button type="submit">Submit</button>
</form>
```

## Semantic HTML

### Structural Elements
```html
<header>Site header</header>
<nav>Navigation</nav>
<main>Main content</main>
<article>Article content</article>
<section>Content section</section>
<aside>Sidebar content</aside>
<footer>Site footer</footer>
```

### Text Semantics
```html
<time datetime="2025-01-01">January 1st</time>
<mark>Highlighted text</mark>
<cite>Citation</cite>
<blockquote>Quoted text</blockquote>
```

## Accessibility

### ARIA Roles & Attributes
```html
<div role="alert">Important message</div>
<button aria-label="Close">×</button>
<div aria-hidden="true">Hidden content</div>
```

### Focus Management
```html
<a href="#main" class="skip-link">Skip to main content</a>
<button tabindex="0">Focusable button</button>
```

## Best Practices

1. **Use Semantic Elements**
   - Choose meaningful tags
   - Avoid div soup
   - Maintain proper heading hierarchy

2. **Accessibility First**
   - Include alt text for images
   - Use ARIA attributes when needed
   - Ensure keyboard navigation
   - Maintain color contrast

3. **Performance**
   - Optimize images
   - Load CSS in head
   - Load JS before body end
   - Use async/defer for scripts

4. **Validation**
   - Use proper DOCTYPE
   - Close all tags
   - Use valid attributes
   - Check W3C validation

## Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML Specification](https://html.spec.whatwg.org/)

### Tools
- [W3C Validator](https://validator.w3.org/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [HTML5 Outliner](https://gsnedders.html5.org/outliner/)