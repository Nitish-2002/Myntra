export default function Card({each}){
    return (
        <div className="Card">
            <div className="Card--img">
                <img src={each.img} alt="" />
            </div>
            <div className="Card--info">
                <h3 className="Card--info--heading">{each.heading}</h3>
                <h4 className="Card--info--matter">{each.matter}</h4>
                <div className="Card--product">
                    <span>
                <span className="Card--product--price">{each.price}</span>
                <span className="Card--product--strick">{each.strick}</span>
                <span className="Card--product--discount">{each.discount}</span>
                </span>
                </div>
            </div>
        </div>
    )
} 