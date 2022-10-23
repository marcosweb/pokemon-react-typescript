import { Container, Button } from "react-bootstrap";

import "./Paginate.sass";

interface IProps {
    next: string | null,
    prev: string | null,
    handleClick(url: string): void
}

export function Paginate({ next, prev, handleClick }: IProps) {
  return (
    <Container className="Pagination">
      {prev && (
        <Button
          variant="warning"
          className="button"
          onClick={() => handleClick(prev)}
        >
          ⇠ Voltar
        </Button>
      )}
      {next && <Button
        variant="warning"
        className="button"
        onClick={() => handleClick(next)}
      >
        Avançar ⇢
      </Button>}
    </Container>
  );
}