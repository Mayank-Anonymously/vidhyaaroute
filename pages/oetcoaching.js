import BreadcrumbBanner from "@/components/BreadCrumbBanner";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/business/Sidebar";
import ContentPage from "@/components/oet/ContentPage";
import Footer from "@/components/ui/Footer";
import React from "react";

const OETCoaching = () => {
  return (
    <>
      <Navbar />
      <BreadcrumbBanner title="OET Coaching" />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          {/* <Sidebar /> */}
          <ContentPage />
        </div>
       
      </div>
      <Footer/>
    </>
  );
};

export default OETCoaching;
