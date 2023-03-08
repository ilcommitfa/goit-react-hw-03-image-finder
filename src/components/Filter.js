import { Label } from "./Filter.styled";
import { BiSearchAlt } from "react-icons/bi";

const Filter = ({ value, onChange }) => {
  return (
    <Label><BiSearchAlt/>
      Find contacts by name:
      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;
