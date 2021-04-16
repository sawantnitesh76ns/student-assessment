import React from 'react';
import { Component } from "react";
import './compiler.css'
import CompileService from "../api/CompilerAPI.js"
import axios from "axios"

// Import Brace and the AceEditor Component

import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/github';
import 'brace/theme/monokai'

export default class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            code:'',
            input:"",
            output:"",
            language:"java"
        }
        
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeOutput = this.onChangeOutput.bind(this);
        this.runCode = this.runCode.bind(this);
    }

    onChangeCode(newValue) {
        this.setState({
            code:newValue
        })
    }

    onChangeInput(newValue) {
        this.setState({
            input:newValue
        })
    }

    onChangeOutput(newValue) {
        this.setState({
            output:newValue
        })
    }

    runCode(){
        // var code=this.state.code
        // var codeToExecute = code.replace(/(\r\n|\n|\r)/gm, "");
        // console.log(codeToExecute)
        // var codeReplaceDoubleQuotes=codeToExecute.replace(/"/g, "'");
        // console.log(codeReplaceDoubleQuotes)
        
        // var input = this.state.input
        // var inputFeild = input.replace(/(\r\n|\n|\r)/gm, "\n");

        // const json= JSON.stringify({"data":codeReplaceDoubleQuotes,"language":this.state.language,"input":inputFeild})
        // console.log(json)

        // CompileService.executeService(json)
        // .then(
        //     response=>{
        //         this.setState({output:response.data})
        //     }
        // )
        

        // console.log(this.state.output)
        var axios = require('axios');
            var data = JSON.stringify({
           "code":`public class program{
                    public static void main(String [] args){
                        System.out.println(5+5+6);
                      }
                    }`,
           "language":"java",
           "input":""
           });

            var config = {
            method: 'post',
            url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Origin':'http://localhost:3000/'

            },
            data : data
            };

            axios(config)
            .then(function (response) {
            console.log(response.data);
            })
            .catch(function (error) {
            console.log(error);
            });

                    



    }

    render() {
        return (
            <>
                <div className="codingArea">
                    <h2 className="codeHeading">Coding Area</h2>
                    <div className="ideEditor">
                    <AceEditor
                        width="100%"
                        mode="java"
                        theme="monokai"
                        onChange={this.onChangeCode}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{
                            $blockScrolling: true
                        }}
                        
                        
                    />
                    <button className="runCodeButton" onClick={this.runCode}>Run</button>

                    </div>
                </div>
                <div className="inputArea">
                    <h2>Input</h2>
                    <div className="inputEditor">
                        <AceEditor
                            width="100%"
                            height="100px"
                            onChange={this.onChangeInput}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{
                                $blockScrolling: true
                            }}
                            
                            
                        />

                    </div>
                    

                    
                </div>

                <div className="outputArea">
                    <h2>Output</h2>
                    <div className="outputEditor">
                        <AceEditor
                            width="100%"
                            height="280px"
                            onChange={this.onChangeOutput}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{
                                $blockScrolling: true
                            }}
                            
                            
                        />

                    </div>

                    
                </div>

                

                
                
            </>
            
        );
    }
}