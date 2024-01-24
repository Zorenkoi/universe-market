import emptyCartImg from "@/public/img/empty-cart.png";
import { Button, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const EmptyCart = ({ closeCart }: { closeCart: () => void }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Flex direction={"column"} align={"center"} gap={"7"}>
      <Text size={"7"}>Кошик пустий</Text>

      <Image src={emptyCartImg} width={200} height={200} alt="empty cart" />

      <Button
        onClick={() => {
          closeCart();
          if (pathName !== "/") router.push("/");
        }}
        size={"3"}
      >
        продовжити покупки
      </Button>
    </Flex>
  );
};

export default EmptyCart;
