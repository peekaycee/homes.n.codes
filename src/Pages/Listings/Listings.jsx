import { Cars, Flats, Houses, Lands, Others, Outlets, Shops, ViewProperty } from "../../Components/common/index.common";

const Listings = () => {
  return (
    <div>
        Listings of All Properties
        {/* conditionally render this pages  below... */}
        <Lands />
        <Houses/>
        <Flats />
        <Cars />
        <Shops />
        <Others />
        <Outlets />
        <ViewProperty />
    </div>
    );
};

export default Listings;
