export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61315e3442ef123e212af499',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-portfolio-studio',
                  apiId: '4496eb9c-eb9c-4c19-a199-485d56a268e8'
                },
                {
                  buildHookId: '61315e345389a95af6cb8014',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-portfolio',
                  apiId: '9a57343b-cabb-425e-a857-90c16cab65ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cypherpinay/sanity-kitchen-sink-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
