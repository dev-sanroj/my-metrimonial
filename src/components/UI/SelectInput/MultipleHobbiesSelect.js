import { useState } from "react";
import SelectInput from "./SelectInput";

const MultipleHobbiesSelect = ({ onChange, value, ...props }) => {
  const [selectedHobbies, setSelectedHobbies] = useState(value || []);

  const handleHobbyChange = (event) => {
    const newHobby = event.target.value;
    if (newHobby && !selectedHobbies.includes(newHobby)) {
      const updatedHobbies = [...selectedHobbies, newHobby];
      setSelectedHobbies(updatedHobbies);
      onChange(updatedHobbies); // Lift state up to parent component
    }
  };

  const handleRemoveHobby = (hobby) => {
    const updatedHobbies = selectedHobbies.filter((h) => h !== hobby);
    setSelectedHobbies(updatedHobbies);
    onChange(updatedHobbies); // Lift state up to parent component
  };
  console.log(props.error);

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
        value={value}
        select="Select a hobby"
        required={false}
        error={props.error}
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
