import './index.css'

const Navbar = props => {
  const {timer, score} = props
  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="navbar-logo"
      />
      <div className="score-card-container">
        <p className="score-card">
          <span className="score-word">Score: </span>
          {score}
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer-logo"
        />
        <p className="score-card">{timer} sec</p>
      </div>
    </div>
  )
}
export default Navbar
