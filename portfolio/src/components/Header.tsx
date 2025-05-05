
function Header() {
  return (
    <header className="flex flex-col bg-midnight text-lightp-4 md:p-8 justify-center items-center gap-y-2">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
        {/* Profile picture */}
        <img src="/images/profile.jpg" className="object-cover w-full h-full" alt="Profile picture" />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl">Henrique Oliveira</h1>
      <p className="rounded-full bg-secondary w-fit px-3 italic">FullStack Engineer </p>
      <p className="text-sm">Azores, Portugal</p>

      <button className="rounded-full bg-white hover:bg-secondary hover:text-white w-fit text-black px-5 py-2 shadow-[-1px_6px_0px_0px_rgba(0,_0,_0,_0.9)] hover:px-6 transition-all duration-100 ease-in "><a href="#" >Contact me</a></button>

    </header>
  )
}

export default Header