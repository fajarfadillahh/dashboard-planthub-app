export default function Footer() {
  return (
    <footer className="flex h-16 items-center justify-center px-6 text-center">
      <p className="text-sm font-medium capitalize text-default-900">
        &copy; Planthub {new Date().getFullYear()} | Develop by 💚
      </p>
    </footer>
  );
}
