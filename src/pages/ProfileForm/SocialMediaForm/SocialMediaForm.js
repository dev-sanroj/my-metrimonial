import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

const SocialMediaForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onShowProfileCompleteStatus();
  };

  return (
    <form className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Input
            type="text"
            label="WhatsApp"
            placeholder="Enter whatsapp number"
          />
        </div>
        <div className="ml-2">
          <Input
            type="text"
            label="Facebook"
            placeholder="Enter facebook profile link"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Input
            type="text"
            label="Instagram"
            placeholder="Enter instagram profile link"
          />
        </div>
        <div className="ml-2">
          <Input type="text" label="X" placeholder="Enter x profile link" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button
          text="Next"
          className="font-black !px-20"
          onButtonClick={submitHandler}
        />
      </div>
    </form>
  );
};

export default SocialMediaForm;
