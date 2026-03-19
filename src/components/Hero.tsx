import Image from 'next/image';

import classes from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <main>
      <h1 className="text-5xl font-bold">
        Priya Dubey
      </h1>

      <p className="text-xl mt-4">
        Lead Software Engineer
      </p>

      <p>9 years of experience, specializing in building scalable, high-performance applications.</p>


       <section className="py-16">

      <h1 className="text-4xl font-bold mb-6">
        Professional Summary
      </h1>

      <div>
        <p>Passionate about delivering seamless user experiences through optimized performance and efficient code architecture.</p>
        <p>Lead Software Engineer specializing in <b>.NET Core</b>, <b>React</b>, <b>Node.js</b>, and <b>cloud-native</b> architectures on AWS and <b>Azure</b> with 8+ years of experience delivering scalable enterprise applications. Strong background in <b>distributed systems</b>, <b>microservices</b>, <b>system design</b>, API architecture, and performance optimization. Experienced in building high-availability systems, implementing <b>CI/CD pipelines</b>, and deploying production-grade applications on cloud infrastructure. Passionate about building scalable platforms that improve reliability, performance, and user experience.</p>
      </div>

    </section>

    </main>
  );
}