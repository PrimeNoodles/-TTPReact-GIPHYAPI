import React, { Component } from "react";
import SearchField from "./SearchField";
import axios from "axios";



class GifCard extends Component {
    constructor(props){
      super(props);
        this.state={
          gifData: [],
          randomData: "",
          searchInput: "",
          showRandom: false,
        };
      }
  
  
  handleInput = (event) => {
    this.setState({searchInput: event.target.value});
  }

  handleSearch = () =>{
    const searchInput = this.state.searchInput;
    const API_KEY = process.env.REACT_APP_GIFY_API_KEY;
    const url = "http://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=" + API_KEY;
    axios
      .get(url, { params: {key: API_KEY}})
      .then((response) =>{
       this.setState({gifData: response.data.data});
       this.setState({showRandom : false});
       console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleTrend = () =>{
    const API_KEY = process.env.REACT_APP_GIFY_API_KEY;
    const url = " http://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY;
     axios
      .get(url, { params: {key: API_KEY}})
      .then((response) =>{
       this.setState({gifData: response.data.data});
       this.setState({showRandom : false})
       console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleRandom = () =>{
    const API_KEY = process.env.REACT_APP_GIFY_API_KEY;
    const url = "http://api.giphy.com/v1/gifs/random?api_key=" + API_KEY;
    axios
      .get(url, { params: {key: API_KEY}})
      .then((response) =>{
       this.setState({randomData: response.data.data.images.downsized_large.url});
       this.setState({showRandom : true});
      console.log(this.state.randomData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  render(){
     return(
       <div>
         <SearchField
           value = {this.state.searchInput}
           onChange = {this.handleInput}
           onSearch = {this.handleSearch}
           onTrend = {this.handleTrend}
           onRandom = {this.handleRandom}
         />
        <div>
          {this.state.gifData.map(data => {
            if(this.state.showRandom!==true){return (
              <div>
                <img src={data.images.downsized_large.url} />
              </div>
            )}
            
          })}
            <div><img src={this.state.randomData}/></div>
        </div>
       </div>
     );
    }
  }
  
  export default GifCard;