/** @format */

import { Link, useLoaderData } from "react-router-dom";

const AllArtCraft = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="my-10">
      <h3 className="text-3xl font-semibold text-center">All Art & craft {data.length}</h3>
      <div>
        <div className="overflow-x-auto max-w-screen-md mx-auto border-2 border-[#b65a18] mt-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th>Process Time</th>
                <th>Rating</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            {data.slice(0,9).map((item,index) => (
              <tbody key={index}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.subcategory}</td>
                  <td>{item.processTime}</td>
                  <td>{item.rate.slice(0,3)}</td>
                  <td>{item.pric}</td>
                  <td  className="text-[#b65a18]"><Link to={`/addArt/${item._id}`}>Details</Link></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtCraft;
