export default function AddressCard({ address }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <h3 className="text-xl font-semibold">{address?.first_name}</h3>
      <p>{address?.phone}</p>
      <p>{address?.first_name}</p>
    </div>
  );
}
