export default interface BlogItemData {
  imgSrc: string
  title: string
  text: string
  contentSrc: string
  tag: {
    tagName: string
    icon: string
  }[]
}
