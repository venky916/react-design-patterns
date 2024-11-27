import { RecursiveComponent } from "../../components/functionalProgramming/RecursiveComponent";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};


export const RecursivePage = () => {
    return <RecursiveComponent data={nestedObject} />
}