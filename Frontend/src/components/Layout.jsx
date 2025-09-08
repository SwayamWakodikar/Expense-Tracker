function Layout(){
    return(
        <div className="min-h-screen flex flex-col items-center">
      {/* Global Heading */}
      <h1
  className="text-[48px] font-bold text-[rgb(155,245,209)] font-montserrat glow-hover"
>
  LunarLedger
</h1>


      {/* Footer (optional) */}
      <footer className="text-gray-400 mt-auto py-4">
        © 2025 LunarLedger
      </footer>
    </div>
    );
}
export default Layout;