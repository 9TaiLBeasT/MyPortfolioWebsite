
interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <div
      className={`flex items-center gap-4 text-3xl md:text-4xl font-bold section-title-animation ${className}`}
    >
      <div className="flex items-center">
        <span className="text-primary">#</span>
        <span className="text-white ml-1">{title}</span>
      </div>
      <div className="bg-primary h-px flex-1" />
    </div>
  );
};
