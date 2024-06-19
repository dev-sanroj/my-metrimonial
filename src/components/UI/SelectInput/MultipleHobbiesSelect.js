import { useState } from "react";
import SelectInput from "./SelectInput";

const MultipleHobbiesSelect = (props) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  console.log("selectedHobbies: ", selectedHobbies);

  const handleHobbyChange = (event) => {
    const newHobby = event.target.value;
    console.log("hobby: ", newHobby);
    if (newHobby && !selectedHobbies.includes(newHobby)) {
      setSelectedHobbies([...selectedHobbies, newHobby]);
    }
  };

  const handleRemoveHobby = (hobby) => {
    setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
  };

  return (
    <div
      className={`${
        props.width && props.width
      } flex flex-col justify-center items-start w-full`}
    >
      <SelectInput
        id={props.id}
        name={props.name}
        label={props.label}
        options={props.options}
        onChange={handleHobbyChange}
        value=""
        select="Select a hobby"
        required={false}
      />
      <div className="flex flex-wrap mt-2">
        {selectedHobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex justify-center items-center font-medium bg-[#FFDFE5] text-[14px] text-[#474445] rounded-lg px-2 h-[30px] m-1"
          >
            <span>{hobby}</span>
            <button
              onClick={() => handleRemoveHobby(hobby)}
              className="ml-2 text-[#666666] font-extrabold text-[18px]"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleHobbiesSelect;
