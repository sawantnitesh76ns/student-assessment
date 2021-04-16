import axios from "axios"

class CompilerAPI{
    executeService(body){
        return axios.post("https://codexweb.netlify.app/.netlify/functions/enforceCode",{
            headers: { 
            "Access-Control-Allow-Origin": "*"
            }},body)
    }

}

export default new CompilerAPI();