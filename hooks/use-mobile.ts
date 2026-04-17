import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value inside a small timeout to avoid synchronous execution
    let mounted = true;
    setTimeout(() => {
      if (mounted) setIsMobile(mql.matches)
    }, 0);

    const onChange = () => {
      setIsMobile(mql.matches)
    }
    
    mql.addEventListener("change", onChange)
    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return isMobile
}
