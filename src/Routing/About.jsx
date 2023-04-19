import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <h1>About</h1>
      <button onClick={goToContact}>Go to contact page</button>
      <button onClick={goBack}>go Back</button>
    </>
  );
};

export default About;
