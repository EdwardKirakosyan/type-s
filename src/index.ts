const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium

console.log(mySize)

type Maa = {
  readonly id: number
  name: string
  reti: (date: Date) => void
}

let emplo: Maa = {
  id: 1,
  name: "ddd",
  reti: (date: Date) => console.log(date),
}
