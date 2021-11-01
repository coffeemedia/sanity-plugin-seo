export const seo = {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'Focus keyphrase',
      name: 'keyphrase',
      type: 'string',
    },
    {
      title: 'Synoniemen',
      name: 'synonyms',
      type: 'string',
    },
    {
      title: 'Markeren als cornerstone content',
      name: 'cornerstone',
      type: 'boolean',
    },
    {
      title: 'SEO titel',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Meta description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.max(156).warning('Probeer niet meer dan 156 karakters te gebruiken.')
    },
    {
      title: 'Social',
      name: 'social',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          title: 'Titel',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Beschrijving',
          name: 'description',
          type: 'text'
        },
        {
          title: 'Share afbeelding',
          name: 'shareImage',
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              title: 'Alternatieve beschrijving',
              name: 'alt',
              type: 'string'
            },
          ]
        }
      ]
    },
    {
      title: 'Advanced',
      name: 'advanced',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          title: 'Canonical url',
          name: 'canonicalUrl',
          type: 'string',
        },
        {
          title: 'Indexatie toestaan (index/noindex)',
          name: 'allowIndex',
          type: 'boolean',
          defaultValue: true,
        },
        {
          title: 'Volgen van links toestaan (follow/nofollow)',
          name: 'allowFollow',
          type: 'boolean',
        },
      ]
    }
  ]
}
