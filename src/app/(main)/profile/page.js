import NoContent from "@/components/shared/NoContent/NoContent";
import { FaReceipt } from "react-icons/fa6";

export default function ProfilePage() {
  return (
    <section>
      <NoContent
        icon={FaReceipt}
        title={"You haven't placed any orders yet."}
      />
    </section>
  );
}
