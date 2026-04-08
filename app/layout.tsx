export const metadata = {
  title: "Monarch Migration Software",
  description: "AWS-native data migration as a service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
