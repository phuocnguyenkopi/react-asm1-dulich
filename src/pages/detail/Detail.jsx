import React from "react";
import NavBar from "../home/NavBar";
import Formfooter from "../home/formfooter";
import Navfooter from "../home/navfooter";
import DetailPost from "./Detailpost";
import ObjectDetail from "../../data/detail.json";

const Detail = () => {
  const detailData = ObjectDetail;

  return (
    <div>
      <header className="bg-[#003580] py-5">
        <NavBar />
      </header>
      <DetailPost item={detailData} />
      <Formfooter />
      <Navfooter />
    </div>
  );
};

export default Detail;
