export default function Marquee({ items }) {
  return (
    <div className="relative flex md:w-2/3 mx-auto overflow-x-hidden ">
      <div className="animate-marquee whitespace-nowrap py-4">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-4xl">
              {item}
            </span>
          );
        })}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-4xl">
              {item}
            </span>
          );
        })}
      </div>
      {/* must have both of these in order to work */}
    </div>
  );
}
