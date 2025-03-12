import { motion } from "framer-motion";
import Card from "./Card";

const CardStack = ({ y }) => {
  return (
    <div className="cardStackContainer">
      <motion.ul style={{ y }} className="cardStack">
        <li>
          <Card
            title="Benefits"
            heading="The Many Benefits of Releaf® Products"
            text="For the planet, and for us. All of the good, none of the bad."
          />
        </li>
        <li>
          <Card
            title="Applications"
            heading="Releaf®: Enhancing Everyday Essentials"
            text="Discover how releaf® plastics are already making their way into your favorite products, from bottles to clothing. And stay tuned to see where they’ll be used next!"
          />
        </li>
      </motion.ul>
    </div>
  );
};

export default CardStack;
