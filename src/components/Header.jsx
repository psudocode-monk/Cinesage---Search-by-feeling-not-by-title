import { LOGO_URL } from "../utils/constants"

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-4 z-10 flex items-center">
      <img
        src={LOGO_URL}
        alt="logo"
        className="h-12 md:h-16 lg:h-20 object-contain opacity-70"
      />
    </div>
  )
}

export default Header
