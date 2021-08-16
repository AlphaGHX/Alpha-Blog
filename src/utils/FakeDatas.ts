import SideBarData from '@/models/SideBarData'
import SideBarTocData from '@/models/SideBarTocData'
import BlogItemData from '@/models/BlogItemData'

export const sideBarData: SideBarData = {
  topImgSrc: 'https://via.placeholder.com/70x70',
  name: 'Alpha',
  contacts: ['github', 'telegram', 'twitter'],
  contents: [
    {
      title: '文章',
      icon: 'md-bookmarks',
      isActive: false,
      hideItem: []
    },
    {
      title: '归档',
      icon: 'md-archive',
      isActive: false,
      hideItem: [
        {
          isActive: false,
          title: '2021',
          hideItem: [
            {
              title: '3'
            }
          ]
        },
        {
          isActive: false,
          title: '2020',
          hideItem: []
        },
        {
          isActive: false,
          title: '2019',
          hideItem: []
        },
        {
          isActive: false,
          title: '2018',
          hideItem: []
        },
        {
          isActive: false,
          title: '2017',
          hideItem: []
        },
        {
          isActive: false,
          title: '2016',
          hideItem: []
        }
      ]
    },
    {
      title: '分类',
      icon: 'md-pricetags',
      isActive: false,
      hideItem: [
        {
          isActive: false,
          title: '前端',
          hideItem: []
        },
        {
          isActive: false,
          title: '后端',
          hideItem: []
        },
        {
          isActive: false,
          title: '算法',
          hideItem: []
        }
      ]
    }
  ]
}

// export const sideBarTocDataEX = function(
//   data: { name: string; level: number }[]
// ) {
//   const res: SideBarTocData = { contents: [] }

//   let max = -1
//   let min = 10
//   for (const item of data) {
//     if (item.level > max) max = item.level
//     if (item.level < min) min = item.level
//   }

//   let avg = (max - min) / 3
//   if (avg === 0) avg = 1
//   let tmp = 0
//   // console.log(max, min, avg)
//   for (const item of data) {
//     if (item.level >= min && item.level < min + avg) item.level = 0
//     else if (item.level >= min + avg && item.level < max - avg) item.level = 1
//     else if (item.level >= max - avg && item.level <= max) item.level = 2
//     if (item.level === 2 && tmp === 0) item.level = 1
//     tmp = item.level
//     console.log(item)
//   }

//   let swH = -1
//   let swHH = -1
//   for (const item of data) {
//     if (item.level === 0) {
//       swHH = -1
//       res.contents.push({
//         title: item.name,
//         icon: '',
//         isActive: false,
//         hideItem: []
//       })
//       swH++
//     } else if (item.level === 1) {
//       // eslint-disable-next-line no-unused-expressions
//       res.contents[swH].hideItem?.push({
//         title: item.name,
//         isActive: false,
//         hideItem: []
//       })
//       swHH++
//     } else {
//       // eslint-disable-next-line no-unused-expressions
//       res.contents[swH].hideItem?.[swHH].hideItem?.push({
//         title: item.name
//       })
//     }
//     // console.log(swH, swHH)
//   }

//   return res
// }

export const blogItemDataFake: BlogItemData[] = [
  {
    imgSrc:
      'https://ultramunch.com/wp-content/uploads/2020/06/How-Strong-is-Your-Loli-Detection-Skills-Quiz.jpg',
    title: '关于AlphaBlog',
    text: '从SketchUI设计到VUE前端设计再到后端的艰辛过程',
    contentSrc:
      'https://raw.githubusercontent.com/AlphaGHX/Hackintosh-CVN-b460i-efi/main/README.md',
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
      'https://wallpapercave.com/wp/wp4747936.png',
    title: '甲骨文云VPS白嫖',
    text: '甲骨文云50M对等上下行2核1G的VPS免费嫖两台',
    contentSrc:
      'https://raw.githubusercontent.com/janpaepke/ScrollMagic/master/README.md',
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
    contentSrc:
      'https://raw.githubusercontent.com/sandoche/Darkmode.js/master/README.md',
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
