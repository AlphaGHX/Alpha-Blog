export interface SideBarData {
  topImgSrc: string
  name: string
  contacts: string[]
  contents: {
    title: string
    icon: string
    isActive: boolean
    hideItem?: {
      title: string
      isActive: boolean
      hideItem?: {
        title: string
      }[]
    }[]
  }[]
}

export interface SideBarTocData {
  contents: {
    title: string
    icon: string
    isActive: boolean
    hideItem?: {
      title: string
      isActive: boolean
      hideItem?: {
        title: string
      }[]
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
