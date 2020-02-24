
import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Title from '../component/title';
import {connect} from 'react-redux'
import * as catListActions from '../store/actions/catListActions'


class CatList extends Component {

    constructor(props){
    super(props);
    this.changeTitle = this.changeTitle.bind(this);

    }
    componentDidMount () {

        this.props.onGettingCats();
        /* axios.get( 'http://localhost:8080/cats',{
              headers: { "x-api-key": 'b385d5a8-403b-486f-948b-0bfa3730ed74' }
              } )
            .then( response => {
                console.log(response)
                const catData = response.data;
                this.setState({cats:catData});
                
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            }); */
    }

    changeTitle = (value)=>{
       //this.setState({title:value})
    }
    render() {
       console.log(this.props)
        const myStyleList = {
            listStyle: "none",
            
          };

          const myStyle = {
            padding: "10px",
            float:'left',
            height: "280px",
            width: "200px",
            borderRadius: "10px"
            
          };

        return (
            <div>
       {/*  <h3>{this.state.title}</h3> */}
        <ul style={myStyleList}>
            { this.props.cats.map((cat,i) => //this.state.cats
            <li key= {i} >
                <div style={myStyle} >
                <Link to={"/cat/"+cat._id}>   
                <h3>{cat.name}</h3>
                </Link>
                {cat.description}
                </div>
                </li>
            )}
         </ul>
         <br></br>
         {/* <Title title={this.state.title} changedTitle={this.changeTitle}/> */}
        </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log(state)
    return{
        //props
        cats:state.catList.cats,
       // title:state.title
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGettingCats: () => dispatch(catListActions.getCats())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CatList);