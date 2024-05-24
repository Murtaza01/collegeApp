import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function SubjectPage() {
  const param = useParams();
  const { t } = useTranslation();
  // param.subject
  return (
    <>
      <h1 className="center2 min-h-screen text-2xl capitalize">
        {t("nothingYet")}
      </h1>
    </>
  );
}
