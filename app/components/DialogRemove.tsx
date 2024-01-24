"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

const DialogRemove = ({ handleDelete }: { handleDelete: () => void }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button size={"3"} color="red">
          Прибрати з кошика
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Прибрати з кошика</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Ви точно впевнені що хочете прибрати цей товар з кошика?
        </AlertDialog.Description>

        <Flex gap="3" mt="4">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              залишити
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={handleDelete}>
              прибрати
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DialogRemove;
