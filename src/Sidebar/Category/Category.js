import "./Category.css";
import Input from "../../Components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Curved"
          title="Curved"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Flip"
          title="Flip"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Fold"
          title="Fold"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;