export default interface SideBarTocData {
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
