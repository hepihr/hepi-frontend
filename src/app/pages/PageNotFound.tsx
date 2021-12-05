import { Button } from "@mantine/core";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Halaman Tidak Ditemukan</title>
      </Helmet>
      <>
        <h1>Halaman Tidak Ditemukan</h1>
        <Button component={Link} to="/" className="btn btn-primary">
          Kembali Ke Halaman Utama
        </Button>
      </>
    </>
  );
};

export default PageNotFound;
