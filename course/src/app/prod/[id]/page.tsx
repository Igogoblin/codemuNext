interface Params {
  id: string;
  name: string;
  cost: number;
}

export default function prodId({ params }: Props) {
  return (
    <div>
      <h1>prod : {params.id}</h1>
      <h2>name : {params.name}</h2>
      <h3>cost : {params.cost}</h3>
    </div>
  );
}
