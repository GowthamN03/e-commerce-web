import Input from "../../Components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={45000}
          title="$30,000 - 50,000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={65000}
          title="$50,000 - 80,000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={900000}
          title="$80000 - 100000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={130000}
          title="$1,00,000 $1,50,000"
          name="test2"
        />

<Input
          handleChange={handleChange}
          value={155000}
          title="$Over $1,50,000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;