interface ShowParams {
  id: string;
  name: string;
  surn: string;
}

export function Show({ params }: { params: ShowParams }) {
  return <div>example for demonstration layout in users</div>;
}
