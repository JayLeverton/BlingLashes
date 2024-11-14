import Carousel from "./Carousel";

function Testimonials() {
  const testimonialsData = [
    {
      pfp: "./assets/johnpfp.png",
      name: "John Smith",
      date: "2024-01-01",
      stars: 5,
      reviewText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsum nesciunt minus harum, tenetur provident?",
    },
    {
      pfp: "./assets/janepfp.png",
      name: "Jane Doe",
      date: "2024-01-01",
      stars: 5,
      reviewText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quasi exercitationem, dolores iure ipsam fuga aperiam quas blanditiis rerum aperiam.",
    },
    {
      pfp: "./assets/placeholderpfp.png",
      name: "Placeholder McDoctorate",
      date: "2024-01-01",
      stars: 5,
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia iste obcaecati nulla sit laboriosam ad animi qui quibusdam nisi maiores laborum id dolorum quas magni asperiores rem impedit, doloremque fugit, maxime quae deserunt voluptate.",
    },
  ];

  return (
    <div className="section">
      <h2>Testimonials</h2>
      <Carousel testimonials={testimonialsData} />
    </div>
  );
}

export default Testimonials;
