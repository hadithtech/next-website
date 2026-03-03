import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center container">
      <div className="flex flex-row mb-10 gap-4">
        <div className="flex flex-col items-start justify-center flex-1">
          <h1 className="text-3xl font-bold">Our Mission</h1>
          <p>
            Hadith Tech is a technology podcast dedicated to bringing insightful conversations with industry leaders,
            developers, and innovators. We explore the latest trends in software development, artificial intelligence,
            and technology innovation. Our mission is to create a platform where tech enthusiasts can learn from
            experienced professionals and stay updated with the rapidly evolving tech landscape. Through authentic
            conversations, we aim to inspire the next generation of technologists and foster a community of continuous
            learning and growth.
          </p>
        </div>
        <div className=" border flex-1 h-[500px] rounded-3xl"></div>
      </div>
      <div className="flex flex-row-reverse mb-10 gap-4">
        <div className="flex flex-col items-start justify-center flex-1">
          <h1 className="text-3xl font-bold">What We Cover</h1>
          <p>
            Our podcast episodes feature deep dives into various technology topics including open source development,
            developer relations, cognitive science, machine learning, and artificial intelligence. We bring together
            diverse perspectives from researchers, engineers, and entrepreneurs who are shaping the future of technology.
            Each episode is carefully crafted to provide value through authentic discussions, practical insights, and
            forward-thinking ideas that challenge conventional wisdom and inspire innovation.
          </p>
        </div>
        <div className=" border flex-1 h-[500px] rounded-3xl"></div>
      </div>
      <div className="flex flex-row mb-10 gap-4">
        <div className="flex flex-col items-start justify-center flex-1">
          <h1 className="text-3xl font-bold">Join Our Community</h1>
          <p>
            Whether you're a seasoned developer, a tech enthusiast, or someone curious about the future of technology,
            Hadith Tech has something for you. Subscribe to stay updated with our latest episodes and join a growing
            community of listeners who are passionate about technology and innovation. Connect with us to share your
            thoughts, suggest topics, or recommend guests you'd like to hear from in future episodes.
            consequatur repellat odit necessitatibus. Et necessitatibus facilis
            eius ab provident vitae, eos itaque distinctio consequuntur ea error
            quibusdam iure. Earum perspiciatis quae aspernatur accusamus ipsa.
            Voluptatum unde vitae praesentium in consectetur aliquam totam
            maiores! Aliquam id ex cupiditate sint, vel quo voluptates nam
            ratione facilis amet, dolorem deserunt dolores! Porro ullam
            voluptatem quasi in molestias nemo provident vitae autem vel ab
            itaque, quisquam pariatur.
          </p>
        </div>
        <div className=" border flex-1 rounded-3xl h-[750px]"></div>
      </div>
    </section>
  );
};

export default About;
