import AddressForm from "@/components/profile/AddressForm";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";

export default function Page() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Card className="grid h-[8.875rem] max-w-[13rem] cursor-pointer place-items-center px-7 py-5">
            <CardDescription className="space-y-2">
              <FaPlus className="mx-auto block rounded-full bg-[#3EAFE1] p-2 text-3xl text-white" />
              <span className="text-lg">Add a new address</span>
            </CardDescription>
          </Card>
        </DialogTrigger>

        <DialogContent className="px-[35px] sm:max-w-[530px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Add a new address</DialogTitle>
          </DialogHeader>

          <AddressForm />

          <DialogFooter>
            <Button type="submit" className="w-[93.5%] cursor-pointer">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
