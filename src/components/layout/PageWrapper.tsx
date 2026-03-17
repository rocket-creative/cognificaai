export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-5 mx-auto max-w-[1440px] sm:px-8 lg:px-12 xl:px-16">
      {children}
    </div>
  );
}
