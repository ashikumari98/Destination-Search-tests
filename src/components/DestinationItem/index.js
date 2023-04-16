// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationsListItem} = props
  const {name, imgUrl} = destinationsListItem

  return (
    <li className="card-container">
      <img src={imgUrl} className="image-card" alt={name} />
      <p className="name-card">{name}</p>
    </li>
  )
}

export default DestinationItem
