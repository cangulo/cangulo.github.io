import { SvgItem } from "../common/svgBuilder/SvgItem";

export type FeatureItem = {
    title: string;
    imageSrc?: string;
    svgItem?: SvgItem;
    description: JSX.Element;
};
