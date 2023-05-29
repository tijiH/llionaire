import React from 'react';

const HomePage = () => {
  return (
    <div>
      <header style={headerStyle}>
        <nav>
          <ul style={menuStyle}>
            <li><a href="/common/PresentationPage.js" style={linkStyle}>Tijillionaire</a></li>
            <li><a href="#defi" style={linkStyle}>DeFi</a></li>
            <li><a href="#cefi" style={linkStyle}>CeFi</a></li>
            <li><a href="#cefi" style={linkStyle}>Stock market</a></li>
            <li><a href="#buymeacoffee" style={linkStyle}>Buy me a coffee</a></li>
            <li><a href="#contact" style={linkStyle}>Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main style={mainStyle}>
        {/* Contenu de la page d'accueil */}
      </main>
      
      <footer style={footerStyle}>
        {/* Pied de page */}
      </footer>
    </div>
  );
};

// Styles

const headerStyle = {
  background: '#292929',
  padding: '10px',
  color: '#fff',
};

const menuStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0',
  padding: '0',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  padding: '10px',
};

const mainStyle = {
  background: '#f2f2f2',
  minHeight: 'calc(100vh - 80px)', // Ajuster la hauteur en fonction de votre pied de page
  padding: '20px',
};

const footerStyle = {
  background: '#292929',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

export default HomePage;
