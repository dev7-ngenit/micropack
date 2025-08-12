export default function AddressCard({ address }) {
  const name = `${address?.first_name} ${address?.last_name}`;
  const phone = address?.phone || "No phone number provided";
  const fullAddress = `${address?.address_line1}, ${address?.address_line2 || ""}, ${address?.city}, ${address?.country} - ${address?.postal_code}`;

  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{phone}</p>
      <p>{fullAddress}</p>
    </div>
  );
}
