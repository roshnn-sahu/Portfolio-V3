
import { ComponentType } from "react";

export interface ComponentProp {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface RegistryItem {
  slug: string;
  title: string;
  description: string;

  category: string;

  component: ComponentType;

  installation: {
    cli: string;
    registry: string;
  };

  usage: string;

  dependencies?: string[];

  features?: string[];

  props?: ComponentProp[];
}

