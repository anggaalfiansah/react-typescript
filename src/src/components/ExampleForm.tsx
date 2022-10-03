import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import InputComponent from "src/components/InputComponent";
import { saveToLocalStorage } from "src/helper/helper";

type FormProps = {
  handleRefresh: Function;
};

interface IForm {
  email: string;
  name: string;
}

const ExampleForm: FC<FormProps> = (props) => {
  const { handleRefresh } = props;
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit: SubmitHandler<IForm> = (value) => {
    saveToLocalStorage(value);
    handleRefresh();
    reset();
  };
  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent {...{ register: register, name: "email", rules: { required: true }, label: "Email", type: "email", placeholder: "your@example.com" }} />
        <InputComponent {...{ register: register, name: "name", rules: { required: true }, label: "Name", type: "text", placeholder: "Ex. Udin Gamboet" }} />

        <div className="my-2">
          <button className="btn btn-primary mx-2" onClick={handleSubmit(onSubmit)} type="submit">
            SUBMIT
          </button>
          <button className="btn btn-secondary" onClick={() => reset()} type="submit">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExampleForm;
