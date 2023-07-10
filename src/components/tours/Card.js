import './Card.css';
function Card({ img, name, info }) {
    return (
        <div className="card">
            <img src={img} alt={name} className="card-img" />
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <hr></hr>
                <div className='card-info'>
                    <div>{info.substr(0,200) + ' .......'}</div>
                </div>
                <div className='card-footer'>
                    <button className='card-button'>Read More</button>
                </div>
            </div>
        </div>)
};

export default Card;