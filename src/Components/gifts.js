import React, { Component } from 'react';
import ProductsData from "../Data/ProductsData.json";
import Header  from "./Header";

let pageIndex=0;
let finalData=[];
let data = [];
class Gifts extends Component {  
//let newProduct = ProductsData.filter(e=> e.category == {this.props.categoryType});
constructor(props){
  super(props)
  this.onloadfun();
  this.handleNext=this.handleNext.bind(this);
  this.handlePrev=this.handlePrev.bind(this);
this.state={
  data:[]
}
}

onloadfun(){
  const filterby=this.props.filterBy;
  const rangefilter=this.props.rangeFilter;
  const typefilter=this.props.typeFilter;

//finalData = ProductsData.filter(e=> e.category == this.props.filterBy);

if(filterby==="All"&&typefilter==="All"&&rangefilter===1000.00){
finalData=ProductsData;
}else if(filterby!=="All"&&typefilter==="All"&&rangefilter===1000.00){
finalData = ProductsData.filter(e=> e.category == filterby);
}
else if(filterby==="All"&&typefilter!=="All"&&rangefilter===1000.00){
finalData = ProductsData.filter(e=> e.to == typefilter);
}
else if(filterby==="All"&&typefilter==="All"&&rangefilter<1000.00){
finalData = ProductsData.filter(e=> e.rangePoint <= rangefilter);
}//check multi conditions
else if(filterby!=="All"&&typefilter==="All"&&rangefilter<1000.00){
finalData= [];
 ProductsData.forEach(e => {
  if(e.category === filterby && e.rangePoint <= rangefilter){
    finalData.push(e);
  }
});
}
else if(filterby!=="All"&&typefilter!=="All"&&rangefilter<1000.00){
finalData= [];
 ProductsData.forEach(e => {
  if(e.category === filterby && e.rangePoint <= rangefilter && e.to === typefilter){
    finalData.push(e);
  }
});
}
else if(filterby==="All"&&typefilter!=="All"&&rangefilter<1000.00){
finalData= [];
ProductsData.forEach(e => {
 if(e.to === typefilter && e.rangePoint <= rangefilter){
   finalData.push(e);
 }
});
}

var chunksize = 10;
var chunks = [];
finalData.forEach((item)=>{
if(!chunks.length || chunks[chunks.length-1].length == chunksize)
chunks.push([]);

chunks[chunks.length-1].push(item);
});

finalData = chunks

data = finalData[pageIndex]
return finalData;

}
 handlePrev(e){
   if(pageIndex > 0){
    pageIndex=pageIndex-1;
    var filtered=this.onloadfun();
  this.setState({data : filtered[pageIndex]})
   }
}
 handleNext(e){
  if(pageIndex < finalData.length-1){
    pageIndex=pageIndex+1;
    var filtered=this.onloadfun();
  this.setState({data : filtered[pageIndex]})
   }

}
  render() { 
  
    return (    
      <div>
        <div className="prev" onClick={this.handlePrev} ><img src={require('../images/prev.png')} className="img-fluid" alt="previous" /></div>
      {
        data.map((item, index) => {
                        return (                          
                          <div className="products " key={item.data} id={index}>
                          <img src={`${item.img ? item.img : "noimage.png" }`} alt="image" className="img-responsive" />
                          <h3>{item.name}</h3>
                          <p className="price">${item.price}</p>
                          <p className="offerprice">${item.offerPrice}</p>
                          <span className="vendor">Amazon</span>
                          </div>
                        )
                   
        })
      }
        <div className="next" onClick={this.handleNext} > <img src={require('../images/next.png')} className="img-fluid" alt="next" /></div>

      </div>
     );
  }
}
 
export default (Gifts);