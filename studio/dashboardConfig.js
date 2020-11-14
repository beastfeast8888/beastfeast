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
                  buildHookId: '5fb05ef3048ac303affca012',
                  title: 'Sanity Studio',
                  name: 'beastfeast-studio',
                  apiId: '1d7ca98c-dd27-4306-9933-639dc03afd85'
                },
                {
                  buildHookId: '5fb05ef3a30abc3ec654add7',
                  title: 'Blog Website',
                  name: 'beastfeast',
                  apiId: 'ef60cff4-b472-481c-bc13-4af137ced840'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beastfeast8888/beastfeast',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://beastfeast.netlify.app', category: 'apps'}
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
