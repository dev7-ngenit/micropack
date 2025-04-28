import Title from "@/components/shared/Title/Title";

export default function page() {
  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-[1.4rem] [background-position-y:60%] md:text-4xl md:[background-position-y:70%]">
        Do not sell my personal information
      </Title>

      <section className="mt-10 flex flex-col gap-5 md:mt-16 text-xl">
        <p>
          As described in our Privacy Policy, we collect personal information
          from your interactions with us and our website, including through
          cookies and similar technologies. We may also share this personal
          information with third parties, including advertising partners. We do
          this in order to show you ads on other websites that are more relevant
          to your interests and for other reasons outlined in our privacy
          policy.
        </p>

        <p>
          Sharing of personal information for targeted advertising based on your
          interaction on different websites may be considered "sales",
          "sharing", or "targeted advertising" under certain U.S. state privacy
          laws. Depending on where you live, you may have the right to opt out
          of these activities. If you would like to exercise this opt-out right,
          please follow the instructions below.
        </p>

        <p>
          If you visit our website with the Global Privacy Control opt-out
          preference signal enabled, depending on where you are, we will treat
          this as a request to opt-out of activity that may be considered a
          “sale” or “sharing” of personal information or other uses that may be
          considered targeted advertising for the device and browser you used to
          visit our website.
        </p>

        <strong className="font-bold">To opt out of the "sale" or "sharing" of your personal information collected using cookies and other device-based identifiers as described above, you must be browsing from one of the applicable US states referred to above.</strong>
      </section>
    </main>
  );
}
