export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6024f4dc6a42610668f4942b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-1ytjyjka',
                  apiId: 'e5b9f549-0e84-4d06-9f48-ab864e1c6490'
                },
                {
                  buildHookId: '6024f4dc37d7b8fb8a554941',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-asp6v8jz',
                  apiId: 'c4d34452-b791-417d-a1b6-59f2945a429d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/urusy/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-asp6v8jz.netlify.app', category: 'apps'}
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
