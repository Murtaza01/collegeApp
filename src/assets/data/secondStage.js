import grammar from "../images/books/stage2/practice_grammar.jpg"
import phonetics from "../images/books/stage2/phonetics_and_phonology.jpg"
import reading from "../images/books/stage2/select_reading.jpg"
import drama from "../images/books/stage2/doctor_faustus.jpeg"
import novel from "../images/books/stage2/joseph_andrews.jpg"

const secondStage = {
  books: [
        {
      title: "novel",
      image: novel,
      link:"https://drive.google.com/file/d/11gAogLHlmQRO9Du33ljpnkZfsf_ogmO4/view?usp=drive_link", 
      subject: {
        color: "bg-gradient-to-r from-stone-300  to-stone-500",
        subjectDes: "novel",
      },
    },
    {
      title: "grammar",
      image: grammar,
      link:"https://drive.google.com/file/d/1_Zo6jO7hLr_DE_ZglCaKjxFT3eZ-Cg7d/view?usp=drive_link", 
      subject: {
        color: "bg-gradient-to-r from-green-300  to-green-500",
        subjectDes: "grammar",
      },
    },
    {
      title: "phonetics",
      image: phonetics,
      link:"https://drive.google.com/file/d/1zb2RV4dMpBCqctQHqgBlcot896XcjRyE/view?usp=drive_link", 
      subject: {
        color: "bg-gradient-to-r from-blue-300  to-blue-500",
        subjectDes: "phonetics",
      },
    },
    {
      title: "select reading",
      image: reading,
      link: "https://drive.google.com/file/d/1Rz8WSpwS12PTzHstdiX3581XbFYPRCLD/view?usp=drive_link",
      subject: {
        color: "bg-gradient-to-r from-lime-300  to-lime-500",
        subjectDes: "reading",
      },
    },
    {
      title: "drama",
      image: drama,
      link: "https://drive.google.com/file/d/1JpvDX-7wMu6XYg9-mG2sK8rKUDL787q1/view?usp=drive_link",
      subject: {
        color: "bg-gradient-to-r from-red-300  to-red-500",
        subjectDes: "drama",
      },
    },
 
  ],
};

export default secondStage;
