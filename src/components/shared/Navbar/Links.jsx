import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function Links() {
  return (
    <Menubar className="ml-3 hidden md:flex">
      <MenubarMenu>
        <MenubarTrigger className='font-bold text-xl'>Computer Accessories </MenubarTrigger>

        <MenubarContent className="mt-3 ml-1">
          <MenubarItem>Computer Mouse</MenubarItem>
          <MenubarItem>Keyboards & Combos</MenubarItem>
          <MenubarItem>Headphones</MenubarItem>
          <MenubarItem>Speakers</MenubarItem>
          <MenubarItem>Webcams</MenubarItem>
          <MenubarItem>USB Hubs</MenubarItem>
          <MenubarItem>Projectors</MenubarItem>
          <MenubarItem>Presentation Clickers</MenubarItem>
          <MenubarItem>Gaming</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='font-bold text-xl'>Cell Phone Accessories</MenubarTrigger>

        <MenubarContent className="mt-3 ml-1">
          <MenubarItem>Charging Blocks</MenubarItem>
          <MenubarItem>USB Cables</MenubarItem>
          <MenubarItem>Power Bank</MenubarItem>
          <MenubarItem>Wallet & Straps</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='font-bold text-xl'>Lifestyle Series</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='font-bold text-xl'>Business Corporation</MenubarTrigger>

        <MenubarContent className="mt-3 ml-1">
          <MenubarItem>About Micropack</MenubarItem>

          <MenubarSub>
            <MenubarSubTrigger>Computer Accessories</MenubarSubTrigger>

            <MenubarSubContent className="ml-2">
              <MenubarItem>Mouse & Keyboards</MenubarItem>
              <MenubarItem>Headphones & Speakers</MenubarItem>
              <MenubarItem>Webcams</MenubarItem>
              <MenubarItem>USB Hubs</MenubarItem>
              <MenubarItem>Projectors & Presenters</MenubarItem>
              <MenubarItem>Desktop Flexi-Mount</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Cell Phone Accessories</MenubarSubTrigger>

            <MenubarSubContent className="ml-2">
              <MenubarItem>USB Cables</MenubarItem>
              <MenubarItem>Charging Blocks</MenubarItem>
              <MenubarItem>Power Banks</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>

          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
