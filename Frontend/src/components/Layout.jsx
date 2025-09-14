// import "@fontsource/montserrat"; // Import Montserrat font
function Layout({children}) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col items-center ">
      {/* Global Heading */}
      <header
  className="text-[48px] text-white font-montserrat mb-6"
  style={{
    textShadow: `
      -2px -2px 0 #000,
       2px -2px 0 #000,
      -2px  2px 0 #000,
       2px  2px 0 #000
    `
  }}
>
  YourLedger
</header>
      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col ">
        {children}
      </main>
      {/* Footer (optional) */}
      <footer className="text-white-400 mt-auto py-4">©{currentYear}YourLedger</footer>
    </div>
  );
}
export default Layout;
