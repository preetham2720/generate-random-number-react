import { useState } from "react"

function Generate(){
    const [rannum, setrannum] = useState(0);

    function gen(){
        var num = Math.floor((Math.random()*100)+1)
        setrannum(num)
    }
    return(
        <div className="generator">
            <h1>Random Number <span className="generator_head">Generator</span></h1>
            <p>Click button to generate a random number between 1 to 100</p>
            {
                rannum == 0 ? 
                    <div className="number" style={{"backgroundColor":"#EEF0FF", "color": "gray", "fontSize": "1vw"}}>
                    <h3>No number generated yet</h3>
                    </div>
                :<div className="number" style={{"backgroundColor":"#D1FAE5", "fontSize": "2vw"}}>
                    <h2>{rannum}</h2>
                </div>
            }
            <button className="gen_btn" onClick={gen}><i className="fa-solid fa-arrows-rotate" style={{"color": "white"}}></i> Generate</button>
        </div>
    )
}
export default Generate