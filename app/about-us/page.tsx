"use client";

import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      <section className="mb-10">
        <p className="text-lg mb-4">
          Welcome to <strong>Our Restaurant</strong>, where passion for culinary
          excellence meets exceptional hospitality. We are a team of food
          enthusiasts committed to bringing you a delightful dining experience
          in the heart of [City Name]. With a focus on high-quality ingredients,
          innovative recipes, and a warm ambiance, our goal is to create
          memorable moments for every guest who steps through our doors.
        </p>

        <p className="text-lg mb-4">
          Since our establishment in [Year], we have been dedicated to crafting
          dishes that celebrate the flavors of both traditional and contemporary
          cuisines. Our team of experienced chefs takes pride in preparing
          delicious meals using locally sourced and sustainable ingredients.
          Whether you`&apos;`re here for a quick bite or a special celebration,
          we aim to make every meal extraordinary.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At <strong>Our Restaurant</strong>, our mission is to provide a dining
          experience that blends great taste with an inviting atmosphere. We
          believe that food is more than just sustenance; it`&apos;`s a way to
          bring people together. Whether you`&apos;`re dining with family,
          friends, or colleagues, we strive to make each visit a joyous occasion
          filled with delicious flavors and unforgettable memories.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc ml-6 text-lg">
          <li className="mb-2">
            <strong>Quality:</strong> We are committed to using the freshest and
            finest ingredients to ensure every dish is of the highest standard.
          </li>
          <li className="mb-2">
            <strong>Customer Satisfaction:</strong> Our customers are at the
            heart of everything we do. We go above and beyond to make sure you
            have an exceptional dining experience.
          </li>
          <li className="mb-2">
            <strong>Innovation:</strong> Our chefs are always experimenting with
            new flavors and techniques to keep our menu exciting and fresh.
          </li>
          <li className="mb-2">
            <strong>Sustainability:</strong> We believe in responsible sourcing
            and strive to minimize our environmental footprint through ethical
            food practices.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg mb-4">
          Our talented team of chefs, servers, and managers work tirelessly to
          ensure that your dining experience is nothing short of spectacular.
          With years of expertise in the restaurant industry, each member of our
          team brings passion, dedication, and a unique touch to everything we
          do.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
        <p className="text-lg mb-4">
          Come and experience the best of what <strong>Our Restaurant</strong>
          has to offer! We are located at [Restaurant Address], in the heart of
          [City Name]. Whether you`&apos;`re in the mood for a casual lunch, a
          cozy dinner, or a special event, we`&apos;`re here to serve you with
          warm hospitality and mouth-watering dishes.
        </p>
        <p className="text-lg">
          For reservations or inquiries, feel free to contact us at:
        </p>
        <ul className="ml-6 mt-2 text-lg">
          <li>
            <strong>Email:</strong>
            <a href="mailto:info@foodking.net" className="text-blue-600">
              info@foodking.net
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +8802984757291
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
