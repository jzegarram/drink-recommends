export type Route = {
  id: string;
  title?: string;
  element: React.ReactNode;
  path: string;
  children?: Route[];
};
