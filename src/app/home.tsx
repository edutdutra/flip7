import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { router } from "expo-router";

export default function Home() {
  const handleNewGame = () => {
    router.push("/match");
  };

  return (
    <Container>
      <Button text="Novo jogo" onPress={handleNewGame} />
    </Container>
  );
}
