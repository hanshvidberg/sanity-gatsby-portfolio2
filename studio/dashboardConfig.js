export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ec2e8bf30dd5ec92573cc7f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio2-studio-j5o8pkf8',
                  apiId: '8858030b-6461-4b79-bd8e-621556364ea0'
                },
                {
                  buildHookId: '5ec2e8c0530b0b0173f7a03d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio2-web-keuhuuac',
                  apiId: '1d280d06-036b-4b65-8006-73b898918ce6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hanshvidberg/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio2-web-keuhuuac.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
