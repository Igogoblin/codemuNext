import users from "../../users";
interface UserParams {
  id: string;
  name: string;
  surn: string;
}

interface UserProps {
  params: UserParams;
}
interface User {
  id: string;
  name: string;
  surn: string;
}
type Users = {
  [key: string]: User; // ключи - строки, значения - объекты типа User
};
export default function User({ params }: UserProps) {
  const user: User | undefined = users[params.id];
  if (!user) return <div>user not found</div>;
  return (
    <div>
      <span>{user.name}</span>
      <span>{user.surn}</span>
      <span>{user.id}</span>
    </div>
  );
}
