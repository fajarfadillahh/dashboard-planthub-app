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

export default function PopupCreateCategory() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                  onPress={onClose}
                  className="bg-green-600 font-medium text-white"
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
