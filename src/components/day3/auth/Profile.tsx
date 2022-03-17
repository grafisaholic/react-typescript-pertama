export type ProfileProps = {
  name: string
}

export default function Profile({ name }: ProfileProps) {
  return (
    <div>welcome { name }, have a nice day.</div>
  )
}
