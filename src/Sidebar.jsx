import { FaTimes } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5';
import sublinks from './data';
import { useGlobalContext } from './Context';
import React, { useEffect } from 'react';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <>
      {/* {isSidebarOpen && (
        <button className='close-btn' onClick={closeSidebar}>
          <IoClose />
        </button>
      )} */}

      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='sidebar-container'>
          <div className='sidebar-links'>
            {sublinks.map((sublink) => {
              const { pageId, page, links } = sublink;
              const newPage = page.split(' ');
              return (
                <article key={pageId}>
                  <h4>
                    {newPage.length > 1 ? (
                      <>
                        <span style={{ color: 'var(--white)' }}>
                          {`${newPage[0]}`}
                        </span>
                        {newPage[1]}
                      </>
                    ) : (
                      page
                    )}
                  </h4>
                  <div className='sidebar-sublinks'>
                    {links.map((link) => {
                      const { id, label, icon, url } = link;
                      return (
                        <a key={id} href={url}>
                          {label}
                          <span className='heart'>{icon}</span>
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
