import db from '../../data/data.json'
import Tour from './tour/Tour';
import './Tours.css';
function Tours() {
    return (
        <div>
            <div id='tours' className='services'>
                <h2 className='service-header'> Our Tours</h2>
            </div>
            <div className='flex'>
                {db.map((obj, i) => (
                    <Tour key={i} id={obj.id} name={obj.name} img={obj.image} info={obj.info} />
                ))
                }
            </div>
        </div>
    )
}
export default Tours;