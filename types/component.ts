
import { ComponentType } from "react";

export interface ComponentProp {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface RegistryComponent {
  slug: string;
  title: string;
  description: string;
  category?: string;
  component: ComponentType<any>;
  previewUrl?: string    
  installation: {
    cli: string;
    registry: string;
  };

  usage: string;

  dependencies?: string[];

  features?: string[];

  props?: ComponentProp[];
}

