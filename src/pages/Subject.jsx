import { useParams } from "react-router-dom";

export default function SubjectPage() {
  const param = useParams();

  return (
    <>
      <h1 className="center2 min-h-screen  ">{param.subject}</h1>
    </>
  );
}
