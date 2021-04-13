export interface SideBarData {
  topImgSrc: string
  name: string
  contacts: string[]
  contents: {
    title: string
    icon: string
    hasHide: boolean
    isActive: boolean
    hideItem?: {
      title: string
    }[]
  }[]
}

export interface BlogItemData {
  imgSrc: string
  title: string
  text: string
  tag: {
    tagName: string
    icon: string
  }[]
}
