import { Metadata } from "next";
import Head from "next/head";
import React from "react";

interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO = ({ title, description, ogImage, noindex }: Props) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {noindex && <meta name="robots" content="noindex" />}
    </Head>
  );
};

export default SEO;
