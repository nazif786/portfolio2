import React from "react";

const Footer = () => {
  return (
    <section className="w-full margin-auto flex flex-col items-center justify-center bg-foreground text-background/30 py-5">
      <small>
        <p>&copy;2024 Nazifullah.</p>
      </small>
      <p className="text-sm">
        <span className="font-bold">About this Website:</span> built with React
        and Next.js(App Router and Server Actions), Typescipt, Tailwind CSS,
        ShandCN, React-Email & Resend, Versel Hosing.
      </p>
    </section>
  );
};

export default Footer;
