export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      {children}
    </div>
  )
}