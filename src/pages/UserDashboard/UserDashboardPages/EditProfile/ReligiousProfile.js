import Button from "../../../../components/UI/Button/Button";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const ReligiousProfile = () => {
  return (
    <EditProfileLayout editPage="religious">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center w-[360px]">
            <SelectInput
              id="religion"
              label="Religion"
              optionTitle="Select religion"
              options={[
                "Hindu",
                "Muslim",
                "Christian",
                "Sikh",
                "Buddhist",
                "Jain",
                "Parsi",
                "Jewish",
                "Bahá'í",
                "Other",
                "Agnostic",
                "Atheist",
                "Prefer not to say",
              ]}
              className=" font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center  w-[360px]">
            <SelectInput
              id="mothertongue"
              label="Mother Tongue"
              optionTitle="Select mother tongue"
              options={[
                "Assamese",
                "Bengali",
                "Bodo",
                "Dogri",
                "Gujarati",
                "Hindi",
                "Kannada",
                "Kashmiri",
                "Konkani",
                "Maithili",
                "Malayalam",
                "Manipuri",
                "Marathi",
                "Nepali",
                "Odia",
                "Punjabi",
                "Sanskrit",
                "Santali",
                "Sindhi",
                "Tamil",
                "Telugu",
                "Urdu",
                "Other",
              ]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center  w-[360px]">
            <SelectInput
              id="community"
              label="Community"
              optionTitle="Select community"
              options={[
                "Kayastha",
                "Rajput",
                "Agarwal",
                "Gujarati",
                "Punjabi",
                "Bengali",
                "Patel",
                "Tamil",
                "Malayali",
                "Parsi",
                "Reddy",
                "Maratha",
                "Nair",
                "Jat",
                "Gujjar",
                "Other",
              ]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center  w-[360px]">
            <SelectInput
              id="subcommunity"
              label="Sub-Community"
              optionTitle="Select sub-community"
              options={[
                "Kayastha",
                "Rajput",
                "Agarwal",
                "Gujarati",
                "Punjabi",
                "Bengali",
                "Patel",
                "Tamil",
                "Malayali",
                "Parsi",
                "Reddy",
                "Maratha",
                "Nair",
                "Jat",
                "Gujjar",
                "Other",
              ]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-between items-center w-[360px]">
            <SelectInput
              id="gothra"
              label="Gothra"
              optionTitle="Select gothra"
              options={["Bhardwaj", "Mathur", "Nigam", "Saxena", "Karna"]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center w-[360px]"></div>
        </div>
        <div className="flex justify-start items-center my-5 w-full">
          <Button text="Save" className="font-bold !px-16 !py-6 ml-7" />
        </div>
      </div>
    </EditProfileLayout>
  );
};

export default ReligiousProfile;

/**
 * 
 * const gotraBySubCommunity = {
  Kayastha: [
    "Bhardwaj",
    "Mathur",
    "Nigam",
    "Saxena",
    "Karna"
  ],
  Rajput: [
    "Chauhan",
    "Rathore",
    "Solanki",
    "Shekhawat",
    "Sisodia"
  ],
  Agarwal: [
    "Garg",
    "Goel",
    "Mittal",
    "Jindal",
    "Bansal"
  ],
  Gujarati: [
    "Patel",
    "Shah",
    "Desai",
    "Mehta",
    "Joshi"
  ],
  Punjabi: [
    "Khatri",
    "Arora",
    "Jat",
    "Saini",
    "Ramgarhia"
  ],
  Bengali: [
    "Brahmin",
    "Kayastha",
    "Baidya",
    "Namasudra",
    "Saha"
  ],
  Patel: [
    "Leva",
    "Kadva",
    "Anjana",
    "Koli",
    "Saurashtra"
  ],
  Tamil: [
    "Brahmin",
    "Chettiar",
    "Nadar",
    "Pillai",
    "Mudaliar"
  ],
  Malayali: [
    "Nair",
    "Ezhava",
    "Menon",
    "Nambiar",
    "Pillai"
  ],
  Parsi: [
    "Irani",
    "Tata",
    "Wadia",
    "Patel",
    "Engineer"
  ],
  Reddy: [
    "Balija",
    "Golla",
    "Kapu",
    "Kamma",
    "Velama"
  ],
  Maratha: [
    "Kunbi",
    "Deshmukh",
    "Patil",
    "Jadhav",
    "Bhosale"
  ],
  Nair: [
    "Menon",
    "Pillai",
    "Kurup",
    "Nambiar",
    "Nayanar"
  ],
  Jat: [
    "Malik",
    "Dahiya",
    "Tomar",
    "Punia",
    "Dhillon"
  ],
  Gujjar: [
    "Bagri",
    "Bainla",
    "Bhedoli",
    "Rawat",
    "Poswal"
  ],
  Other: [
    "Other"
  ]
};

 * 
 * const subCommunities = {
  Kayastha: ["Srivastava", "Mathur", "Nigam", "Saxena", "Karna"],
  Rajput: ["Chauhan", "Rathore", "Solanki", "Shekhawat", "Sisodia"],
  Agarwal: ["Garg", "Goel", "Mittal", "Jindal", "Bansal"],
  Gujarati: ["Patel", "Shah", "Desai", "Mehta", "Joshi"],
  Punjabi: ["Khatri", "Arora", "Jat", "Saini", "Ramgarhia"],
  Bengali: ["Brahmin", "Kayastha", "Baidya", "Namasudra", "Saha"],
  Patel: ["Leva", "Kadva", "Anjana", "Koli", "Saurashtra"],
  Tamil: ["Brahmin", "Chettiar", "Nadar", "Pillai", "Mudaliar"],
  Malayali: ["Nair", "Ezhava", "Menon", "Nambiar", "Pillai"],
  Parsi: ["Irani", "Tata", "Wadia", "Patel", "Engineer"],
  Reddy: ["Balija", "Golla", "Kapu", "Kamma", "Velama"],
  Maratha: ["Kunbi", "Deshmukh", "Patil", "Jadhav", "Bhosale"],
  Nair: ["Menon", "Pillai", "Kurup", "Nambiar", "Nayanar"],
  Jat: ["Malik", "Dahiya", "Tomar", "Punia", "Dhillon"],
  Gujjar: ["Bagri", "Bainla", "Bhedoli", "Rawat", "Poswal"],
  Other: ["Other"]
}; */
