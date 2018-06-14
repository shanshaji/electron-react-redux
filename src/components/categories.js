import React, { Component } from 'react';
import CategoryItems from './categoryItems';
class Categories extends Component{
    render(){
        let categoryItems;
        if(this.props.categories){
            categoryItems = this.props.categories.map(category => {
               // console.log(category);
                return(
                    <CategoryItems key={category.id} category={category}/>
                );
            })
        }
        return(
            <div className="Categories">
                {categoryItems}
            </div>

        );
    }
}

export default Categories;