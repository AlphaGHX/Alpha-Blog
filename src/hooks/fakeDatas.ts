import { SideBarData, BlogItemData } from './Types'

export const sideBarData: SideBarData = {
  topImgSrc: 'https://via.placeholder.com/70x70',
  name: 'Alpha',
  contacts: ['github', 'telegram', 'twitter'],
  contents: [
    {
      title: '文章',
      icon: '文章',
      hasHide: true,
      isActive: false,
      hideItem: [{ title: '博客' }, { title: '关于' }]
    },
    {
      title: '归档',
      icon: '归档',
      hasHide: true,
      isActive: false,
      hideItem: [
        {
          title: '2021'
        },
        {
          title: '2020'
        },
        {
          title: '2019'
        },
        {
          title: '2018'
        },
        {
          title: '2017'
        },
        {
          title: '2016'
        }
      ]
    },
    {
      title: '分类',
      icon: '分类',
      hasHide: true,
      isActive: false,
      hideItem: [
        {
          title: '前端'
        },
        {
          title: '后端'
        },
        {
          title: '算法'
        }
      ]
    }
  ]
}

export const blogItemData: BlogItemData = {
  imgSrc: 'https://files.yande.re/sample/20961135f093b26a376f58aa578919dd/yande.re%20771763%20sample%20hanasaku_iroha%20maid%20matsumae_ohana%20oshimizu_nako%20skirt_lift%20tagme%20tsurugi_minko%20wa_maid%20wakura_yuina.jpg',
  title: '标题',
  text:
    '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
  tag: [
    {
      tagName: '前端',
      icon: '分类'
    },
    {
      tagName: 'Vue',
      icon: '标签'
    },
    {
      tagName: '2021',
      icon: '归档'
    },
    {
      tagName: '100',
      icon: 'love it'
    }
  ]
}
