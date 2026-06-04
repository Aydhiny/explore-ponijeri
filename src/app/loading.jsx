export default function Loading() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[90]"
      style={{
        background: "rgba(10, 22, 50, 0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated snowflake ring */}
        <div className="relative w-16 h-16">
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
            style={{
              borderTopColor: "#0084FF",
              borderRightColor: "rgba(0,132,255,0.3)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-blue-400 text-xl">❄</span>
          </div>
        </div>
        <p className="text-white/50 text-sm tracking-widest uppercase">Učitavanje...</p>
      </div>
    </div>
  );
}
