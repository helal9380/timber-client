/** @format */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Card = ({ cards }) => {
  console.log(cards);
  const {
    _id,
    imgUrl,
    name,
    pric,
    customaize,
    rate,
    processTime,
  } = cards;

  const handleDetails = id => {
    console.log(id)
    fetch(`http://localhost:5000/addArt/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
  }
  return (
    <div className=" p-4 border-2">
        <figure>
          <img
            src={imgUrl}
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className="text-xl font-semibold my-3">{name}</h2>
          <div className='px-4 space-y-2 border-l-2 border-[#ffcc00]'>
          <p><span className='font-semibold'>Customaize :</span>  {customaize}</p>
          <p><span className='font-semibold'>Rating :</span>  {rate}</p>
          <p><span className='font-semibold'>Process Time :</span>  {processTime}</p>
          <p><span className='font-semibold'>Price :</span>  {pric}</p>
          </div>
          <div className=" justify-end my-5">
            <Link onClick={ () => handleDetails(_id)} to={`/addArt/${_id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
  );
};
Card.propTypes = {
    cards: PropTypes.object,
}
export default Card;
