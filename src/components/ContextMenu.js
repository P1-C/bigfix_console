import React, { useState } from 'react';
// import './ContextMenu.css'; // Import a CSS file for styling

const ContextMenu = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenuVisible(true);
    setPosition({ top: e.clientY, left: e.clientX });
  };

  const handleCloseContextMenu = () => {
    setContextMenuVisible(false);
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={handleCloseContextMenu} // Close the context menu when clicking outside
      style={{ position: 'relative', height: '200px', border: '1px solid #ccc' }}
    >
      {/* Your main content goes here */}

      {contextMenuVisible && (
        <div className="context-menu" style={{ top: position.top, left: position.left }} onClick={handleCloseContextMenu}>
          {/* Context menu items */}
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
