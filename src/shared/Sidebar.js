import React, {useEffect, useRef} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './sidebar.css';



const Sidebar = () => {
    const sidebarRef = useRef(null); // Ref for the sidebar element
    useEffect(() => {
        // Array of CDN resources
        const resources = [
          // Bootstrap CSS
          {
            tag: 'link',
            attrs: {
              rel: 'stylesheet',
              href: 'https://cdn.lineicons.com/4.0/lineicons.css',
              crossorigin: 'anonymous',
            },
          },
          // Bootstrap JS
          {
            tag: 'script',
            attrs: {
              src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
              integrity: 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz',
              crossorigin: 'anonymous',
            },
          },
        ];
    
        // Create and append elements
        const elements = resources.map(({ tag, attrs }) => {
          const element = document.createElement(tag);
          Object.assign(element, attrs);
          document.head.appendChild(element); // Use body for scripts if needed
          return element;
        });
    
        // Cleanup: Remove elements on unmount
        return () => {
          elements.forEach((element) => {
            document.head.removeChild(element);
          });
        };
      }, []); // Run once on mount

      // Function to toggle the sidebar's "expand" class
        const handleToggle = () => {
            if (sidebarRef.current) {
            sidebarRef.current.classList.toggle('expand');
            }
        };
     

    
    return (
        <aside id="sidebar" ref={sidebarRef}>
        <div className="d-flex">
            <button className="toggle-btn" type="button" onClick={handleToggle}>
                <i className="lni lni-grid-alt"></i>
            </button>
            <div className="sidebar-logo">
                <a href="#">CodzSword</a>
            </div>
        </div>
        <ul className="sidebar-nav">
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className="lni lni-user"></i>
                    <span>Profile</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className="lni lni-agenda"></i>
                    <span>Task</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                    data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                    <i className="lni lni-protection"></i>
                    <span>Auth</span>
                </a>
                <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Login</a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Register</a>
                    </li>
                </ul>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                    data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
                    <i className="lni lni-layout"></i>
                    <span>Multi Level</span>
                </a>
                <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse"
                            data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                            Two Links
                        </a>
                        <ul id="multi-two" className="sidebar-dropdown list-unstyled collapse">
                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Link 1</a>
                            </li>
                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Link 2</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className="lni lni-popup"></i>
                    <span>Notification</span>
                </a>
            </li>
            <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                    <i className="lni lni-cog"></i>
                    <span>Setting</span>
                </a>
            </li>
        </ul>
        <div className="sidebar-footer">
            <a href="#" className="sidebar-link">
                <i className="lni lni-exit"></i>
                <span>Logout</span>
            </a>
        </div>
    </aside>
    );
  };

  export default Sidebar;