# Concept

- standrad Json
- content only contains Components
- The Frontend build the components in the given order

## JSON file from Server

````json5
{
  "title": "My Portfolio",
  "contentSEO": "",
  "content": [
    // Only components in this body
    {
      "type": "markdown",
      "markdown": "# Heading\n\n - test\n - test2 ..."
    },
    {
      "type": "Video",
      "url": "...",
      "autoStart": true,
      "loop": true
    },
    {
      "type": "markdown",
      "markdown": "\n\n - test\n - test2 ..."
    },
    ...
  ]
}
````

## Components

- Markdown
- Video
- Image?
- ImageCollection
- ArticleCard
- LabelList
- CodeBlock
- ...

### Component JSON

````json5
{
  "type": "componentName",
  // the only required to get the Component
  // all other props   
}
````