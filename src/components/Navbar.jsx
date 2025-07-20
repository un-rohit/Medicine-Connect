import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleToggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav style={styles.navbar} ref={navRef}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img src="/images/logo1.png" alt="Logo" style={styles.logoImage} />
        <h2 style={styles.title}>MedicineConnect</h2>
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>

        {/* Services Dropdown */}
        <li style={styles.navItem}>
          <button
            style={styles.dropdownBtn}
            onClick={() => handleToggle("services")}
          >
            Services ▾
          </button>
          {openMenu === "services" && (
            <ul style={styles.dropdown}>
              <li><Link to="/general" style={styles.dropdownLink}>General Checkup</Link></li>
              <li><Link to="/dental" style={styles.dropdownLink}>Dental Care</Link></li>
              <li><Link to="/pediatrics" style={styles.dropdownLink}>Pediatrics</Link></li>
            </ul>
          )}
        </li>

        {/* Doctors Dropdown */}
        <li style={styles.navItem}>
          <button
            style={styles.dropdownBtn}
            onClick={() => handleToggle("doctors")}
          >
            Doctors ▾
          </button>
          {openMenu === "doctors" && (
            <ul style={styles.dropdown}>
              <li><Link to="/cardiology" style={styles.dropdownLink}>Cardiologist</Link></li>
              <li><Link to="/dermatology" style={styles.dropdownLink}>Dermatologist</Link></li>
            </ul>
          )}
        </li>

        {/* Pharmacy Dropdown */}
        <li style={styles.navItem}>
          <button
            style={styles.dropdownBtn}
            onClick={() => handleToggle("pharmacy")}
          >
            Pharmacy ▾
          </button>
          {openMenu === "pharmacy" && (
            <ul style={styles.dropdown}>
              <li><Link to="/medicines" style={styles.dropdownLink}>Medicines</Link></li>
              <li><Link to="/equipments" style={styles.dropdownLink}>Medical Equipment</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/appointment" style={styles.link}>Appointments</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>

        {/* ✅ Login & Signup Buttons */}
        
        <li><Link to="/auth" style={{ ...styles.authBtn, background: "#320108ff", color: "#fff" }}>Sign In</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 25px",
    background: "#f6f2f2ff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontSize: "16px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: 0,
    color: "#333",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  navItem: {
    position: "relative",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px 12px",
    transition: "color 0.3s",
  },
  dropdownBtn: {
    background: "transparent",
    border: "none",
    fontSize: "17px",
    color: "#333",
    cursor: "pointer",
    padding: "8px 12px",
  },
  dropdown: {
    position: "absolute",
    top: "40px",
    left: 0,
    background: "linear-gradient(170deg, #f6f2f2ff)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "10px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    minWidth: "180px",
    zIndex: 999,
  },
  dropdownLink: {
    color: "#fa1134ff",
    textDecoration: "none",
    padding: "8px 10px",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  authBtn: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "1px solid #fa1134ff",
    color: "#fa1134ff",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "16px",
    transition: "0.3s",
  },
};

export default Navbar;
