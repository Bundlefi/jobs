import { Pane, TextInputField } from "evergreen-ui";
import { FC } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Headings from "../utilities/headings";
import { TabSwitchAppliedProps } from "../utilities/tab-switch";
import ApplicationCard from "./application-card";

interface Inputs {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

interface IdentityCardProps extends TabSwitchAppliedProps {
  id: string;
}

const IdentityCard: FC<IdentityCardProps> = ({ display = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onValid: SubmitHandler<Inputs> = (data, evt) => {
    console.log(data);
    return;
  };

  const onInvalid: SubmitErrorHandler<Inputs> = (errors, evt) => {
    console.log(errors);
    return;
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <ApplicationCard display={display}>
        <Pane display="flex" flexWrap="wrap">
          <Headings.H2 marginBottom={24}>Contact Information</Headings.H2>
          <TextInputField
            {...register("firstName")}
            required
            label="First Name"
            width="100%"
          />
          <TextInputField
            {...register("lastName")}
            required
            label="Last Name"
            width="100%"
          />
          <TextInputField
            {...register("email")}
            required
            label="Email"
            width="100%"
          />
          <TextInputField
            {...register("phone")}
            required
            label="Phone Number"
            width="100%"
          />
        </Pane>
      </ApplicationCard>

      <input type="submit" />
    </form>
  );
};

export default IdentityCard;
