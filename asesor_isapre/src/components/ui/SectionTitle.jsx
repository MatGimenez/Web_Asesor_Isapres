// src/components/ui/SectionTitle.jsx
const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
          {eyebrow}
        </h2>
      )}
      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
