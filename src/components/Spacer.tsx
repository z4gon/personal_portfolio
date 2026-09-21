type SpacerAmount = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const amountToRem: Record<SpacerAmount, string> = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
}

interface SpacerProps {
  amount: SpacerAmount
}

const Spacer = ({ amount }: SpacerProps) => (
  <div style={{ paddingTop: amountToRem[amount] }} />
)

export default Spacer
