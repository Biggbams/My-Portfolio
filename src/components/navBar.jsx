export default function NavBar() {
  return (
    <div className="h-[70px] w-full fixed pt-[20px] px-[25px] bg-[#ff614c]">
      <ul className="flex justify-between">
        <div className="items-center">
          <li>Input Icon</li>
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
                Experience
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
