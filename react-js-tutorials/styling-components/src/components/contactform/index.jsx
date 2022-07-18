import "./style.css";
import Wrapper from "./Wrapper";
const ContactForm = () => {
  return (
    <Wrapper>
      <h1>This is a contact form</h1>
      <form action="">
        <input type="text" />
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};
export default ContactForm;
