import { defineField, defineType } from 'sanity'

const caseType = [
  { title: 'Web', value: 'web' },
  { title: 'App', value: 'app' },
  { title: 'Graphic', value: 'graphic' },
]

export default defineType({
  name: 'case',
  title: 'Case',
  type: 'document',
  fields: [
    defineField({
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }),
    defineField({
      title: 'Case Type',
      name: 'caseType',
      type: 'string',
      options: {
        list: [
          ...caseType
        ]
      },
    })
  ],
})
