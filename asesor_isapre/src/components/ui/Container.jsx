// src/components/ui/Container.jsx
const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
