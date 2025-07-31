import ProdId from "./[id]/page";
const prods = [
  {
    id: 1,
    name: "prod1",
    cost: 100,
  },
  {
    id: 2,
    name: "prod2",
    cost: 200,
  },
  {
    id: 3,
    name: "prod3",
    cost: 300,
  },
];
interface Props {
  params: {
    id: string;
    name: string;
    cost: number;
  };
}
export default function Prod({ params }: Props) {
  return (
    <>
      {prods.map((prod) => (
        <ProdId key={prod.id} params={prod} />
      ))}
    </>
  );
}
