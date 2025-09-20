const BackgroundVisuals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      {/* Subtle tech elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-ping animation-delay-3000"></div>
    </div>
  );
};

export default BackgroundVisuals;