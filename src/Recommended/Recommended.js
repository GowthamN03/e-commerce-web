import Button from "../Components/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          
          <Button onClickHandler={handleClick} value="Galaxy Z Series" title="Galaxy Z Series" /> 
          
          <Button onClickHandler={handleClick} value="Galaxy S Series" title="Galaxy S Series" /> 
          
          <Button onClickHandler={handleClick} value="Galaxy FE Series" title="Galaxy FE Series" />

        </div>
      </div>
    </>
  );
};

export default Recommended;