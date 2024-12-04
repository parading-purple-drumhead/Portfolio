import me from "../assets/me.jpg";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-gray-50 py-10 text-gray-600">
      <SectionTitle title="About Me" />

      <div className="items-stretch gap-10 px-5 sm:px-10 md:px-20 lg:flex lg:px-32">
        <div
          className="mb-10 flex flex-col items-center gap-5 self-center lg:mb-0 lg:w-1/3"
          data-aos="fade-right"
        >
          <div className="h-64 w-64 overflow-hidden rounded-xl object-cover object-center">
            <img src={me} />
          </div>
          <span className="text-2xl font-bold">That's me!</span>
        </div>
        <div className="flex flex-col gap-10 lg:w-2/3" data-aos="fade-left">
          <p className="text-justify sm:text-lg lg:text-start lg:text-xl lg:leading-loose">
            Hello, I'm Sudhanshu Basuroy, a computer science Master's graduate
            from the University of Illinois, Chicago. With five years of
            experience in full-stack web development, I specialize in creating
            practical and user-friendly websites. Currently focused on
            human-computer interaction (HCI), I'm exploring the possibilities of
            Augmented Reality (AR) and Virtual Reality (VR) systems in my
            academic pursuits.
          </p>
          <p className="text-justify sm:text-lg lg:text-start lg:text-xl lg:leading-loose">
            In the tech space, I enjoy translating ideas into reality, balancing
            both intuitive interfaces and robust backend systems. Beyond coding,
            I'm intrigued by the intersection of technology, design, and human
            psychology. Feel free to check out my portfolio and connect with me
            if you're interested in technology and collaborative digital
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
