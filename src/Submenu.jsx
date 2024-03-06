import { useRef } from 'react';
import { useGlobalContext } from './Context';
import sublinks from './data';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((sublink) => sublink.pageId == pageId);
  const newPage = currentPage?.page.split(' ');

  const submenuRef = useRef(null);
  //it works with setPageId(null) as well, this is more advanced usage
  const handleOnMouseLeave = (e) => {
    const submenu = submenuRef.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleOnMouseLeave}
      ref={submenuRef}
    >
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        <div className='submenu-sublinks'>
          {currentPage?.links?.map((link) => {
            const { id, url, label, icon } = link;
            return (
              <a key={id} href={url}>
                <span className='heart'>{icon}</span>
                {label}
              </a>
            );
          })}
        </div>
      </div>
      <h4>
        <>
          {newPage?.[0]}
          <span style={{ color: 'var(--white)' }}>{newPage?.[1]}</span>
        </>
      </h4>
    </div>
  );
};
export default Submenu;
