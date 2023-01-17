// import React and the marked library
import React, { useState } from 'react';
// import marked from 'marked'
import { marked } from 'marked';
// create a functional component for the app
const MarkdownPreviewer = () => {
    // use the useState hook to create a state variable for the markdown text
    const [markdown, setMarkdown] = useState(`
# H1 Heading
## H2 Subheading
[Link](https://marked.js.org)

\`\`\`
Code block
\`\`\`

- List item
> Blockquote
![image](https://marked.js.org/img/logo-black.svg)
**Bolded text**
`);

    // create a function to handle changes to the markdown text
    const handleChange = (e) => {
        setMarkdown(e.target.value);
    }

    // return the JSX for the app
    return (
        <div className="container">
            <textarea id="editor" onChange={handleChange} value={markdown} />
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }} />
        </div>
    );
}

export default MarkdownPreviewer;
