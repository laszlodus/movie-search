export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p className="footer">&copy; {year} Created by Laszlo Dus</p>
    </footer>
  );
}
