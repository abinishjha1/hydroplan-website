import React from "react";

export const metadata = {
  title: "About Us | Hydroplan - Hydropower Consultancy",
  description: "Learn about Hydroplan, a leading renewable energy consultancy with a multi-disciplined team of skilled engineers specializing in design, construction and project management of renewable energy projects.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-slate-700 mb-4">
            This is a placeholder for the About Us page. The full content will be implemented in the next version.
          </p>
        </div>
      </section>
    </main>
  );
}
