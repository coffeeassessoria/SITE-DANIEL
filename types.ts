import { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface DeliverableItem {
  id: number;
  text: string;
  icon?: ReactNode;
}
