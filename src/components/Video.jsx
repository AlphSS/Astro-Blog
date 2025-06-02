export default function Video() {
  return (
    <button
      className="text-white rounded-3xl bg-amber-900 h-15 w-full hover:bg-amber-300"
      onClick={() => alert("JSX button clicked on  client side load")}
    >
      Click Me
    </button>
  );
}
