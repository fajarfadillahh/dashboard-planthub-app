import { fetcher } from "@/utils/fetcher";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { PlusCircle } from "@phosphor-icons/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { MutatorCallback } from "swr";

type PopupCreateCategoryProps = {
  mutate: MutatorCallback;
};

export default function PopupCreateCategory({
  mutate,
}: PopupCreateCategoryProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data } = useSession();
  const [name, setName] = useState<string>("");

  async function createCategory() {
    if (!name) {
      return alert("Nama tidak boleh kosong");
    }

    try {
      await fetcher({
        url: "/categories",
        method: "POST",
        data: { name },
        token: data?.user.access_token,
      });

      onClose();
      mutate();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button
        onPress={onOpen}
        endContent={<PlusCircle weight="bold" size={18} />}
        className="bg-green-600 font-medium text-white"
      >
        Tambah kategori
      </Button>

      <Modal
        isOpen={isOpen}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b border-dashed border-gray-200">
                Tambah Kategori
              </ModalHeader>

              <ModalBody className="py-6">
                <Input
                  variant="flat"
                  color="default"
                  labelPlacement="outside"
                  label="Kategori"
                  placeholder="Tuliskan kategori..."
                  onChange={(e) => setName(e.target.value)}
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  variant="flat"
                  color="danger"
                  onPress={onClose}
                  className="font-medium"
                >
                  Batal
                </Button>
                <Button
                  className="bg-green-600 font-medium text-white"
                  onClick={createCategory}
                >
                  Tambah Kategori
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
