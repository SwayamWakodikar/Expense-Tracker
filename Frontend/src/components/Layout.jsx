// import "@fontsource/montserrat"; // Import Montserrat font
function Layout({children}) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col items-center ">
      {/* Global Heading */}
      <header className="text-[48px] text-[rgb(155,245,209)] font-montserrat glow-hover mb-6 ">
  LunarLedger
</header>
      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col ">
        {children}
      </main>
      {/* Footer (optional) */}
      <footer className="text-gray-400 mt-auto py-4">©{currentYear}LunarLedger</footer>
    </div>
  );
}
export default Layout;
