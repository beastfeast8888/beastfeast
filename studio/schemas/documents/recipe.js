export default {
    name: 'recipe',
    type: 'document',
    title: 'Recipe',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Recipie Title',
        description: 'Titles should be catchy, descriptive, and not too long'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the post',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'authors',
        title: 'Authors',
        type: 'array',
        of: [
          {
            type: 'authorReference'
          }
        ]
      },
      {
        name: 'mainImage',
        type: 'mainImage',
        title: 'Main image'
      },
      {
        name: 'excerpt',
        type: 'excerptPortableText',
        title: 'Excerpt',
        description:
          'This ends up on summary pages, on Google, when people share your post in social media.'
      },
      {
        name: 'description',
        type: 'bodyPortableText',
        title: 'Description'
      },
      {
        name: 'categories',
        type: 'array',
        title: 'Categories',
        of: [
          {
            type: 'reference',
            to: {
              type: 'category'
            }
          }
        ]
      },
      {
        name: 'cookTime',
        type: 'string',
        title: 'Cook Time',
        description: 'Enter only numbers that estimates minutes to complete cooking'
      },
      {
        name: 'prepTime',
        type: 'string',
        title: 'Prep Time',
        description: 'Enter only numbers that estimates minutes to complete the prep'
      },
      {
        name: 'servings',
        type: 'string',
        title: 'Servings',
        description: 'Enter only numbers that estimates minutes to complete the whole recipie'
      },
      {
        name: 'difficultyLevel',
        title: 'Difficulty Level',
        description: '',
        type: 'array',
        of: [{type: 'string'}],
        options: {
            list: [
            {title: 'Easy', value: 'easy'},
            {title: 'Medium', value: 'medium'},
            {title: 'Difficult', value: 'difficult'}
            ]
        }
      },
      {
        name: 'Source',
        type: 'object',
        title: 'URL',
        fields: [
          {
            title: 'URL',
            name: 'href',
            type: 'url'
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'title',
        slug: 'slug',
        media: 'mainImage'
      },      
    }
  }

//   Title - string
// Slug - slug
// Author - reference
// Image - mainImage
// Description - portableText
// Categories - reference 
// Cook time - string
// Prep time - string
// Servings - string
// Difficulty Level - select
// Source - url
// Ingredients - array
// Directions - array
// Likes - 
// Comments - 
