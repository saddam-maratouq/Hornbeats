import React from "react";
import Hornbeats from "./Hornbeats";
import ImageData from "./ImageData";


class Main extends React.Component {



  render() {


   

    return (
      <>
        {ImageData.map((item) => {
          return (
            <Hornbeats key={Math.random()} title={item.title} imgeUrl={item.image_url} 
            description={item.description} horns={item.horns} keyword={item.keyword} gitTitle={this.props.gitTitle}/>
          );
        })}



      </>
    );
  }
}

export default Main;