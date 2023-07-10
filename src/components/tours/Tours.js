import db from '../../data/data.json'
import Card from "./Card";
import './Tours.css';
function Tours() {
    return (
        <div>
            <div id='tours' className='services'>
                <h2 className='service-header'> Our Tours</h2>
            </div>
            <div className='flex'>
                {db.map((obj, i) => (
                    <Card name={obj.name} img={obj.image} info={obj.info} />
                ))}
            </div>
        </div>
    )
}
export default Tours;