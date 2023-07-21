import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTabItem(tabId)
  }
  return (
    <li
      onClick={onClickTab}
      className={isActive ? 'active-tab-item' : 'tab-item'}
    >
      <p>{displayText}</p>
      {isActive ? <hr /> : ''}
    </li>
  )
}
export default TabItem
