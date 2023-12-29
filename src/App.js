import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

function App() {
  const cardElements = data.map(card => {
    return <Card
    key = {card.id}
    title = {card.title}
    description = {card.description}
    price = {card.price}
    coverImg = {card.coverImg}
    rating = {card.stats.rating}
    reviewCount = {card.stats.reviewCount}
    location = {card.location}
    openSpots = {card.openSpots}
    />
  })
  return (
    <div>
      <Navbar/>
      <div className='card-container'>
      {cardElements}
      </div>
    </div>
  );
}
export default App;
