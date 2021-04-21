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

export const blogItemData: BlogItemData[] = [
  {
    imgSrc:
      'https://files.yande.re/sample/20961135f093b26a376f58aa578919dd/yande.re%20771763%20sample%20hanasaku_iroha%20maid%20matsumae_ohana%20oshimizu_nako%20skirt_lift%20tagme%20tsurugi_minko%20wa_maid%20wakura_yuina.jpg',
    title: '关于AlphaBlog',
    text:
      '从SketchUI设计到VUE前端设计再到后端的艰辛过程',
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
  },
  {
    imgSrc:
      'https://files.yande.re/sample/96eea93363324d72531f3da291454117/yande.re%20772569%20sample%20tagme.jpg',
    title: '甲骨文云VPS白嫖',
    text:
      '甲骨文云50M对等上下行2核1G的VPS免费嫖两台',
    tag: [
      {
        tagName: 'VPS',
        icon: '分类'
      },
      {
        tagName: '白嫖',
        icon: '标签'
      },
      {
        tagName: '2021',
        icon: '归档'
      },
      {
        tagName: '123',
        icon: 'love it'
      }
    ]
  },
  {
    imgSrc:
      'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_3x2.jpg',
    title: 'Google Voice轻松转移和充值',
    text:
      '年轻人的第一张+1手机卡',
    tag: [
      {
        tagName: '其他',
        icon: '分类'
      },
      {
        tagName: '其他',
        icon: '标签'
      },
      {
        tagName: '2021',
        icon: '归档'
      },
      {
        tagName: '90',
        icon: 'love it'
      }
    ]
  }
]
