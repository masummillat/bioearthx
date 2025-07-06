import { ApplicationType } from "@/types";
import { BiBuildingHouse } from "react-icons/bi";
import { FaJugDetergent } from "react-icons/fa6";
import { MdOutlineWaterDrop } from "react-icons/md";
import { SiCloudfoundry } from "react-icons/si";
import { TbBottleFilled } from "react-icons/tb";

export const applications: ApplicationType[] =[{
    name: "Adhesives",
    icon: TbBottleFilled
}, {
    name: "Foundry",
    icon: SiCloudfoundry
}, {
    name: "Detergents",
    icon: FaJugDetergent
}, {
    name: "Construction",
    icon: BiBuildingHouse
},{
    name: "Water Treatment",
    icon: MdOutlineWaterDrop
}];
