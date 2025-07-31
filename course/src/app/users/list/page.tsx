import Link from "next/link";
import users from "../users";

export default function List() {
  const list = users.map((user) => {
    return (
      <li key={user.id}>
        <Link href={`/users/show/${user.id}`}>{user.name}</Link>
      </li>
    );
  });
  return <ul>{list}</ul>;
}
