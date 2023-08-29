/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  kits: [
    {
      type: 'category',
      label: 'Business Partner KIT',
      link: {
          type: 'generated-index',
      },
      collapsed: true,
      items: [
        'kits/Business Partner Kit/Changelog',
        'kits/Business Partner Kit/Adoption View',
        'kits/Business Partner Kit/Operation View',
        {
          type: 'category',
          label: 'Development View',
          link: {
            type: "generated-index",
          },
          items: [
            'kits/Business Partner Kit/Software Development View/Specification',
            {
              type: "category",
              label: "Gate API",
              link: {
                type: "generated-index",
              },
              items: require('./docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/sidebar.js'),
            },
            {
              type: "category",
              label: "Pool API",
              link: {
                type: "generated-index",
              },
                items: require('./docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/sidebar.js'),
            },
            {
              type: "category",
              label: "Bridge Dummy API",
              link: {
                  type: "generated-index",
              },
              items: require('./docs-kits/kits/Business Partner Kit/Software Development View/Bridge Dummy Api/sidebar.js'),
          },
          'kits/Business Partner Kit/Software Development View/Use Cases'
          ]
        },
        {
          type: 'category',
          label: 'Success Stories',
          link: {
            type: "generated-index",
          },
          items:[
            {
              type: 'autogenerated',
              dirName: 'kits/Business Partner Kit/Success Stories'
            }
          ]
        },
        {
          type: 'category',
          label: 'Documentation',
          link: {
            type: "generated-index",
          },
          items:[
            {
              type: 'autogenerated',
              dirName: 'kits/Business Partner Kit/Documentation BPDM'
            }
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Chain KIT',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'kits/Data Chain Kit/data chain kit changelog',
        'kits/Data Chain Kit/Adoption View',
        'kits/Data Chain Kit/Operation View',
        {
          type: 'category',
          label: 'Development View',
          link: {
            type: 'doc',
            id: 'kits/Data Chain Kit/Software Development View/Specification'
          },
          items:[
            {
              type: 'autogenerated',
              dirName: 'kits/Data Chain Kit/Software Development View/Job Api'
            }
          ]
        },
        {
          type: 'category',
          label: 'Success Stories',
          items:[
            'kits/Data Chain Kit/Success Stories/Trace-X Sucess Story',
            'kits/Data Chain Kit/Success Stories/Circularity Dashboard Sucess Story'
          ]
        },
        {
          type: 'category',
          label: 'Documentation',
          items:[
            {
              type: 'autogenerated',
              dirName: 'kits/Data Chain Kit/Documentation'
            }
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Connector KIT',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'kits/tractusx-edc/CHANGELOG',
        'kits/tractusx-edc/docs/kit/adoption-view/Adoption View',
        {
          type: 'category',
          label: 'Development View',
          link: {
            type: 'doc',
            id: 'kits/tractusx-edc/docs/kit/operation-view/page10_extensions',
          },
          collapsed: true,
          items: [
            'kits/tractusx-edc/docs/README',
            'kits/tractusx-edc/docs/kit/adoption-view/Domain Model',
            {
              type: 'category',
              label: 'openAPI',
              collapsed: true,
              items: [
                {
                  type: 'category',
                  label: 'management-api-v2-walkthrough',
                  collapsed: true,
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'kits/tractusx-edc/docs/samples/management-api-v2-walkthrough',
                    }
                  ]
                },
                {
                  type: 'autogenerated',
                  dirName: 'kits/tractusx-edc/docs/kit/development-view/openAPI'
                },
              ]
            },
            {
              type: 'category',
              label: 'edc-controlplane',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'kits/tractusx-edc/edc-controlplane',
                },
              ]
            },
            {
              type: 'category',
              label: 'edc-dataplane',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'kits/tractusx-edc/edc-dataplane',
                },
              ]
            },
            {
              type: 'category',
              label: 'edc-extensions',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'kits/tractusx-edc/docs/kit/operation-view/page10_extensions',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'kits/tractusx-edc/edc-extensions',
                },
              ]
            },
            'kits/tractusx-edc/core/edr-core/README',
            'kits/tractusx-edc/docs/development/Release'
          ],
        },
        {
          type: 'category',
          label: 'Operation View',
          link: {
            type: 'doc',
            id: 'kits/tractusx-edc/docs/kit/operation-view/page00_operation_view',
          },
          collapsed: true,
          items: [
            'kits/tractusx-edc/docs/kit/operation-view/page02_technical_prerequisites',
            {
              type: 'category',
              label: 'Setting up from source',
              collapsed: true,
              items: [
                'kits/tractusx-edc/docs/kit/operation-view/page03_local_setup_controlplane',
                'kits/tractusx-edc/docs/kit/operation-view/page04_local_setup_dataplane',
              ]
            },
            {
              type: 'category',
              label: 'Deployment via Helm',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'kits/tractusx-edc/charts',
                },
                
                'kits/tractusx-edc/docs/samples/example-dataspace/README',
                'kits/tractusx-edc/docs/samples/edr-api-overview/edr-api-overview',
              ]
            },
            {
              type: 'category',
              label: 'Test your setup',
              collapsed: true,
              items: [
                'kits/tractusx-edc/docs/development/postman/README',
                'kits/tractusx-edc/docs/kit/operation-view/page08_api',
                'kits/tractusx-edc/docs/samples/Transfer Data',
              ]
            },
            {
              type: 'category',
              label: 'Migration',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'kits/tractusx-edc/docs/kit/operation-view/page09_upgrading',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'kits/tractusx-edc/docs/migration',
                },
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Documentation',
          collapsed: true,
          items: [
            'kits/tractusx-edc/docs/kit/development-view/page02_repository_structure',
            'kits/tractusx-edc/docs/kit/development-view/page03_project_structure',
            'kits/tractusx-edc/docs/development/coding-principles',
            'kits/tractusx-edc/pr_etiquette',
            'kits/tractusx-edc/styleguide'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Traceability KIT',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'kits/Traceability Kit',
        },
      ],
    },
    {
          type: 'category',
          label: 'Digital Twin KIT',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'kits/Digital Twin Kit',
            },
          ],
        },
        {
          type: 'category',
          label: 'PCF Exchange KIT',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'kits/PCF Exchange Kit/PCF Exchange Kit Changelog',
            'kits/PCF Exchange Kit/Adoption View',
            'kits/PCF Exchange Kit/Operation View',
            {
              type: 'category',
              label: 'Development View',
              link: {
                type: "generated-index",
              },
              items: [
                'kits/PCF Exchange Kit/Software Development View/Specification',
                {
                  type: "category",
                  label: "PCF Exchange API",
                  link: {
                    type: "generated-index",
                  },
                  items: require('./docs-kits/kits/PCF Exchange Kit/Software Development View/pcf-exchange-api/sidebar.js'),
                }
              ]
            }

          ],
        } ,   
  ],
  Resiliency: [
    {
      type: 'category',
      label: 'Resiliency',
      link: {
        type: 'doc',
        id: 'Resiliency/resiliency'
      },
      items:[
        'Resiliency/DCM Kit',
        'Resiliency/maas',
        'Resiliency/OSIM',
        'Resiliency/PURIS',
        'Resiliency/mp kit',
      ]
    },
  ],
};

module.exports = sidebars;
