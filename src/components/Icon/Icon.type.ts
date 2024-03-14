import IconSet from "./selection.json";

const Names = [...IconSet.icons.map((i) => i.properties.name)] as const;

export type IconNames = (typeof Names)[number];
