// import "@fontsource/montserrat"; // Import Montserrat font
function Layout({children}) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Global Heading */}
      <header className="text-[48px] text-[rgb(155,245,209)] font-montserrat glow-hover">
        LunarLedger
      </header>
      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center">
        {children}
      </main>
      {/* Footer (optional) */}
      <footer className="text-gray-400 mt-auto py-4">© 2025 LunarLedger</footer>
    </div>
  );
}
export default Layout;
