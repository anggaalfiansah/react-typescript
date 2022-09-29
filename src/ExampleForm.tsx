import { useForm, SubmitHandler } from "react-hook-form";

interface IForm {
  email: string;
  name: string;
}

const ExampleForm = () => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit: SubmitHandler<IForm> = (value) => {
    console.log(value);
  };
  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-row justify-content-between align-items-center border p-2">
          <div style={{ width: "5rem" }}>Email</div>
          <input className="form-control" {...register("email", { required: true })} type="email" placeholder="your@example.com" />
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center border p-2">
          <div style={{ width: "5rem" }}>Email</div>
          <input className="form-control" {...register("name", { required: true })} type="text" placeholder="udin gamboet" />
        </div>

        <button onClick={handleSubmit(onSubmit)} type="submit">
          submit
        </button>
        <button onClick={() => reset()} type="submit">
          reset
        </button>
      </form>
    </div>
  );
};

export default ExampleForm;
