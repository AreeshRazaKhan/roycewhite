import PropTypes from 'prop-types'

import SiteFooter from '@/components/brand/site-footer'
import SiteHeader from '@/components/brand/site-header'

const PageShell = ({ children }) => {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-navy-900 focus:text-white focus:px-4 focus:py-2 focus:font-accent focus:text-[12px] focus:tracking-[0.12em] focus:uppercase"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}

PageShell.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageShell
