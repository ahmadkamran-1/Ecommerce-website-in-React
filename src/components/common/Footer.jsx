function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "60px",
    padding: "20px",
    textAlign: "center",
    fontSize: "0.9rem",
    opacity: 0.7,
  },
};

export default Footer;
