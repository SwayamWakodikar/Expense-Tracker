// import "@fontsource/montserrat"; // Import Montserrat font
function Layout({ children }) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col items-left h-  ">
      <div className="bg-blue-600">
        <header
        className="text-[48px] text-white font-montserrat mb-6 ml-6"
      >
        YourLedger
      </header>
      
      {/* Footer (optional) */}
      
      </div>
      {/* Main Content */}
      <main className="flex-grow w-full flex">{children}</main>
      <div>
        <footer className="text-white-400 mt-auto py-4">
        ©{currentYear}YourLedger
      </footer>
      </div>
    </div>
  );
}
export default Layout;
