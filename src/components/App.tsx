import * as React from 'react'

const GiftsDisplay = ({ gifts }: { gifts: string[] }) => (
  <>
    {gifts.map((gift) => {
      return <div data-testid="gift">Gift</div>
    })}
  </>
)

export const App = () => {
  const [gifts, setGifts] = React.useState<string[]>([])

  const addGifts = () => setGifts([...gifts, 'New Gift'])

  return (
    <div className="app">
      <div>Hello</div>
      <GiftsDisplay gifts={gifts} />

      <button data-testid="addGift" onClick={addGifts}>
        Add Gifts
      </button>
    </div>
  )
}
