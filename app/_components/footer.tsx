export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl border-t border-zinc-100 px-6 py-8 md:px-0">
        <p className="text-zinc-600">
          <span className="font-medium">Built by</span>{" "}
          <a
            href="https://github.com/handikaharianto"
            target="_blank"
            className="font-bold transition duration-300 hover:text-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
          >
            @handikaharianto
          </a>
        </p>
      </div>
    </footer>
  );
}
