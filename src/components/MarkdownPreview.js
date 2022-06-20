import Markdown from './Markdown';

// Create a STRING variable with the MARKDOWN content
// Use it as props into <Markdown> Component
export default function MarkdownPreview() {
	console.log(content);
	return (
		<>
			<Markdown content={content} />
		</>
	);
}

// Add your MARKDOWN over here in a string variable.
// Make sure you use format BACKTICKS(``)
const content = `# Headline (h1)

## Subheading (h2)

###### Smallest heading (h6)

> Sample of a qoute block

##### even tables work bro

| col 0 | col 1 | col 2 | col 3 |
|---|---|---|---|
| row 1 | row 1 | row 1 | row 1 |
| row 1 | row 1 | row 1 | row 1 |
| row 1 | row 1 | row 1 | row 1 |
| row 1 | row 1 | row 1 | row 1 |

Body text

**Bold body text**

*Italic body text*

This is how links look like: [Click here buddy](https://skidsdao.github.io/)

##### test image below

![Hacker doing hacker things]("../assets/images/test-image.jpg")


\`\`\`c
#include <stdio.h>

int main(int argc, char *argv[]) {
	printf("Hello, World!");
	return 0;
}
\`\`\`

\`\`\`rust
use std::io::*

fn main() {
	println!("Hello, World!");
}
\`\`\`

`;
