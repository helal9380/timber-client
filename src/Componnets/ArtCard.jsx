/** @format */
import PropTypes from 'prop-types';
import Card from "./Card";

const ArtCard = ({ artCard }) => {
  console.log(artCard);
  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-4xl mb-5 font-semibold">
          <span className='text-[#b65a18]'>Handcrafted</span> Wooden Coasters Set
        </h2>
        <p className="md:w-4/6 mx-auto">
          Elevate your table settings with our exquisite set of handcrafted
          wooden coasters from TimberGem.com. Each coaster is meticulously
          crafted from sustainably sourced timber, showcasing natural wood
          grains and knots for a touch of rustic charm
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {artCard?.slice(3,9).map((item) => (
          <Card key={item._id} cards={item}></Card>
        ))}
      </div>
    </div>
  );
};
ArtCard.propTypes = {
    artCard: PropTypes.array,
}
export default ArtCard;
