
export const content = [];


function resolveUri(title) {
	let uri = content[content.length - 1].title.toLowerCase().split(" ").join("_")
	return encodeURI(uri);
}

let markdown = '';

// ********** START CONTENT **********//
markdown = `#### Just some markdown over here

write whatever you want to write here

![Hacker doing hacker things](/assets/images/test-image.jpg)

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






// ********** START CONTENT **********//
markdown = `#### Just some markdown for second content

write whatever you want to write here

**bold you want?**

*italic you want?*

etc.
`;

content.push({
	title: "This is the second title",
	subtitle: "Subtitle over here for second",
	content: markdown
});

// resolve uri
content[content.length - 1].uri = resolveUri(content[content.length - 1].title);
// ********** END CONTENT **********//
