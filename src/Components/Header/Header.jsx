import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-auto border-b-2 max-w-7xl">
      <h1 className="text-4xl font-bold">Knoelage Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
