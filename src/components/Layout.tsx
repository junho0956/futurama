import { Navigation } from "./Navigation"

export const Layout:React.FC = ({children}) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}