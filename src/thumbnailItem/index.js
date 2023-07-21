import './index.css'

const ThumbnailItem = props => {
  const {id, thumbnailUrl, onClickedImage} = props

  const itemClicked = () => {
    onClickedImage(id)
  }
  return (
    <li>
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="thumbnail-image"
        onClick={itemClicked}
      />
    </li>
  )
}
export default ThumbnailItem
