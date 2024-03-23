// Write your code here
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="not-found-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="desktop-img"
      />
      <h1>Lost Your Way?</h1>
      <p>
        Sorry, we can't find that page. You'll find lots to explore on the home
        page
      </p>
    </div>
  </div>
)

export default NotFound
