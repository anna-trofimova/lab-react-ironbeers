import React, {Component} from 'react'
import axios from 'axios'

class Beers extends Component{
  state = {
    beers:[]
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
    .then((response) => {
      console.log(response.data)
      const beersAPI = response.data
      this.setState({
        beers:beersAPI
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render(){
    const {beers} = this.state
    return (
      <div>
        <h2>Beers</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui porro nostrum dignissimos possimus, aliquam rem impedit! Blanditiis illo, modi quisquam atque unde accusantium doloremque culpa nobis, sunt assumenda autem!</p>
        <section className='container'>
        {beers.length > 0 ? beers.map((beer) => {
          return (
            <article key={beer.id} className='beers'>
              <img src={beer.image_url} alt={beer.name}/>
              <div className='text'>
               <h4>{beer.name}</h4>
               <p>{beer.tagline}</p>
               <p>{beer.contributed_by}</p>
               </div>
            </article>
          )
        }): <p>Loading...</p>}
      </section>
      </div>
    )

  }
}

export default Beers
