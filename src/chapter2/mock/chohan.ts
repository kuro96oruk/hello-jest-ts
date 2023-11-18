import {seed} from "./seed";

export const chohan = () => (seed() % 2 === 0 ? "even" : "odd");
