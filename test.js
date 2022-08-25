import convertPairToObject from "./utility/convertPairToObject.js";
import createOptionFromObject from "./utility/createOptionFromObject.js";
import { pairList, output } from "./script.js";

const DUMMY_DATA = [
  "1000X=RadoniusMaximus",
  "10X=Radonius",
  "200X=Radonius",
  "20X=Radonius",
  "20X=RadoniusPrime",
  "30X=Radonius",
  "40X=Radonius",
  "Allegia=50Clasteron",
  "Allegia=500Clasteron",
  "Allegia=50BClasteron",
  "Allegia=51Clasteron",
  "Allegia=6RClasteron",
  "Alpha=100",
  "Alpha=2",
  "Alpha=200",
  "Alpha=2A",
  "Alpha=2A8000",
  "Alpha=2A900",
  "Callisto=Morphamax",
  "Callisto=Morphamax500",
  "Callisto=Morphamax5000",
  "Callisto=Morphamax600",
  "Callisto=Morphamax6000SE",
  "Callisto=Morphamax6000SE2",
  "Callisto=Morphamax700",
  "Callisto=Morphamax7000",
  "Xiph=Xlater10000",
  "Xiph=Xlater2000",
  "Xiph=Xlater300",
  "Xiph=Xlater40",
  "Xiph=Xlater5",
  "Xiph=Xlater50",
  "Xiph=Xlater500",
  "Xiph=Xlater5000",
  "Xiph=Xlater58",
];

export default function populateDummies() {
  for (const dummy of DUMMY_DATA) {
    const dummyObj = convertPairToObject(dummy, "=");
    pairList.push(dummyObj);
    output.options.add(createOptionFromObject(dummyObj));
  }
}
