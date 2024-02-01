import Publ from '../components/Pubs';
import Texts from '../components/Texts';
import Works from '../components/Works'

export const menu = [
  { title: "Works", path: "works", element: <Works /> },
  { title: "Publ", path: "publications", element: <Publ /> },
  { title: "Texts", path: "texts", element: <Texts /> }
];