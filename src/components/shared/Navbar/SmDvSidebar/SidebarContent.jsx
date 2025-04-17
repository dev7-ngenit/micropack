import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SidebarContent() {
  return (
    <Accordion type="single" collapsible className="box-border w-full px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base">
          Computer Accessories
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-y-1 text-slate-600">
          <span>Computer Mouse</span>
          <span>Keyboards & Combos</span>
          <span>Headphones</span>
          <span>Speakers</span>
          <span>Webcams</span>
          <span>USB Hubs</span>
          <span>Projectors</span>
          <span>Presentation Clickers</span>
          <span>Gaming</span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-base">
          Cellphone Accessories
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-y-1 text-slate-600">
          <span>Charging Blocks</span>
          <span>USB Cables</span>
          <span>Power Banks</span>
          <span>Wallets & Straps</span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-base">
          Lifestyle Series
        </AccordionTrigger>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-base">
          Business Cooperation
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-y-1 text-slate-600">
          <span>About Micropack</span>
          <span>Gaming Peripherals</span>
          <span>Antibacterial Series</span>
          <span>Online/Offline UPS</span>
          <span>Support</span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
