// 设计师
// 个人网站
// 头像
// 代表作品

Designers = new orion.collection('designers', {
  singularName: "设计师", 
  pluralName: "设计师", 
  title: "设计师", 
  link: {
    title: "设计师"
  },

  tabular: {
    columns: [
      { data: "name", title: "设计师名字" },
      orion.attributeColumn('summernote', 'desc', '设计师介绍'),
      orion.attributeColumn('createdBy', 'createdBy', '创建者')
    ]
  }
});

Designers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "设计师名字"
  },

  image: orion.attribute('image', {
    label: '设计师头像',
    optional: true
  }),

  desc: orion.attribute('summernote', {
      label: '设计师介绍'
  }),

  createdBy: orion.attribute('createdBy')
}));