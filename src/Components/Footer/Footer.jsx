import React from "react";
import FooterObj from "../../Objects/FooterObj";
import '../../styles/footer.scss'
function Footer() {
    return (
        <footer className="footer">
            <div className="footer--options">
                {FooterObj.map((option) => (
                    (!option.isset)?(<div className="footer--options--option">
                        <h4>{option.name}</h4>
                        <p>{option.matter}</p>
                    </div>):(<div className="footer--options--option">
                        <h4>{option.name}</h4>
                        <ul>{option.items.map((item)=>(
                            <li>{item}</li>
                        ))
                        }</ul>
                    </div>)
                ))}
                
            </div>

        </footer>
    )
}
export default Footer