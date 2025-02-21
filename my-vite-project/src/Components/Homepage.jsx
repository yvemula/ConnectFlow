import React from "react";

const HomePage = () => {
  // Temporary list of friends
  const friendsList = [
    { name: "Alice", isOnline: true },
    { name: "Bob", isOnline: false },
    { name: "Charlie", isOnline: true },
    { name: "Diana", isOnline: true },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>ChatVerse</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>
            Home
          </a>
          <a href="/about" style={styles.navLink}>
            About
          </a>
          <a href="/profile" style={styles.navLink}>
            Profile
          </a>
        </nav>
      </header>

      {/* Main content area */}
      <main style={styles.main}>
        {/* Friends Sidebar */}
        <aside style={styles.sidebar}>
          <h2 style={styles.friendsHeading}>Friends Online</h2>
          <ul style={styles.friendsList}>
            {friendsList.map((friend, index) => (
              <li key={index} style={styles.friendItem}>
                <span
                  style={{
                    ...styles.statusDot,
                    backgroundColor: friend.isOnline ? "green" : "gray",
                  }}
                />
                {friend.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Section */}
        <section style={styles.chatSection}>
          <h2>Start a new chat</h2>
          <div style={styles.chatInputContainer}>
            <input
              type="text"
              placeholder="Enter a friend's name"
              style={styles.chatInput}
            />
            <button style={styles.chatButton}>Start Chat</button>
          </div>

          <hr />

          <div style={styles.currentChats}>
            <h3>Recent Chats</h3>
            <div style={styles.chatBox}>Chat with Alice (yesterday)</div>
            <div style={styles.chatBox}>Chat with Charlie (2 days ago)</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 ChatVerse. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#4c6ef5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    display: "flex",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  sidebar: {
    width: "20%",
    padding: "20px",
    backgroundColor: "#fff",
    marginRight: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  friendsHeading: {
    marginTop: 0,
  },
  friendsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  friendItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    fontSize: "1rem",
  },
  statusDot: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    marginRight: "8px",
  },
  chatSection: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  chatInputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  chatInput: {
    flex: 1,
    padding: "8px",
    fontSize: "1rem",
  },
  chatButton: {
    padding: "10px 20px",
    backgroundColor: "#4c6ef5",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  currentChats: {
    marginTop: "20px",
  },
  chatBox: {
    backgroundColor: "#ececec",
    padding: "10px",
    borderRadius: "4px",
    marginTop: "10px",
  },
  footer: {
    backgroundColor: "#4c6ef5",
    textAlign: "center",
    padding: "10px",
    color: "#fff",
  },
};

export default HomePage;
