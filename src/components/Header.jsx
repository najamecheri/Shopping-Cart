export default function Header() {
  return (
    <header className="mx-auto my-2 flex items-center h-22 justify-between px-2 xl:w-5/6">
      <h2  className="text-2xl font-bold xl:text-3xl">Big Mart</h2>
      <div>
        <span></span>
        <i className="bx bx-cart cursor-pointer text-3xl transition-colors hover:text-amber-600 xl:text-4xl"></i>
      </div>
    </header>
  );
}