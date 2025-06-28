
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 text-center py-8">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Sloe Media. All Rights Reserved.</p>
        <p>AI-Powered Brand Growth. Ottawa, Ontario, Canada.</p>
      </div>
    </footer>
  );
};

export default Footer;
