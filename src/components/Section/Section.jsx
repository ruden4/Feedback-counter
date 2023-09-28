export const Section = ({ title, children }) => (
  <section>
    {title && <h1>{title}</h1>}
    {children}
  </section>
);