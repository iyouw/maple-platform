export const APP = {
  name: `Data-Visulization`,
  pages:[
    {
      name: `page1`,
      isDefault: true,
      children:[
        {
          type: {
            tag: `h-button`,
            props: [
              {
                name: 'text',
                required: true,
                type : `string`
              },
              {
                name: `size`,
                defaultValue: `middle`,
                type: `size-option`
              }
            ]
          },
          props:{
            text: `Hello Maple`,
            size: `small`,
          },
          style:{
            left: `30px`,
            top: `50px`
          }
        }
      ]
    }
  ]
};