import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

export const langType = () => ({type: "LNG"});
export const closeVisibleOnResults = () => ({type: "CLOSEMENU"});
export const openVisibleOnResults = () => ({type: "OPENMENU"});
export const catering = (phone) => ({type: "CATERING", payload: phone})
export const addr = (place) => ({type: "LOCATION", payload: place});
export const lat = (coord) => ({type: "LATITUDE", payload: coord});
export const long = (coord) => ({type: "LONGITUUDE", payload: coord});
export const gen1 = (gen) => ({type: "GENDER1", payload: gen});
export const name1 = (name) => ({type: "NAME1", payload: name});
export const lastName1 = (lastname) => ({type: "LASTNAME1", payload: lastname});
export const photo1 = (uri) => ({type: "PHOTO1", payload: uri});
export const age1 = (age) => ({type: "AGE1", payload: age});
export const currentNickName = (nick) => ({type: "NICK1", payload: nick});
export const currentHeightAction = (height) => ({type: "CHILDHEIGHT1", payload: height});
export const currentWeightAction = (weight) => ({type: "CHILDWEIGHT1", payload: weight});
export const price = (pr) => ({type: "SUM", payload: pr});
export const lon = (l) => ({type: "LONG", payload: l});
export const time = (t) => ({type: "TIME", payload: t});
export const date = (d) => ({type: "DATE", payload: d});
export const userEmail = (email) => ({type: "EMAIL", payload: email});
export const userPhone = (phone) => ({type: "PHONE", payload: phone});
export const area1 = (ar) => ({type: "AREA", payload: ar});
export const street1 = (st) => ({type: "STREET", payload: st});
export const build1 = (b) => ({type: "BUILDING", payload: b});
export const flat1 = (f) => ({type: "FLAT", payload: f});
export const instr1 = (d) => ({type: "INSTRUCTIONS", payload: d});