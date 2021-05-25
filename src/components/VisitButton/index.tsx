import { Container } from "./style";
import { GoLinkExternal } from "react-icons/go";

interface Props {
  url: string;
}

export function VisitButton({ url }: Props) {
  return (
    <Container href={url}>
      <GoLinkExternal size={20} />
      Visit
    </Container>
  );
}
