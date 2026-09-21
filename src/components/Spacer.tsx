interface SpacerProps {
  amount: string;
}

const Spacer = ({ amount }: SpacerProps) => (
  <div style={{ paddingTop: amount }} />
);

export default Spacer;
