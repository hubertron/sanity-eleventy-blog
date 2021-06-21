export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60d10791b297117605eec26f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-psexgsmj',
                  apiId: '2c05cc1e-29f1-4f67-9850-7b63beea2e23'
                },
                {
                  buildHookId: '60d107916844ff67554f2cbf',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-pv6rfthn',
                  apiId: '2bd39214-aa2b-4e6d-8aeb-93ea4621f182'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hubertron/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-pv6rfthn.netlify.app', category: 'apps'}
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
