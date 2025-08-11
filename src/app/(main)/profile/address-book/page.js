import AddressCard from "@/components/profile/AddressBook/AddressCard";
import AddressForm from "@/components/profile/AddressBook/AddressForm";
import { Card, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { currentUser } from "@clerk/nextjs/server";
import { FaPlus } from "react-icons/fa6";

export default async function Page() {
  const user = await currentUser();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/user/delivery-addresses?user_id=${user?.id}`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();

  console.log(data);

  return (
    <Dialog>
      <section className="grid grid-cols-4 gap-4 p-4">
        <AddressCard />

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
          </DialogContent>
        </form>
      </section>
    </Dialog>
  );
}
