import { FC } from "react";

type InputProps = {
  label: string;
  name: string;
  register: any;
  rules: object;
};

const InputComponent: FC<InputProps> = (props) => {
  const { label, register, name, rules, ...other } = props;
  return (
    <div className="d-flex flex-row justify-content-between align-items-center border p-2">
      <div style={{ width: "5rem" }}>{label}</div>
      <input className="form-control" {...register(name, rules)} {...other} />
    </div>
  );
};

export default InputComponent;
