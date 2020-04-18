const nodes = [
  {
    id: 1,
    position: [10, 50],
    parameters: ["Parameter 01", "Parameter 01", "Parameter 01"],
    linkTo: 2
  },

  {
    id: 2,
    position: [250, 50],
    parameters: ["Parameter 05", "Parameter 06", "Parameter 07"],
    linkTo: 3
  },
  {
    id: 3,
    position: [500, 50],
    parameters: ["Parameter 08", "Parameter 09", "Parameter 10"],
    linkTo: null
  }
];

export const NodesContext = React.createContext(nodes);
