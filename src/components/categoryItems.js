import React, { Component } from 'react';

class CategoryItems extends Component{
    render(){
        return(
            <li className="Categories">
                <strong>{this.props.category.name}</strong>
            </li>

        );
    }
}

export default CategoryItems;
