import Title from "@/components/shared/Title/Title";

export default function page() {
  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">
        Privacy Policy
      </Title>

      <section className="mt-10 flex flex-col gap-5 md:mt-16">
        <p>
          This privacy notice explains how Micropack collects and uses personal
          data from visitors to this website. Please read our privacy policy
          carefully to get a clear understanding of how we collect, use, protect
          or otherwise handle your Personally Identifiable Information in
          accordance with our website.
        </p>
        <div class="text-2xl font-semibold">
          What personal information do we collect from the people that visit our
          blog, website or app?
        </div>
        <p>
          When ordering or registering on our site, as appropriate, you may be
          asked to enter your name, mailing address, phone number or other
          details to help you with your experience.
        </p>
        <h2 className="text-2xl font-semibold">
          When do we collect information?
        </h2>
        <p>
          We collect information from you when you register on our site, place
          an order, subscribe to a newsletter or enter information on our site.
        </p>
        <h2 className="text-2xl font-semibold">
          How do we use your information?
        </h2>
        <p>
          We may use the information we collect from you when you register, make
          a purchase, sign up for our newsletter, respond to a survey or
          marketing communication, surf the website, or use certain other site
          features in the following ways:
        </p>
        <ul>
          <li className="list-disc">
            To personalize user&apos;s experience and to allow us to deliver the
            type of content and product offerings in which you are most
            interested.
          </li>
          <li className="list-disc">
            To improve our website in order to better serve you.
          </li>
          <li className="list-disc">
            To allow us to better service you in responding to your customer
            service requests.
          </li>
          <li className="list-disc">To quickly process your transactions.</li>
          <li className="list-disc">
            To send periodic emails regarding your order or other products and
            services.
          </li>
          <li className="list-disc">How do we protect visitor information?</li>
        </ul>
        Your personal information is contained behind secured networks and is
        only accessible by a limited number of persons who have special access
        rights to such systems, and are required to keep the information
        confidential. In addition, all sensitive/credit information you supply
        is encrypted via Secure Socket Layer (SSL) technology. We implement a
        variety of security measures when a user places an order enters,
        submits, or accesses their information to maintain the safety of your
        personal information. All transactions are processed through a gateway
        provider and are not stored or processed on our servers. Do we use
        &apos;cookies&apos;? Yes. Cookies are small files that a site or its
        service provider transfers to your computer&apos;s hard drive through
        your Web browser (if you allow) that enables the site&apos;s or service
        provider&apos;s systems to recognize your browser and capture and
        remember certain information. For instance, we use cookies to help us
        remember and process the items in your shopping cart. They are also used
        to help us understand your preferences based on previous or current site
        activity, which enables us to provide you with improved services. We
        also use cookies to help us compile aggregate data about site traffic
        and site interaction so that we can offer better site experiences and
        tools in the future.
      </section>
    </main>
  );
}
