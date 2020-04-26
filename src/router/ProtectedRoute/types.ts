export type ProtectedRouteProps = {
  rules?: Array<() => string | null>;
  path: string;
  documentTitle: string;
  layout?: React.ComponentType;
  component: React.ComponentType;
};
