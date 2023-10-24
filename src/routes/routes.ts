import { LazyExoticComponent, lazy } from "react";
type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const NoLazy = lazy(() => import('../lazyload/pages/NoLazyPage'));
const LazyLayout = lazy(() => import('../lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy Layout'
  },
  {
    to: '/no-lazy',
    path: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy Page'
  }
]
