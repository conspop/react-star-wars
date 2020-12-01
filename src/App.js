import './App.css';
import { Component } from 'react'
import { getStarships } from './services/sw-api'
import { Switch, Route, Link } from 'react-router-dom'
import StarshipPage from './StarshipPage'

class App extends Component {
  state = {starships: []}

  async componentDidMount() {
    const {results} = await getStarships()
    this.setState({
      starships: results
    })
  }
  
  render() {
    const { starships } = this.state
    return (
      <>
        <h1>Starwars!</h1>
        <Switch>
          <Route exact path='/' render={() =>
            (starships.length > 0) ?
            starships.map(starship => 
              <Link
                to={{
                  pathname: '/starship',
                  state: starship
                }}
                key={starship.name}
              >
                {starship.name}
              </Link>
            ) :
              <h3>Loading...</h3>
          }/>
          <Route exact path='/starship' render={props =>
            <StarshipPage {...props} />
          }/>
        </Switch>
      </>
    )
  }
  
}

export default App;
