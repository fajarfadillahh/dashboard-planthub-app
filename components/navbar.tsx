import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { SignOut } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="bg-white px-6">
      <div className="flex h-20 items-center justify-end">
        <Dropdown>
          <DropdownTrigger>
            <div className="inline-flex items-center gap-2 hover:cursor-pointer">
              <Avatar
                isBordered
                size="sm"
                color="default"
                src="/assets/img/avatar.svg"
              />
              <div className="-space-y-1">
                <h6 className="mb-1 text-sm font-bold text-default-900">
                  Admin
                </h6>
                <p className="text-[12px] font-medium text-default-600">
                  PLANTHUB APP
                </p>
              </div>
            </div>
          </DropdownTrigger>

          <DropdownMenu aria-label="profile actions">
            <DropdownSection
              aria-label="danger zone section"
              title="Anda Yakin?"
            >
              <DropdownItem
                key="logout"
                color="danger"
                startContent={<SignOut weight="bold" size={18} />}
                onClick={() => {
                  if (confirm("apakah anda yakin?")) {
                    window.location.href = "/";
                  }
                }}
                className="font-bold text-danger-600"
              >
                Keluar
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
