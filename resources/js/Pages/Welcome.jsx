import React from "react";
import Layout from "../Components/Layouts/Layout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Test({ layoutDatas }) {
    return <Layout title={layoutDatas.title} page={layoutDatas.page}></Layout>;
}
