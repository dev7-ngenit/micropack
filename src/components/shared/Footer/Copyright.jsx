export default async function Copyright() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/site/information`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch site information");
  }

  const { data } = await response.json();

  return (
    <div className="min-w-[280px]">
      <h4 className="mb-4 text-xl text-white">Business Cooperation</h4>

      <div className="text-base">
        {!!data?.address_line_one && (
          <p>
            Address:{" "}
            <span className="text-sm">{`${data?.address_line_one}, ${data?.address_line_two}`}</span>
          </p>
        )}

        {/* <p> */}
        <span>Email: </span>
        <span className="text-sm underline">{data?.support_email}</span>
        {/* </p> */}
      </div>

      <div className="mt-5 flex gap-x-1">
        <img src="/payment-1.png" alt="payment 1" className="h-6 md:h-5" />
        <img src="/payment-2.png" alt="payment 2" className="h-6 md:h-5" />
        <img src="/payment-3.png" alt="payment 3" className="h-6 md:h-5" />
        <img src="/payment-4.png" alt="payment 4" className="h-6 md:h-5" />
        <img src="/payment-5.jpg" alt="payment 5" className="h-6 md:h-5" />
        <img src="/payment-6.jpg" alt="payment 6" className="h-6 md:h-5" />
        <img src="/payment-7.jpg" alt="payment 7" className="h-6 md:h-5" />
      </div>
    </div>
  );
}
