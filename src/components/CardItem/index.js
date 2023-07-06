import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <div>
        <img className="img-prop" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
