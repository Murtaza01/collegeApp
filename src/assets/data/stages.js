import firstStage from "./firstStage";
import secondStage from "./secondStage";
// import thirdStage from "./thirdStage";
// import fourthStage from "./fourthStage";
// const book1 = firstStage.books;
// const book2 = secondStage.books;
// const book3 = thirdStage.books;
// const book4 = fourthStage.books;

// const books = book1.concat(book2, book3, book4);

const stagesData = {
  ["first-stage"]: firstStage,
  ["second-stage"]: secondStage,
  ["third-stage"]: 3,
  ["fourth-stage"]: 4,
  ["all-stages"]: {
    // books,
  },
};

export default stagesData;
