import React from 'react';







class Hornbeats  extends React.Component{



    
    

    render(){

        return( 
  
            <div>

                <h2>    {this.props.title}         </h2> 
        
                <img    onClick={this.increse} src={this.props.hornIamge}  
                 alt='hornImage'
                 width={this.props.width}
                 height={this.props.height}
                /> 

                    <p>  {this.props.descrbtion}            </p> 




                   
            </div>       
                
        )
    }

}
export default  Hornbeats;