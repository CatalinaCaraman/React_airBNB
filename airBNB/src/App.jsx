import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from './slices/cardsSlice';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Card from './Card';

export default function App() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    // Fetch data from your server and update the Redux state
    axios.get('https://613c7e69e9d92a0017e1736f.mockapi.io/cards').then((response) => {
      dispatch(setCards(response.data));
    });
  }, [dispatch]);
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </Layout>
        </Route>
        <Route path="/details/:id" component={DetailsPage} />
      </Switch>
    </Router>
  );
}



