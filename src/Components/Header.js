import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default class Header extends Component{
    constructor (props, context) {
        super(props, context)
        this.state = {
          horizontal: 10,
          vertical: 50,
          tech : 'All',
          categoryType : ''
        }
      }
    
      handleChangeHorizontal = value => {
        this.setState({
          horizontal: value
        },()=>{this.props.rangeSearch(this.state.horizontal)})
        //console.log(value);
      };
    
      handleChange(e){
        this.setState({
          tech: e.target.value
        },()=>{this.props.searchQuerry(this.state.tech)})
        
        
      }
    
      handleClick = (e) => {
        this.setState({
            categoryType: e.currentTarget.title
          },()=>{this.props.typeSearch(this.state.categoryType)})

       console.log('this is:', e.currentTarget.title);
      }

  render() {
    const { horizontal } = this.state
    const horizontalLabels = {
        0: '$0',
        25: '$50',
        50: '$100',
        75: '$500',
        100: '$999'
      }
      const formatkg = value => value + ' $'
    return (
        <div className="header">
           <div className="col-md-3">
           <h1>Christmas Gifts</h1>
           </div>
           <div className="col-md-3 selectCategory">
           <h3>Select Category</h3>
           <select  onChange={this.handleChange.bind(this)}  >
               <option value="All">All</option>
               <option value="Trending">Trending</option>
               <option value="Lifestyle">Lifestyle</option>
               <option value="Home Decor">Home Decor</option>
               <option value="Electronics">Electronics</option>
           </select>
           </div>
           <div className="col-md-3 personalCategory">
                     <div className="category active"  >
						<i className="fa fa-user" aria-hidden="true" onClick={(e) => this.handleClick(e)} title="All"></i>
					</div>
					<div className="category"  >
						<i className="fa fa-male" aria-hidden="true" onClick={(e) => this.handleClick(e)} title="Men"></i>
                        </div>
					<div className="category"  >
						<i className="fa fa-female" aria-hidden="true" onClick={(e) => this.handleClick(e)} title="Women"></i>
                        </div>
					<div className="category"  >
						<i className="fa fa-child" aria-hidden="true" onClick={(e) => this.handleClick(e)} title="Kids"></i>
                        </div>
					<div className="category"  >
						<i className="fa fa-user-circle-o" aria-hidden="true" onClick={(e) => this.handleClick(e)} title="Others"></i>
                        </div>
           </div>
           <div className="col-md-3">
           <div className='rangeSlider'>
           <Slider
          min={0}
          max={100}
          value={horizontal}
          labels={horizontalLabels}
          format={formatkg}
          handleLabel={horizontal}
          onChange={this.handleChangeHorizontal}    />
      </div>
           </div>     
    
    </div>
		);
  }
}
