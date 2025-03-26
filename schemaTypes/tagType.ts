import {defineField, defineType} from 'sanity'

export const tagType = defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
      },
      // You can add more fields here if needed.
    ],
})