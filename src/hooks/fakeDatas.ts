import store from '@/store'
import { SideBarData, SideBarTocData, BlogItemData } from './Types'

export const sideBarData: SideBarData = {
  topImgSrc: 'https://via.placeholder.com/70x70',
  name: 'Alpha',
  contacts: ['github', 'telegram', 'twitter'],
  contents: [
    {
      title: '文章',
      icon: 'md-bookmarks',
      hasHide: false,
      isActive: false
    },
    {
      title: '归档',
      icon: 'md-archive',
      hasHide: true,
      isActive: false,
      hideItem: [
        {
          isActive: false,
          title: '2021',
          hasHide: true,
          hideItem: [
            {
              title: '3'
            }
          ]
        },
        {
          isActive: false,
          title: '2020',
          hasHide: false
        },
        {
          isActive: false,
          title: '2019',
          hasHide: false
        },
        {
          isActive: false,
          title: '2018',
          hasHide: false
        },
        {
          isActive: false,
          title: '2017',
          hasHide: false
        },
        {
          isActive: false,
          title: '2016',
          hasHide: false
        }
      ]
    },
    {
      title: '分类',
      icon: 'md-pricetags',
      hasHide: true,
      isActive: false,
      hideItem: [
        {
          isActive: false,
          title: '前端',
          hasHide: false
        },
        {
          isActive: false,
          title: '后端',
          hasHide: false
        },
        {
          isActive: false,
          title: '算法',
          hasHide: false
        }
      ]
    }
  ]
}

export const sideBarTocDataEX = function() {
  const data = store.state.tocData
  const comH1 = { title: '', icon: '', isActive: false, hasHide: false }
  const comH2 = { title: '', isActive: false, hasHide: false }
  const comH3 = { title: '' }
  let res: SideBarTocData = { contents: [] }
  let sw = 0

  for (const item of data) {
    if (item.level === 0 || item.level === 1) {
      item.level = 0
    } else if (item.level === 2 || item.level === 3) {
      item.level = 1
    } else {
      item.level = 2
    }
  }

  for (const item of data) {
    if (item.level === 0) {
      res.contents.push({
        title: item.name,
        icon: '',
        isActive: false,
        hasHide: false
      })
    }
  }
}

export const sideBarTocData: SideBarTocData = {
  contents: [
    {
      title: 'H1',
      icon: 'star',
      isActive: false,
      hasHide: true,
      hideItem: [
        {
          title: 'H2',
          isActive: false,
          hasHide: true,
          hideItem: [
            {
              title: 'H3'
            },
            {
              title: 'H3X'
            }
          ]
        }
      ]
    },
    {
      title: 'H1',
      icon: 'star',
      isActive: false,
      hasHide: true,
      hideItem: [
        {
          title: 'H2',
          isActive: false,
          hasHide: false
        }
      ]
    },
    {
      title: 'H1X',
      icon: 'star',
      isActive: false,
      hasHide: false
    }
  ]
}

export const blogItemData: BlogItemData[] = [
  {
    imgSrc:
      'https://files.yande.re/sample/20961135f093b26a376f58aa578919dd/yande.re%20771763%20sample%20hanasaku_iroha%20maid%20matsumae_ohana%20oshimizu_nako%20skirt_lift%20tagme%20tsurugi_minko%20wa_maid%20wakura_yuina.jpg',
    title: '关于AlphaBlog',
    text: '从SketchUI设计到VUE前端设计再到后端的艰辛过程',
    tag: [
      {
        tagName: '前端',
        icon: 'md-pricetags'
      },
      {
        tagName: 'Vue',
        icon: 'md-pricetag'
      },
      {
        tagName: '2021',
        icon: 'md-archive'
      },
      {
        tagName: '100',
        icon: 'md-heart'
      }
    ]
  },
  {
    imgSrc:
      'https://files.yande.re/sample/96eea93363324d72531f3da291454117/yande.re%20772569%20sample%20tagme.jpg',
    title: '甲骨文云VPS白嫖',
    text: '甲骨文云50M对等上下行2核1G的VPS免费嫖两台',
    tag: [
      {
        tagName: 'VPS',
        icon: 'md-pricetags'
      },
      {
        tagName: '白嫖',
        icon: 'md-pricetag'
      },
      {
        tagName: '2021',
        icon: 'md-archive'
      },
      {
        tagName: '123',
        icon: 'md-heart'
      }
    ]
  },
  {
    imgSrc:
      'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_3x2.jpg',
    title: 'Google Voice轻松转移和充值',
    text: '年轻人的第一张+1手机卡',
    tag: [
      {
        tagName: '其他',
        icon: 'md-pricetags'
      },
      {
        tagName: '其他',
        icon: 'md-pricetag'
      },
      {
        tagName: '2021',
        icon: 'md-archive'
      },
      {
        tagName: '90',
        icon: 'md-heart'
      }
    ]
  }
]
