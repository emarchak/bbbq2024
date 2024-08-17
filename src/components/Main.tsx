import Form from "./Form";

const eventTime = import.meta.env.VITE_EVENT_TIME;
const eventLocation = import.meta.env.VITE_EVENT_LOCATION;

const Main = () => (
  <>
    <h1 className="pb-6 text-center text-lg font-bold">🫐🍓 BBBQ 2024 🍓🫐</h1>
    <p className="pb-6">
      You are lovingly invited to our first annual <em>Barry BBQ</em> to
      celebrate our beautiful baby boy and welcome you to our new home!
    </p>
    <p className="pb-6">
      We'll have our usual BBQ goodies available, with both veggie and meat
      options. We only ask that you show up with your lovely selves, but if you{" "}
      <em>must</em> bring something, please bring a barbecue or berry treat to
      share!
    </p>
    <p className="pb-6">
      Please let us know if you have additional or new dietary requirements.
      Barry's bedtime is 6pm, so arrive prior to that if you'd like to see him
      in action!
    </p>
    <hr className="pb-6 text-center" />
    <ul className="text-center">
      <li>{eventTime}</li>
      <li>{eventLocation}</li>
    </ul>
    <Form />
  </>
);

export default Main;
