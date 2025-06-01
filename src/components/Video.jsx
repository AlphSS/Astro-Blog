export default function Video() {
  return (
    <button
      className="text-amber-800 rounded-3xl bg-amber-400 h-15 w-full"
      onClick={() => alert("JSX button clicked client side load")}
    >
      Click Me
    </button>
  );
}
