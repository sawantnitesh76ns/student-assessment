import { Component } from "react";
import './compiler.css'
import {form} from 'react-bootstrap/tex'


class compiler extends Component{
    constructor() {
        super();
        this.state = {
          textAreaValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({ textAreaValue: event.target.value });
      }
    
      render() {
        return (
           
          <div className="codeText">
              <label className="textLabel" >Enter value : </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={this.state.textAreaValue}
                    onChange={this.handleChange}
                    rows="100"
                    cols="100"
                />
          </div>

        );
      }
    
} 

export default compiler