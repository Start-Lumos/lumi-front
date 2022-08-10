import { Select } from "../StyleList/Style.List";

const Dropdown = ({ id, name, data=[], onChange, editData }) => {
  return (
    <Select id={id} name={name} onChange={onChange} editData={editData}>
      {data.map(({ value, label }) => {
        return (<option key={value} value={value}>{label}</option>)
      })}
    </Select>
  );
};

export default Dropdown;
