interface Course {
  id: number;
  title: string;
  price?: number;
};

// note: ts errors can only be seen when running build, not in Vue3 hmr
const myCourse1: Course = { id: 0 }; // syntax error: missing property

const myCourse2: Course = {
  id: 1,
  title: "Hardcore Vue3 Lesson #0",
  price: "FREE" // type error
};

console.log(myCourse1.authorName); // syntax error: nonexistence
