"use client";
import {
  AlertDialog,
  Box,
  Button,
  Flex,
  Grid,
  TextField,
  Text,
} from "@radix-ui/themes";
import CartList from "../components/CartList";
import TotalPurchaseAmount from "../components/TotalPurchaseAmount";

import { useForm } from "react-hook-form";
import BackLink from "../components/BackLink";
import { PropsWithChildren, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { resetCart } from "../redux/slices/cartSlice";
import { useRouter } from "next/navigation";

const ToOrderPage = () => {
  const dispatch = useAppDispatch();

  const [showDialog, setShowDialog] = useState(false);

  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      secondName: "",
      city: "",
      email: "",
      phone: "",
    },
  });

  const submit = () => {
    reset();
    dispatch(resetCart());
    setShowDialog(true);
  };
  const formatPhone = (value: string) => {
    let phoneNumber = value;
    phoneNumber = phoneNumber.replace(/\s/g, "");
    phoneNumber = phoneNumber.replace(/[A-Za-zА-Яа-я]/g, "");

    const firstPart = phoneNumber.slice(0, 2);
    const secondPart = phoneNumber.slice(2, 5);
    const thirdPart = phoneNumber.slice(5, 9);

    if (thirdPart.length > 0) {
      phoneNumber = `${firstPart} ${secondPart} ${thirdPart}`;
    } else if (secondPart.length > 0) {
      phoneNumber = `${firstPart} ${secondPart}`;
    } else phoneNumber = `${firstPart}`;

    setValue("phone", phoneNumber);
    trigger("phone");
    return phoneNumber;
  };

  const errorConfig = {
    required: "Поле не може бути пустим",
    minLength: {
      value: 3,
      message: "Мінімум 3 символа",
    },
    maxLength: {
      value: 10,
      message: "Максимум 10 символа",
    },
  };
  const errorEmailConfig = {
    required: "Поле не може бути пустим",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Не правильний email",
    },
  };
  const errorPhoneConfig = {
    required: "Поле не може бути пустим",
    minLength: {
      value: 11,
      message: "Мінімум 11 символів",
    },
    maxLength: {
      value: 11,
      message: "Максимум 11 символів",
    },
  };

  return (
    <>
      <Box mb={"6"} className="block md:hidden">
        <BackLink />
      </Box>
      <Grid columns={"5"} gap={"7"}>
        <Box className="col-span-5 order-last md:order-none md:col-span-3 ">
          <Box mb={"6"} className="hidden md:block">
            <BackLink />
          </Box>

          <form onSubmit={handleSubmit(submit)}>
            <Flex direction={"column"}>
              {/* ////////////////////////////////////////////////////////////// */}

              <InputContainer name="firstName" errors={errors}>
                <TextField.Input
                  {...register("firstName", errorConfig)}
                  size={"3"}
                  placeholder="Ім'я"
                />
              </InputContainer>
              {/* ////////////////////////////////////////////////////////////// */}

              <InputContainer name="secondName" errors={errors}>
                <TextField.Input
                  {...register("secondName", errorConfig)}
                  size={"3"}
                  placeholder="Прізвище"
                />
              </InputContainer>
              {/* ////////////////////////////////////////////////////////////// */}

              <InputContainer name="city" errors={errors}>
                <TextField.Input
                  {...register("city", errorConfig)}
                  size={"3"}
                  placeholder="Населений пункт"
                />
              </InputContainer>
              {/* ////////////////////////////////////////////////////////////// */}

              <InputContainer name="email" errors={errors}>
                <TextField.Input
                  {...register("email", errorEmailConfig)}
                  size={"3"}
                  placeholder="email"
                />
              </InputContainer>
              {/* ////////////////////////////////////////////////////////////// */}

              <InputContainer name="phone" errors={errors}>
                <Text className="absolute  z-10 top-2 left-3">+380</Text>
                <TextField.Input
                  {...register("phone", errorPhoneConfig)}
                  name="phone"
                  placeholder="00 000 0000"
                  onChange={(event) => {
                    const { value } = event.target;
                    event.target.value = formatPhone(value);
                  }}
                  style={{
                    paddingLeft: "45px",
                  }}
                  size={"3"}
                  type="tel"
                  inputMode="numeric"
                  autoComplete="cc-numeric"
                />
              </InputContainer>

              <Button
                className="cursor-pointer"
                type="submit"
                size={"3"}
                disabled={!isValid}
              >
                Відправити
              </Button>
            </Flex>
          </form>
        </Box>

        <Flex
          gap={"3"}
          direction={"column"}
          className="col-span-5 md:col-span-2"
        >
          <TotalPurchaseAmount />
          <CartList isMutable={false} />
        </Flex>
      </Grid>

      <DialogSuccess
        closeDialog={() => setShowDialog(true)}
        showDialog={showDialog}
      />
    </>
  );
};

interface InputContainerProps extends PropsWithChildren {
  errors: any;
  name: string;
}
const InputContainer = ({ children, errors, name }: InputContainerProps) => {
  return (
    <div className="relative w-ful mb-5 ">
      {errors?.[name] && (
        <p className="absolute bottom-full left-3 leading-5 text-red-400 text-xs ">
          {errors[name].message}
        </p>
      )}
      {children}
    </div>
  );
};

const DialogSuccess = ({
  showDialog,
  closeDialog,
}: {
  showDialog: boolean;
  closeDialog: () => void;
}) => {
  const router = useRouter();

  return (
    <AlertDialog.Root open={showDialog}>
      <AlertDialog.Content style={{ maxWidth: 350 }}>
        <AlertDialog.Title size={"6"}>
          Ваше замовлення успішно відправлене!
        </AlertDialog.Title>

        <Flex gap={"4"} mt={"4"}>
          <AlertDialog.Cancel>
            <Button
              onClick={() => {
                closeDialog();
                router.push("/");
              }}
              className="w-full cursor-pointer"
              size={"3"}
              color="green"
            >
              На головну
            </Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default ToOrderPage;
