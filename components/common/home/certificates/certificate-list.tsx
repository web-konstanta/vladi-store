import React from "react";
import CertificateItem from "./certificate-item";
import { CertificateType } from "@/lib/types";

const CertificateList = ({ certificates }: { certificates: CertificateType[] }) => {
  return (
    <div className="container m-auto">
      <div>
        <div className="flex flex-wrap justify-center gap-4 px-4 sm:justify-between sm:gap-6">
          {certificates.map((certificate, index) => (
            <a key={index}>
              <CertificateItem certificate={certificate} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateList;
