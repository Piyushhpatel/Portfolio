import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const CertificateCard = ({ name, certificate }) => {
  return (
    <CardContainer>
      <CardBody className="flex flex-col items-center justify-center relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-[18px] text-balance max-w-[250px] text-center mt-4 font-bold text-white/80"
        >
          {name}
        </CardItem>
        <CardItem
          translateZ="10"
          className="w-full mt-2"
        >
          <Image
            src={certificate}
            alt={`Certificate of ${name}`}
            layout="responsive"
            width={250}
            height={150}
            className="rounded-xl max-h-[150px] max-w-[250px] group-hover/card:shadow-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default CertificateCard;
