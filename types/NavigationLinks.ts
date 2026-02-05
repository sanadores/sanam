import { IconType } from "react-icons";

export interface INavegationLinksProps {
    title: string;
    route: string;
    Icon?: IconType;
    styleIcon?: string;
    styleDiv?: string;
    styleSpan?: string;
    openNew?: boolean;
}