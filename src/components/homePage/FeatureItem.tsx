import { SvgItem } from "../../models/svgItem";

export type FeatureItem = {
    title: string;
    imageSrc?: string;
    svgItem?: SvgItem;
    description: JSX.Element;
};
