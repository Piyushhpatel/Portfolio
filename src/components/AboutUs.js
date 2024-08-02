import NoSsr from "./no-ssr";
import VoxelDog from "./voxel-dog";
import { Words } from "./Words";

const AboutUs = () => {
    return (
        <div className="max-w-screen max-h-[600px] w-full h-full bg-gradient-to-t from-[#E88DFF] to-[#2DBFFE] p-[3px] rounded-[15px]">
            <div className="flex justify-between items-center max-w-screen max-h-[600px] w-full h-full bg-[#0C162D] rounded-[12px] backdrop:blur-sm">
                <div>
                    <Words/>
                </div>
                
                <div>
                <VoxelDog/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;