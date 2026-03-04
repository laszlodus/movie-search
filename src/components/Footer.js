import "./footer.css";
export default function Footer() {
  const startYear = 2025;
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <p className="footer">
        &copy; {startYear} - {currentYear > startYear && `- ${currentYear}`}
        Created by Laszlo Dus
      </p>
    </footer>
  );
}
