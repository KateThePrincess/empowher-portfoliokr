import { useGlobalContext } from './Context';
import sublinks from './data';
const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className='nav-links'>
      {sublinks.map((link) => {
        const { pageId, page } = link;
        const newPage = page.split(' ');
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}
            // onMouseOut={() => setPageId(null)}
          >
            {newPage.length > 1 ? (
              <>
                {newPage[0]}
                <span
                  style={{
                    color: 'var(--white)',
                    background: 'transparent',
                    padding: 0,
                  }}
                  className='nav-link'
                >
                  {newPage[1]}
                </span>
              </>
            ) : (
              page
            )}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
