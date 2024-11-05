import { libgen } from "../../util/helpers";
import firstStage from "./firstStage";
import secondStage from "./secondStage";
// import thirdStage from "./thirdStage";
// import fourthStage from "./fourthStage";

const book1 = firstStage.books;
const ch1 = firstStage.resources.channels

const book2 = secondStage.books;
const ch2 = secondStage.resources.channels
// const book3 = thirdStage.books;
// const book4 = fourthStage.books;

const books = book1.concat(book2);
const channels = ch1.concat(ch2);

const stagesData = {
  ["first-stage"]: firstStage,
  ["second-stage"]: secondStage,
  ["third-stage"]: 3,
  ["fourth-stage"]: 4,
  ["all-stages"]: {
    books,
    resources: {
      channels,
      sites:[
        libgen
      ]
    }
  },
};

export default stagesData;


