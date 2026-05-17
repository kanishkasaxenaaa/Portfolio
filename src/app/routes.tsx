import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import FintraCaseStudy from './pages/FintraCaseStudy';
import SplitwiseCaseStudy from './pages/SplitwiseCaseStudy';
import DysmenorrheaCaseStudy from './pages/DysmenorrheaCaseStudy';
import Root from './Root';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'fintra', Component: FintraCaseStudy },
      { path: 'splitwise', Component: SplitwiseCaseStudy },
      { path: 'dysmenorrhea', Component: DysmenorrheaCaseStudy },
    ],
  },
]);
