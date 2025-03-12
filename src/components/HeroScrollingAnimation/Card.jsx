const Card = ({title,heading,text}) => {
  return (
    <div className='card'>
      <div>{title}</div>
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Card
