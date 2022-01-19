export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61e78d77314ddb4d1acd6dbf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a9qe2udi',
                  apiId: 'db99e1b0-f511-41f1-80a4-4c5b0b5fc908'
                },
                {
                  buildHookId: '61e78d77a3c9d55377e31b97',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-22yhjudp',
                  apiId: '6fce94a0-e3cf-448c-98b6-ffe1e663a56a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adedayo-888/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-22yhjudp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
