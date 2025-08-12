import React from "react";
import CertificateItem from "./certificate-item";
import { CertificateType } from "@/lib/types";

const CertificateList = ({ certificates }: { certificates: CertificateType[] }) => {
  return (
    <div className="container m-auto">
      <div className="overflow-x-hidden">
        <div className="embla__container flex gap-4 pr-4 pl-4">
          {certificates.map((certificate, index) => (
            <a key={index} className="embla__slide w-[424px] h-[556px] flex-shrink-0 px-2">
              <CertificateItem certificate={certificate} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateList;
