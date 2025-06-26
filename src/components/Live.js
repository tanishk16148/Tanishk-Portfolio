import React, { useState, useEffect } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import './Live.css';

const LiveFigmaToCode = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [reactCode, setReactCode] = useState('');
  const [activeTab, setActiveTab] = useState('html');
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Track theme changes reactively
  useEffect(() => {
    const target = document.body;

    const checkDarkMode = () => {
      const isDark = target.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkDarkMode(); // initial check

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(target, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      generateCodeFromImage(file);
    }
  };

  const generateCodeFromImage = () => {
    setLoading(true);
    setTimeout(() => {
      setHtmlCode(`<!-- Sample HTML -->\n<div class="card">\n  <h1>Hello World</h1>\n</div>`);
      setCssCode(`/* Sample CSS */\n.card {\n  padding: 20px;\n  background-color: #f5f5f5;\n}`);
      setReactCode(`// Sample React JSX\nconst Card = () => (\n  <div className="card">\n    <h1>Hello World</h1>\n  </div>\n);`);
      setLoading(false);
    }, 1500);
  };

  const getActiveCode = () =>
    activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : reactCode;

  return (
    <section className={`live-container ${isDarkMode ? 'dark' : ''}`}>
      <h1 className="live-heading">Live Figma to Code Playground</h1>
      <p className="live-subtext">
        Upload a UI screenshot and watch the AI generate matching frontend code.
      </p>

      <input
        type="file"
        accept="image/*"
        className="live-file-input"
        onChange={handleFileChange}
      />

      {uploadedImage && (
        <img src={uploadedImage} alt="Preview" className="live-preview-img" />
      )}

      {loading ? (
        <p className="text-blue-500 font-semibold">Generating code...</p>
      ) : (
        (htmlCode || cssCode || reactCode) && (
          <>
            <div className="tab-buttons">
              {['html', 'css', 'react'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? 'active' : 'inactive'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="code-output">
              <CopyBlock
                text={getActiveCode()}
                language={activeTab}
                showLineNumbers
                theme={dracula}
                wrapLines
              />
            </div>
          </>
        )
      )}

      <p className="live-note">
        Note: This is a demo. AI accuracy may vary based on image complexity.
      </p>
    </section>
  );
};

export default LiveFigmaToCode;
