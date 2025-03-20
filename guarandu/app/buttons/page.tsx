import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <Button size="lg">Default</Button>

      <Button size="lg" variant="primary">
        Primary
      </Button>

      <Button size="lg" variant="primaryOutline">
        Primary Outline
      </Button>

      <Button size="lg" variant="secondary">
        Secondary
      </Button>

      <Button size="lg" variant="secondaryOutline">
        Secondary Outline
      </Button>

      <Button size="lg" variant="danger">
        Danger
      </Button>

      <Button size="lg" variant="dangerOutline">
        Danger Outline
      </Button>
    </div>
  );
}
