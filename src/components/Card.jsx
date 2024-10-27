export default function Card(props) {

    let badgeText
    if(props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    }
    else {
        badgeText = props.openSpots
    }

    return (
        <div className="card--wrapper">
            <div className="card--image" style={{
                backgroundImage: `url(${props.coverImg})`,
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center',
            }}>
                <div>
                    <button>{badgeText}</button>
                </div>
            </div>
            <div className="card--content">
                <p><i className="fa-regular fa-star">{props.rating}</i> ({props.reviewCount}) {props.location}</p>
                <p>{props.title}</p>
                <p><span className="bold" >From ${props.price}</span>/person</p>
            </div>
        </div>
    )
}