const fs = require('fs');
const path = require('path');
const prompts = require('prompts');
const { stripIndents } = require('common-tags');
const slugify = require('slugify');

createPost();

async function createPost() {
  const response = await prompts([
    {
      type: 'text',
      name: 'title',
      message: 'Title',
    },
    {
      type: 'text',
      name: 'subtitle',
      message: 'Subtitle',
    },
    {
      type: 'text',
      name: 'datePublished',
      message: 'Date Published',
    },
    {
      type: 'text',
      name: 'image',
      message: 'Image Filename',
    },
    {
      type: 'text',
      name: 'imageCreditText',
      message: 'Image Credit Text',
    },
    {
      type: 'text',
      name: 'imageCreditLink',
      message: 'Image Credit Link (Unsplash URL)',
    },
    {
      type: 'text',
      name: 'imageAlt',
      message: 'Image Alt Text',
    },
  ]);

  const postContent = stripIndents`
    ---
    ${Object.entries(response)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')}
    ---

    Hello world!
  `;

  const filename = slugify(response.title, { lower: true });

  fs.writeFileSync(
    path.join(__dirname, `../content/posts/${filename}.md`),
    postContent
  );
}
