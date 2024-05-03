type SectionSubheadingProps = {
  children: React.ReactNode;
};

export default function SectionSubheading({
  children,
}: SectionSubheadingProps) {
  return (
    <h3 className="mb-2 text-xl text-gray-400 font-medium capitalize text-center">
      {children}
    </h3>
  );
}
