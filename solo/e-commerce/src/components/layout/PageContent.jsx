import { Container } from "./Container";

export function PageContent({ children }) {
  return (
    <main className="flex justify-center items-center">
      <Container>{children}</Container>
    </main>
  );
}
