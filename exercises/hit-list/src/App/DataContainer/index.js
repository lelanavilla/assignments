import React, {Component} from "react";
import axios from "axios";
import DataList from './Datalist/..';

const hitListUrl = 'http://api.vschool.io:6543/hitlist.json';
class DataContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            people:[]
           
        
        }
    }


    componentDidMount(){
         axios.get(hitListUrl + "people")
         .then(response => {
             const {results} = response.data;
             this.setState ({
                 people:results
             })
            })
        }
             render(){
              return(
                  <DataList people={this.people} ></DataList>
              )
           }
        }
           export default DataContainer;