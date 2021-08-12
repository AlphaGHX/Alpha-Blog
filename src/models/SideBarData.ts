export default interface SideBarData {
  topImgSrc: string
  name: string
  contacts: string[]
  contents: {
    title: string
    icon: string
    isActive: boolean
    hideItem: {
      title: string
      isActive: boolean
      hideItem: {
        title: string
      }[]
    }[]
  }[]
}
