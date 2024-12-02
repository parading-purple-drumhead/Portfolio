const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1
      className="section-title"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      {title}
      <hr
        className="mx-auto mt-5 w-20 border-2 border-gray-600"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="400"
      />
    </h1>
  );
};

export default SectionTitle;
