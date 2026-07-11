import engineeringBook from "../assets/Images/engineering-book.jpg";
import scientificCalculator from "../assets/Images/scientific-calculator.jpg";
import laptopStand from "../assets/Images/laptop-stand.jpg";
import classNotes from "../assets/Images/class-notes.jpg";

const products = [
  {
    id: 1,
    name: "Engineering Mathematics Book",
    price: "₹250",
    category: "Books",
    image: engineeringBook,
    description: "Good condition engineering mathematics book. Used for one semester."
  },
  {
    id: 2,
    name: "Scientific Calculator",
    price: "₹400",
    category: "Calculators",
    image: scientificCalculator,
    description: "Scientific calculator in excellent working condition."
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: "₹350",
    category: "Electronics",
    image: laptopStand,
    description: "Adjustable aluminum laptop stand. Lightweight and durable."
  },
  {
    id: 4,
    name: "Class Notes",
    price: "₹70",
    category: "Notes",
    image: classNotes,
    description: "Complete handwritten notes for semester exams."
  },
];

export default products;