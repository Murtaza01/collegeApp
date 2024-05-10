import { useOutletContext } from "react-router-dom";

export default function BooksPage() {
  const value = useOutletContext();
  return (
    <>
      <h1>{value}</h1>
    </>
  );
}
