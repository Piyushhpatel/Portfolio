import { CertificateData } from "@/data/data";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
  return (
    <div
      id="certificates"
      className="max-w-[1024px] w-full  bg-gradient-to-t from-[#E88DFF] to-[#2DBFFE] p-[3px] rounded-[15px]"
    >
      <div className="flex flex-col max-w-screen w-full h-full bg-[#0C162D] rounded-[12px] backdrop:blur-sm py-6 px-[20px]">
        <div>
          <h2 className="text-white text-[32px] w-full font-normal underline leading-[48px]">
            Certificates
          </h2>
        </div>
          <div className="flex flex-wrap mt-2 mx-auto gap-6 w-full items-center justify-center">
            {CertificateData.map((item) => (
              <CertificateCard
                key={item.id}
                name={item.name}
                certificate={item.certificate}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
