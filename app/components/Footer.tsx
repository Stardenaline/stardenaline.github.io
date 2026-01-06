export default function Footer() {
  return (
    <footer className="mt-12 py-6 text-center border-t border-accent/10">
      <p className="text-text-secondary text-sm">
        &copy; {new Date().getFullYear()} starzy.top. All rights reserved.
      </p>
    </footer>
  );
}
