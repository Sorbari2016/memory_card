// Create a footer component
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Created by <strong>Blackpage Tech</strong> (c){currentYear}
      </p>
    </footer>
  );
}

export default Footer;
