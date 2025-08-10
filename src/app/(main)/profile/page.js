import { redirect } from "next/navigation";

export default function ProfilePage({ params }) {
  redirect("/profile/order-history");
}
