

// import React from 'react'

// import Form from "react-bootstrap/Form";

// import 'bootstrap/dist/css/bootstrap.min.css';

// import ImageData from "./ImageData.json";

// import Hornbeats from "./Hornbeats";





// class MForm extends React.Component {


//     constructor(props) {

//         super(props)
//         this.state = {
//             horn: "1",
//             hornData: ImageData


//         }
//     }


//     DisplayHorn = (e) => {

//         e.preventDefault();

//         this.setState({

//             horn: e.target.value,
//         })
        
//     }


    

//     render() {
//         return (
//             <div>

//                 <h3> Select Hornes  </h3>
//                 <Form.Select onChange={this.DisplayHorn} Name='horns' aria-label="Default select example">
//                     <option value="1">One</option>
//                     <option value="2">Two</option>
//                     <option value="3">Three</option>
//                     <option value="100"  >    hundred    </option>
//                     <option value="All"> ALL  </option>


//                 </Form.Select>


//                 {this.state.hornData.map((item,idx) => {

//                 if (this.state.horn == item.horns) { 


//                     return (

//                 <Hornbeats
//                     title={item.title}
//                     keyword={item.keyword}
//                     hornIamge={item.image_url}
//                     horns={item.horns}
//                     description={item.description}
//                 />
                        
//                 )
//                     }
                    
//                     else if ( this.state.horn ===  "All"   ){
//                     return (
                        
//                         <Hornbeats
//                         title={item.title}
//                         keyword={item.keyword}
//                         hornIamge={item.image_url}
//                         horns={item.horns}
//                         description={item.description}
//                     />
//                     ) 
//                 }
                    
//             }
//                 )
//             }



//             </div>
//         )
//     }
// }

// export default MForm;
