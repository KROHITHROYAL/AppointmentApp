import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
}

const onClickStar = () => {
  toggleIsStarred(id)
}

return (
  <li className="appointment-item">
    <div className="header-container">
      <p className="title"> {title} </p>
      <button
        className="star-btn"
        type="button"
        testid="star"
        onClick={onClickStar}
      >
        <img 
        src={starImgeUrl} 
        alt="star" 
        className="star-image" />
      </button>
    </div>
    <p className="date">Date: {date} </p>
  </li>
)

export default AppointmentItem
