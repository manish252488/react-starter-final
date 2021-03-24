import React from "react";
import "./index.less";
import { useTranslation } from "react-i18next";
const Home = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      onClick={() =>
        i18n.language === "en"
          ? i18n.changeLanguage("ge")
          : i18n.changeLanguage("en")
      }
    >
      {t("home")}
    </div>
  );
};
export default Home;
