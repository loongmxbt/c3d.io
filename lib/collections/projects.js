// 项目
// 项目名称、类别、图片等

Projects = new orion.collection('projects', {
  singularName: "项目", 
  pluralName: "项目", 
  title: "项目", 
  link: {
    title: "项目"
  },

  tabular: {
    columns: [
      { data: "name", title: "项目名称" },
      orion.attributeColumn('summernote', 'desc', '项目介绍'),
      orion.attributeColumn('createdBy', 'createdBy', '创建者')
    ]
  }
});

Projects.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "项目名称"
  },

  images: orion.attribute('images', {
    label: '项目图片',
    optional: true
  }),

  desc: orion.attribute('summernote', {
      label: '项目介绍'
  }),

  createdBy: orion.attribute('createdBy')
}));