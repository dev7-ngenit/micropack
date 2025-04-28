import Title from "@/components/shared/Title/Title";

export default function page() {
  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">
        Terms and Conditions
      </Title>

      <section className="mt-10 flex flex-col gap-5 md:mt-16">
        <div class="text-2xl font-semibold">Introductions</div>
        <p>
          These terms and conditions govern your use of this website, by using
          this website, you accept these terms and conditions in full. If you
          disagree with these terms and conditions or any part of these terms
          and conditions, you must not use this website.
        </p>
        <p>
          You must be at least 18 years of age to use this website. By using
          this website and by agreeing to these terms and conditions you warrant
          and represent that you are at least 18 years of age.
        </p>

        <h2 className="text-2xl font-semibold">License to Use Website</h2>
        <p>
          Unless otherwise stated, Micropack and/or its licensors own the
          intellectual property rights in the website and material on the
          website. Subject to the license below, all these intellectual property
          rights are reserved.
        </p>

        <h2 className="text-2xl font-semibold">You must not:</h2>
        <ul>
          <li className="list-disc">
            Republish material from this website (including republication on
            another website)
          </li>
          <li className="list-disc">
            Sell, rent or sub-license material from the website
          </li>
          <li className="list-disc">
            Show any material from the website in public
          </li>
          <li className="list-disc">
            Reproduce, duplicate, copy or otherwise exploit material on this
            website for a commercial purpose.
          </li>
          <li className="list-disc">
            Edit or otherwise modify any material on the website, or
            redistribute material from this website (except for content
            specifically and expressly made available for redistribution)
          </li>
        </ul>
      </section>
    </main>
  );
}
