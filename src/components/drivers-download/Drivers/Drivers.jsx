import Driver from "./Driver";

const drivers = [
  {
    name: "Driver 1",
    size: "1.5GB",
    link: "https://example.com/driver1.zip",
    date: "2022-01-01",
    totalFiles: 10,
  },
  {
    name: "Driver 2",
    size: "2.5GB",
    link: "https://example.com/driver2.zip",
    date: "2022-02-01",
    totalFiles: 15,
  },
  {
    name: "Driver 3",
    size: "3.5GB",
    link: "https://example.com/driver3.zip",
    date: "2022-03-01",
    totalFiles: 20,
  },
  {
    name: "Driver 4",
    size: "4.5GB",
    link: "https://example.com/driver4.zip",
    date: "2022-04-01",
    totalFiles: 25,
  },
  {
    name: "Driver 5",
    size: "5.5GB",
    link: "https://example.com/driver5.zip",
    date: "2022-05-01",
    totalFiles: 30,
  },
];

export default function Drivers() {
  return (
    <section className="mt-6 flex flex-col gap-5 md:mt-10">
      {drivers.map((driver, index) => (
        <Driver key={index} driver={driver} />
      ))}
    </section>
  );
}
