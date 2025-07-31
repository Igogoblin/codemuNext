export const metadata = {
  title: "About",
  description: "This is the about page",
};
export default function About() {
  const name = "John Doe";
  return (
    <div>
      <h1>About</h1>
      <p>Hello, {name}</p>
    </div>
  );
}
