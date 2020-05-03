export type EnhancedRouteProps = {
  // rules?: Array<() => string | null>;
  path: string;
  documentTitle: string;
  layout?: React.ComponentType;
  component: React.ComponentType;
};
