import React, { Component } from 'react';
import ProductsData from "../Data/ProductsData.json";
import Header  from "./Header";

class Gifts extends Component {  
//let newProduct = ProductsData.filter(e=> e.category == {this.props.categoryType});
  render() { 
    const filterby=this.props.filterBy;
    const rangefilter=this.props.rangeFilter;
    const typefilter=this.props.typeFilter;
let commentNodes=[];
  //commentNodes = ProductsData.filter(e=> e.category == this.props.filterBy);
  
if(filterby==="All"&&typefilter==="All"&&rangefilter===1000.00){
  commentNodes=ProductsData;
}else if(filterby!=="All"&&typefilter==="All"&&rangefilter===1000.00){
  commentNodes = ProductsData.filter(e=> e.category == filterby);
}
else if(filterby==="All"&&typefilter!=="All"&&rangefilter===1000.00){
  commentNodes = ProductsData.filter(e=> e.to == typefilter);
}
else if(filterby==="All"&&typefilter==="All"&&rangefilter<1000.00){
  commentNodes = ProductsData.filter(e=> e.rangePoint <= rangefilter);
}//check multi conditions
else if(filterby!=="All"&&typefilter==="All"&&rangefilter<1000.00){
  commentNodes= [];
   ProductsData.forEach(e => {
    if(e.category === filterby && e.rangePoint <= rangefilter){
      commentNodes.push(e);
    }
  });
}
else if(filterby!=="All"&&typefilter!=="All"&&rangefilter<1000.00){
  commentNodes= [];
   ProductsData.forEach(e => {
    if(e.category === filterby && e.rangePoint <= rangefilter && e.to === typefilter){
      commentNodes.push(e);
    }
  });
}
else if(filterby==="All"&&typefilter!=="All"&&rangefilter<1000.00){
  commentNodes= [];
  ProductsData.forEach(e => {
   if(e.to === typefilter && e.rangePoint <= rangefilter){
     commentNodes.push(e);
   }
 });
}

// else{
//   commentNodes=ProductsData.filter((temp)=>{
//     return temp.category===filterby&&temp.price<rangefilter&&temp.to===typefilter;
//   });
// }

    return ( 
      commentNodes.map((product) => {
            return (
                    <div className="products">
                    <img src={`/images/${product.img ? product.img : "noimage.png" }`} alt="image" className="img-responsive" />
                    <h3>{product.name}</h3>
                    <p>{product.img}</p>
                    <p className="price">${product.price}</p>
                    <p className="offerprice">${product.offerPrice}</p>
                    <span className="vendor">Amazon</span>
                    </div>
            );
        })
     );
  }
}
 
export default Gifts;