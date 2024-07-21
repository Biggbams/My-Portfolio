export default function NavBar() {
  return (
    <div className="h-[70px] w-[100vw] fixed py-[20px] px-[25px] bg-navbar-1">
      <ul className="flex justify-between">
        <div>
          <li>
            <a href="/">
              {" "}
              <img src="" className="" alt="logo" />
            </a>
          </li>
        </div>
        <div className="flex space-x-5">
          <div>
            <li>
              <a href="#about" className="">
                About
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="#experience" className="">
                Skill
              </a>
            </li>
          </div>

          <div>
            <li>
              <a href="#projects" className="">
                Projects
              </a>
            </li>
          </div>
        </div>
        <a href="#contact" className="inline-block">
          Contact
        </a>
      </ul>
    </div>
  );
}
