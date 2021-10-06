import { Component } from "react";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import { withRouter } from 'react-router-dom'


class MovieDetails extends Component {
    state = {
        
        movieData: [],
        loading: true,
      };
  

  fetching = async (query) => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=c73430e0&i=" +query
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ movieData: data });
       
      } else {
        alert("Something went wrong :(");
      }
    } catch {
      this.setState({ movieData: [] });
      console.log("ERROR");
    }
  };

  componentDidMount = async () => {
    this.fetching(this.props.match.params.imdbID);
  };

  render() {
    return (
      <div>
        <div>
          <Form.Group className="m-3">
            <Form.Control
              type="text"
              placeholder="Search here"
              
              onChange={(e) =>
               
                console.log(this.props)
              }
              
            />
          </Form.Group>
        </div>

        <h1>{this.state.movieData.Title}</h1>
        <img src='' alt="" />
        <h3>{this.state.movieData.Year}</h3>
        <h3>{this.state.movieData.Rated}</h3>
        <h3>{this.state.movieData.Released}</h3>
        <h3>{this.state.movieData.Director}</h3>


          {/* {this.state.movieData ? (
            //  console.log(this.state.movieData)

            this.state.movieData.map((movie) => (
              
                 <SingleMovie img={movie.Poster} id={movie.imdbID} />


            
              
             
            ))
          ) : (
            <p></p>
          )} */}
        </div>
    
    );
  }
}



export default withRouter(MovieDetails)