import React, {Component} from "react";
import axios from "axios";
import DataList from './DataList';

const hitListUrl = 'http://api.vschool.io:6543/hitlist.json';
class DataContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            people:[]
        }
    }


    componentDidMount(){
         axios.get(hitListUrl)
         .then(response => {
             const results = response.data;
             console.log(response.data)
             this.setState({
                 people:results
             })
             console.log("jugfyh");
            })
        }
             render(){
                 const {people}= this.state;
              return(
                  <DataList {...this.state} ></DataList>
              )
           }
        }
           export default DataContainer;