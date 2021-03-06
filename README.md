# SkidsDAO Temporary Site

The ultimate and beautiful one will come after awhile! (Stay tuned for its glory!)

## Temporary Conventions

- Dump **ALL content images** in `/public/assets/images/`


## Preview of Markdown Rendering

Check a preview render of Markdown Styling: [Preview Render](https://skidsdao.github.io/preview)

## Don't like the styling?

Change CSS rules in `/src/components/Markdown.js`;


## How to render markdown?

Check in `MarkdownPreview.js` for an example usage.

Short example usage

```javascript


// Notice the use of backticks (``)

let content_variable = `# Header

Body text is over here.

### A smaller header

Smaller body text over here

`;


// Attach content to <Markdown> component
<Markdown content={content_variable} />

```


## How to add a blog post?

Replicate content block in `./src/modules/content.js.` and change values as needed.

```javascript

// Overview of content block in content.js

// ********** START CONTENT **********//
markdown = `#### Just some markdown over here

write whatever you want to write here

**bold you want?**

*italic you want?*

etc.
`;

content.push({
	title: "This is the title",
	subtitle: "Subtitle over here",
	content: markdown
});

// resolve uri
content[content.length - 1].uri = resolveUri(content[content.length - 1].title);
// ********** END CONTENT **********//

```


